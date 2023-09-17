import { client } from "@/app/lib/sanity";
import { NextApiResponse } from "next";

async function getData() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function handler(res: NextApiResponse) {
  const data = await getData();
  res.json(data);
}
