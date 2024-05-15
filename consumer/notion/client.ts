import { Client } from "https://deno.land/x/notion_sdk/src/mod.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

export const notion = new Client({ auth: env["NOTION_KEY"] });
