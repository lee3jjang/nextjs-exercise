import { supabase } from "../lib/initSupabase";

export default async function Page() {
  return (
    <div className="flex justify-center items-center bg-gray-200 h-[100vh]">
      <form action={testSupabase}>
        <button
          className="p-4 bg-yellow-200 border-2 border-black rounded-full hover:bg-green-300"
          type="submit"
        >
          SUPABASE TEST
        </button>
      </form>
    </div>
  );
}

async function testSupabase() {
  "use server";

  const { data } = await supabase.functions.invoke("hello-world", {
    body: { name: "Functions" },
  });

  console.log(data);
}
