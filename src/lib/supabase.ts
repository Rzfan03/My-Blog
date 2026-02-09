import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Tambahkan log ini untuk debug
if (!supabaseUrl || !supabaseAnonKey) {
  console.log("❌ Supabase URL/Key is missing!");
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)