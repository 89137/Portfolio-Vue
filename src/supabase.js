import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase URL and anon key from the dashboard
const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY;

if (!supabaseKey || !supabaseUrl) {
  throw new Error(
    'Missing Supabase URL or key. Please set the VUE_APP_SUPABASE_URL and VUE_APP_SUPABASE_KEY environment variables.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
