import { supabase } from "../lib/initSupabase";

export default async function Page() {
  // const { data } = await supabase.from("countries").select("*");
  // console.log(data);

  const { data } = await supabase.functions.invoke("hello-world", {
    body: { name: "Functions" },
  });
  console.log(data);

  return <div>page</div>;
}
