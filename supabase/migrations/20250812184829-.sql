-- Fix security issue: Restrict lab order access to only assigned prosthetist and treating doctor

-- First, create a security definer function to avoid infinite recursion issues
CREATE OR REPLACE FUNCTION public.get_current_user_profile_id()
RETURNS UUID AS $$
  SELECT id FROM public.profiles WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Create a function to check if user can access a specific lab order
CREATE OR REPLACE FUNCTION public.can_access_lab_order(order_id UUID)
RETURNS BOOLEAN AS $$
  DECLARE
    current_profile_id UUID;
    order_doctor_profile_id UUID;
    order_prosthetist_id UUID;
  BEGIN
    -- Get current user's profile ID
    current_profile_id := public.get_current_user_profile_id();
    
    IF current_profile_id IS NULL THEN
      RETURN FALSE;
    END IF;
    
    -- Get the lab order details
    SELECT 
      lo.prosthetist_id,
      d.profile_id
    INTO 
      order_prosthetist_id,
      order_doctor_profile_id
    FROM lab_orders lo
    LEFT JOIN doctors d ON d.id = lo.doctor_id
    WHERE lo.id = order_id;
    
    -- Allow access if:
    -- 1. User is the treating doctor
    -- 2. User is the assigned prosthetist (only if prosthetist_id is not null)
    RETURN (
      current_profile_id = order_doctor_profile_id OR 
      (order_prosthetist_id IS NOT NULL AND current_profile_id = order_prosthetist_id)
    );
  END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Drop the existing policy
DROP POLICY IF EXISTS "Users can view their lab orders" ON public.lab_orders;

-- Create a more secure policy for viewing lab orders
CREATE POLICY "Secure lab order access" 
ON public.lab_orders 
FOR SELECT 
USING (public.can_access_lab_order(id));

-- Add policy for updating lab orders (only assigned prosthetist and treating doctor)
CREATE POLICY "Secure lab order updates" 
ON public.lab_orders 
FOR UPDATE 
USING (public.can_access_lab_order(id));

-- Add policy for deleting lab orders (only treating doctor)
CREATE POLICY "Doctors can delete their lab orders" 
ON public.lab_orders 
FOR DELETE 
USING (
  EXISTS (
    SELECT 1 
    FROM doctors d 
    WHERE d.id = lab_orders.doctor_id 
    AND d.profile_id = public.get_current_user_profile_id()
  )
);