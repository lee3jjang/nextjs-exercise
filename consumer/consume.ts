import _ from "lodash";
import { connect } from "https://deno.land/x/amqp@v0.24.0/mod.ts";
import { supabase } from "./supabase/client.ts";
import { notion } from "./notion/client.ts";

// async function runSupabase() {
//   const { data } = await supabase.from("person").select();
//   console.log(data);
// }

async function runNotion() {
  try {
    // const data = await notion.users.list();

    const result = await notion.databases
      .query({
        database_id: "f674c507470143d49088b3d9b4fd020c",
      })
      .then(({ results }) => results);
    const data = result.map((value) => {
      const baseDate = value.properties["할 일"].title[0].plain_text;
      const todos: string[] = [
        "스킨 로션 바르기",
        "과자 안 먹기",
        "양파즙 먹기",
        "점심 샐러드 먹기",
        "스쿼트 100개 하기",
      ];
      return _.chain(todos)
        .map((todo) => ({
          [todo]: value.properties[todo].checkbox,
        }))
        .concat({ 기준일자: baseDate })
        .value();
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function consume() {
  const connection = await connect("amqp://guest:guest@localhost:5672");
  const channel = await connection.openChannel();
  const queue = "test.queue";

  // supabase
  // await runSupabase();

  // notion
  // await runNotion();

  await channel.consume({ queue }, async (args, _props, data) => {
    console.log(new TextDecoder().decode(data));
    await channel.ack({ deliveryTag: args.deliveryTag });
  });
}
