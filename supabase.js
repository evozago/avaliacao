import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const SUPABASE_URL = "https://SUA_URL.supabase.co";
const SUPABASE_ANON_KEY = "SUA_CHAVE_ANON";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
