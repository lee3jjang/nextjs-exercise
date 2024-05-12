import { NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) => {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const resposne = await fetch(url).then((res) => res.json());

  return Response.json(resposne);
};
