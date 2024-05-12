import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookieStore = cookies();

  return (
    <>
      {cookieStore.getAll().map((cookie, index) => (
        <div key={index}>
          <p>Name: {cookie.name}</p>
          <p>Value: {cookie.value}</p>
        </div>
      ))}
      <form action={addCookie}>
        <input name="item" type="text" placeholder="add cookie" />
        <button>Add</button>
      </form>
    </>
  );
}

async function addCookie(formData: FormData) {
  "use server";
  const key = "item";
  const value = String(formData.get(key) ?? "");
  const cookieStore = cookies();
  cookieStore.set(key, value);
  redirect("/");
}
