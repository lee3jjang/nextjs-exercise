import { supabase } from "../lib/initSupabase";

export default async function Page() {
  const { data } = await supabase.from("countries").select("*");
  console.log(data);

  return <div>page</div>;
}
