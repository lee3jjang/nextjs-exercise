import Link from "next/link";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>UserLayout</h2>
      <div>{children}</div>
    </div>
  );
}
