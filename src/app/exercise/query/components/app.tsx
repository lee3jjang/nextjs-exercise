import { supabase } from "@/app/lib/initSupabase";
import { useQuery } from "@tanstack/react-query";
import { Tables } from "../../../../../supabase/database.types";

export default function App() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["person"],
    queryFn: getPerson,
    refetchInterval: 1000,
    select: (data) => {
      return data;
    },
  });

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <ul>
            {data!.map((person, index) => (
              <li key={person.id}>
                <p>
                  <a href={`/person/${person.id}`}>
                    {index}, <strong>{person.name}</strong>,{" "}
                    <em>{person.age}</em>
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              refetch();
            }}
          >
            재호출
          </button>
        </>
      )}
    </div>
  );

  async function getPerson() {
    const { data } = await supabase
      .from("person")
      .select()
      .returns<Tables<"person">[]>();
    return data;
  }
}
