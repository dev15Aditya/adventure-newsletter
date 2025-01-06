import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uyeuowntopptetnpkcyi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5ZXVvd250b3BwdGV0bnBrY3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU4MjMwMTIsImV4cCI6MjA1MTM5OTAxMn0.KnU12EVAGjQ5odTQLnBZgUwGBTnwEMlB9ACPiI52rKY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
