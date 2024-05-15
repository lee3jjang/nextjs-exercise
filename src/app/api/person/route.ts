import { supabase } from "@/app/lib/initSupabase";
import { Tables } from "../../../../supabase/database.types";

export const GET = async () => {
  const { data } = await supabase
    .from("person")
    .select()
    .returns<Tables<"person">[]>();

  return Response.json(data);
};
