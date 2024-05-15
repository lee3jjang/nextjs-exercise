import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

export const supabase = createClient(
  env["PUBLIC_SUPABASE_URL"],
  env["PUBLIC_SUPABASE_ANON_KEY"]
);
