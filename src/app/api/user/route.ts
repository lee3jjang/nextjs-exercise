export const GET = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const resposne = await fetch(url).then((res) => res.json());

  return Response.json(resposne);
};
