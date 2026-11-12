CREATE TABLE public.appointment_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) <= 255),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 8 AND 30),
  service TEXT NOT NULL CHECK (char_length(service) <= 100),
  preferred_period TEXT CHECK (preferred_period IS NULL OR char_length(preferred_period) <= 30),
  message TEXT CHECK (message IS NULL OR char_length(message) <= 1000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.appointment_requests TO service_role;

ALTER TABLE public.appointment_requests ENABLE ROW LEVEL SECURITY;
-- No policies for anon/authenticated: submissions are inserted only from server code with the service role.