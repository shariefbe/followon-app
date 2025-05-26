import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wqizwtczapaxapkfcgjz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaXp3dGN6YXBheGFwa2ZjZ2p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjE3NDAsImV4cCI6MjA2MzgzNzc0MH0.7v-0rv2chRBDvfOdcweU0UHFuGpSd50RD2L0kxk4_eg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
