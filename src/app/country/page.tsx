// import { Tables } from "../../../supabase/database.types";
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

  // Invoke edge function
  // const { data } = await supabase.functions.invoke("hello-world", {
  //   body: { name: "Functions" },
  // });
  // console.log(data);

  // Query countries
  // const { data } = await supabase
  //   .from("countries")
  //   .select("*")
  //   .eq("continent", "Africa")
  //   .returns<Tables<"countries">[]>();
  // console.log(data);

  // Insert
  // const { error } = await supabase
  //   .from("person")
  //   .insert({ name: "sangjin", age: 36 });
  // console.log(error);

  // Delete
  // const { error } = await supabase.from("person").delete().eq("id", 5);
  // console.log(error);

  // Sign Up
  // const { data, error } = await supabase.auth.signUp({
  //   email: "lee3jjang@naver.com",
  //   password: "123123",
  // });
  // console.log("data", data);
  // console.log("error", error);

  // Sign In
  // const {
  //   data: { session },
  // } = await supabase.auth.signInWithPassword({
  //   email: "lee3jjang@naver.com",
  //   password: "123123",
  // });
  // console.log("session", session);

  // Download File
  // const { data, error } = await supabase.storage
  //   .from("photo")
  //   .download("YHS2091.jpg");
  // console.log(data);
  // console.log(error);

  // Copy File
  // const { data, error } = await supabase.storage
  //   .from("photo")
  //   .copy("YHS2091.jpg", "private/my.jpg");
  // console.log(data);
  // console.log(error);

  // Create Signed URL
  const { data, error } = await supabase.storage
    .from("photo")
    .createSignedUrl("YHS2091.jpg", 10);
  console.log(data);
  console.log(error);
}
