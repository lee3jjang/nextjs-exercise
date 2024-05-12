import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../supabase/database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// const { data } = supabase.auth.onAuthStateChange((event, session) => {
// console.log(event, session);
// if (event === 'SIGNED_IN') {
//     console.log(session)
// }
// });

// data.subscription.unsubscribe()
