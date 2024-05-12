import { BASE_URL } from "@/app/constants";
import { TUser } from "@/app/types";

export default async function User({
  params: { id },
  searchParams: {},
}: {
  params: { id: string };
  searchParams: Record<string, never>;
}) {
  const user: TUser = await fetch(`${BASE_URL}/api/user/${id}`).then((res) =>
    res.json()
  );
  return <main>{user.username}</main>;
}
