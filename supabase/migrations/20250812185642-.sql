-- Fix security warnings: Set search_path for functions

-- Update the get_current_user_profile_id function with proper search_path
CREATE OR REPLACE FUNCTION public.get_current_user_profile_id()
RETURNS UUID 
LANGUAGE SQL 
SECURITY DEFINER 
SET search_path = ''
STABLE
AS $$
  SELECT id FROM public.profiles WHERE user_id = auth.uid();
$$;

-- Update the can_access_lab_order function with proper search_path  
CREATE OR REPLACE FUNCTION public.can_access_lab_order(order_id UUID)
RETURNS BOOLEAN 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = ''
STABLE
AS $$
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
    FROM public.lab_orders lo
    LEFT JOIN public.doctors d ON d.id = lo.doctor_id
    WHERE lo.id = order_id;
    
    -- Allow access if:
    -- 1. User is the treating doctor
    -- 2. User is the assigned prosthetist (only if prosthetist_id is not null)
    RETURN (
      current_profile_id = order_doctor_profile_id OR 
      (order_prosthetist_id IS NOT NULL AND current_profile_id = order_prosthetist_id)
    );
  END;
$$;