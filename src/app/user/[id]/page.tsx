import { BASE_URL } from "@/app/constants";
import { TUser } from "@/app/types";
import { notFound } from "next/navigation";

export default async function User({
  params: { id },
  searchParams: {},
}: {
  params: { id: string };
  searchParams: Record<string, never>;
}) {
  const userOrEmpty: TUser = await fetch(`${BASE_URL}/api/user/${id}`, {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  if (isEmptyObject(userOrEmpty)) {
    notFound();
  }

  return <div>{userOrEmpty?.username}</div>;
}

function isEmptyObject(obj: Object) {
  return obj.constructor === Object && Object.keys(obj).length === 0;
}
