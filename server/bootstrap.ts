import { connect } from "https://deno.land/x/amqp@v0.24.0/mod.ts";

async function consume() {
  const connection = await connect("amqp://guest:guest@localhost:5672");
  const channel = await connection.openChannel();
  const queue = "test.queue";
  await channel.consume(
    { queue },
    async (args, _props, data) => {
      console.log(new TextDecoder().decode(data));
      await channel.ack({ deliveryTag: args.deliveryTag });
    },
  );
}

export async function bootstrap() {
  await consume();
}
