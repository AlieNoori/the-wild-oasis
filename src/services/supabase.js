import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://hbzvvwyptqmtfbyaeizo.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhienZ2d3lwdHFtdGZieWFlaXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMDUyNDMsImV4cCI6MjAyOTg4MTI0M30.8hgFLEI_ceH-pwdH6YeWCNtyUemLqYGZBsI5__pRG50';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
