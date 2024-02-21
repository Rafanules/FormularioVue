// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uhusmtnvlgfnrhyksttj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodXNtdG52bGdmbnJoeWtzdHRqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODQ1MTYwMCwiZXhwIjoyMDI0MDI3NjAwfQ.jZs1QpQYVNLgUP2QbdTlEkNfoLeXBkx0ES-lnTG0-vw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
