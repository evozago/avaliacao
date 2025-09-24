import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const SUPABASE_URL = "https://lvgwkktrzizobazaxdty.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2Z3dra3Ryeml6b2JhemF4ZHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MzIzMjYsImV4cCI6MjA3NDMwODMyNn0.EeAG4AAT0Bix6LADh1bl50vFPWS7qzqIL5g_R7G5M7o";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
