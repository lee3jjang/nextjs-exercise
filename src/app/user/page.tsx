import { TUser } from "../types";
import { BASE_URL } from "../constants";
import Link from "next/link";

export default async function UserList() {
  const users: TUser[] = await fetch(`${BASE_URL}/api/user`).then((res) =>
    res.json()
  );
  return (
    <main>
      <ul>
        {users.map((user) => (
          <li>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
