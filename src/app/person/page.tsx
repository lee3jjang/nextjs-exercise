import { BASE_URL } from "../constants";

export default async function PersonPage() {
  const persons = await fetch(`${BASE_URL}/api/person`).then((res) =>
    res.json()
  );
  console.log(persons);
  return <section>Person</section>;
}
