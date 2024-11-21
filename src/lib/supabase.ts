import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehhvtziygsccuxsfnatf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoaHZ0eml5Z3NjY3V4c2ZuYXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEyMDYyNTAsImV4cCI6MjA0Njc4MjI1MH0.V13EIDGkF7yx-OjQZHMR3NYUXnx2XI-d42uoXKvwIqo';

export const supabase = createClient(supabaseUrl, supabaseKey);
