import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"

const { SUPABASE_URL, SUPABASE_ANON_KEY } = require("../../../config/env")
import { SUPABASE_URL as S2, SUPABASE_ANON_KEY as S3 } from "../../../config/env"

const supabaseUrl = SUPABASE_URL
const supabaseAnonKey = SUPABASE_ANON_KEY
console.log("supabaseUrl", supabaseUrl)
console.log("supabaseAnonKey", supabaseAnonKey)
console.log("S2", S2)
console.log("S3", S3)

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage as any,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
})
