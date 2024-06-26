import { connect } from "https://deno.land/x/amqp@v0.24.0/mod.ts";

Deno.serve({ port: 3000 }, async (_request: Request) => {
  const connection = await connect();
  const channel = await connection.openChannel();

  const queue = "test.queue";
  await channel.declareQueue({ queue });
  await channel.publish(
    { routingKey: queue },
    { contentType: "application/json" },
    new TextEncoder().encode(JSON.stringify({ foo: "bar" }))
  );

  await connection.close();

  return new Response("Hello, world!");
});
