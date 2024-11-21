import { createClient } from "@supabase/supabase-js"
export const supabaseUrl = "https://vzquhsydulrgwhznihhh.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cXVoc3lkdWxyZ3doem5paGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NDQ4MTcsImV4cCI6MjAzNjAyMDgxN30.yQn0FlcEKmhI6HWNDgiDCJX866jWUbwxZox-4itwq8s"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
