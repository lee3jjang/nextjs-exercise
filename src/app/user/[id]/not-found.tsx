import Link from "next/link";

export default function UserNotFound() {
  return (
    <div>
      <h1>UserNotFound</h1>
      <p>Could not find required resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
