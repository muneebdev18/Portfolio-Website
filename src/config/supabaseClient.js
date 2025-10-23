import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oktkunhznarqdwjjscqn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rdGt1bmh6bmFycWR3ampzY3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNDA2ODgsImV4cCI6MjA3NjgxNjY4OH0._nJShalpiDzwTDWmVaD9iLK2UF3wcNoESVYsRoxjFV4" // ye tumhe project settings me milega

export const supabase = createClient(supabaseUrl, supabaseKey)