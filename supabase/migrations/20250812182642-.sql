-- Create enum types for dental platform
CREATE TYPE public.user_role AS ENUM ('patient', 'doctor', 'prosthetist', 'admin');
CREATE TYPE public.appointment_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
CREATE TYPE public.treatment_status AS ENUM ('planned', 'in_progress', 'completed', 'cancelled');
CREATE TYPE public.communication_type AS ENUM ('message', 'file', 'prescription', 'lab_order');

-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  role user_role NOT NULL DEFAULT 'patient',
  avatar_url TEXT,
  date_of_birth DATE,
  address TEXT,
  bio TEXT,
  specialization TEXT, -- for doctors
  license_number TEXT, -- for doctors
  clinic_name TEXT, -- for doctors
  lab_name TEXT, -- for prosthetists
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create doctors table for detailed doctor information
CREATE TABLE public.doctors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  specialization TEXT NOT NULL,
  experience_years INTEGER,
  education TEXT,
  certifications TEXT[],
  consultation_fee DECIMAL(10,2),
  rating DECIMAL(2,1) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  availability JSONB, -- Store weekly schedule
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create treatments table
CREATE TABLE public.treatments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER,
  price DECIMAL(10,2),
  category TEXT,
  requires_lab BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create appointments table
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  doctor_id UUID NOT NULL REFERENCES public.doctors(id) ON DELETE CASCADE,
  treatment_id UUID REFERENCES public.treatments(id),
  appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  status appointment_status DEFAULT 'pending',
  notes TEXT,
  total_cost DECIMAL(10,2),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create lab_orders table for doctor-prosthetist communication
CREATE TABLE public.lab_orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  doctor_id UUID NOT NULL REFERENCES public.doctors(id) ON DELETE CASCADE,
  prosthetist_id UUID REFERENCES public.profiles(id),
  patient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  appointment_id UUID REFERENCES public.appointments(id),
  order_details TEXT NOT NULL,
  specifications JSONB,
  due_date DATE,
  status treatment_status DEFAULT 'planned',
  files JSONB, -- Store file URLs
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create communications table for messaging between users
CREATE TABLE public.communications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sender_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  recipient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  message TEXT,
  message_type communication_type DEFAULT 'message',
  related_order_id UUID REFERENCES public.lab_orders(id),
  files JSONB,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  doctor_id UUID NOT NULL REFERENCES public.doctors(id) ON DELETE CASCADE,
  appointment_id UUID REFERENCES public.appointments(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.treatments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lab_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.communications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Doctors can view all profiles" ON public.profiles FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role IN ('doctor', 'admin'))
);

-- Create RLS policies for doctors
CREATE POLICY "Doctors are viewable by everyone" ON public.doctors FOR SELECT USING (true);
CREATE POLICY "Doctors can update their own info" ON public.doctors FOR UPDATE USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = profile_id AND user_id = auth.uid())
);

-- Create RLS policies for treatments
CREATE POLICY "Treatments are viewable by everyone" ON public.treatments FOR SELECT USING (true);

-- Create RLS policies for appointments
CREATE POLICY "Users can view their own appointments" ON public.appointments FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND (id = patient_id OR id = (SELECT profile_id FROM public.doctors WHERE id = doctor_id))
  )
);
CREATE POLICY "Patients can create appointments" ON public.appointments FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND id = patient_id)
);
CREATE POLICY "Users can update their own appointments" ON public.appointments FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND (id = patient_id OR id = (SELECT profile_id FROM public.doctors WHERE id = doctor_id))
  )
);

-- Create RLS policies for lab_orders
CREATE POLICY "Users can view their lab orders" ON public.lab_orders FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND (id = prosthetist_id OR id = (SELECT profile_id FROM public.doctors WHERE id = doctor_id))
  )
);
CREATE POLICY "Doctors can create lab orders" ON public.lab_orders FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    JOIN public.doctors d ON p.id = d.profile_id 
    WHERE p.user_id = auth.uid() AND d.id = doctor_id
  )
);

-- Create RLS policies for communications
CREATE POLICY "Users can view their messages" ON public.communications FOR SELECT USING (
  sender_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid()) OR
  recipient_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid())
);
CREATE POLICY "Users can send messages" ON public.communications FOR INSERT WITH CHECK (
  sender_id = (SELECT id FROM public.profiles WHERE user_id = auth.uid())
);

-- Create RLS policies for reviews
CREATE POLICY "Reviews are viewable by everyone" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Patients can create reviews" ON public.reviews FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND id = patient_id AND role = 'patient')
);

-- Create functions for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_doctors_updated_at BEFORE UPDATE ON public.doctors FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON public.appointments FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_lab_orders_updated_at BEFORE UPDATE ON public.lab_orders FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample treatments
INSERT INTO public.treatments (name, description, duration_minutes, price, category, requires_lab) VALUES
('Dental Cleaning', 'Professional teeth cleaning and examination', 60, 120.00, 'Preventive', false),
('Dental Filling', 'Tooth restoration with composite filling', 90, 180.00, 'Restorative', false),
('Crown Installation', 'Dental crown placement', 120, 800.00, 'Restorative', true),
('Root Canal', 'Root canal treatment', 150, 1200.00, 'Endodontic', false),
('Dental Implant', 'Single tooth implant placement', 180, 2500.00, 'Surgical', true),
('Teeth Whitening', 'Professional teeth whitening treatment', 90, 350.00, 'Cosmetic', false),
('Dental Bridge', 'Bridge installation for missing teeth', 120, 1500.00, 'Restorative', true),
('Orthodontic Consultation', 'Initial consultation for braces or aligners', 60, 100.00, 'Orthodontic', false);