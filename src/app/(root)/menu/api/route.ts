import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req?.url || "");
  const search = req.url ? searchParams.get("search") : "";
  try {
    const response = await axios.get(`https://diatycafe.vercel.app/api/menu`);

    const result = response.data.data.filter((item: any) =>
      item.name.toLowerCase().includes(search ? search.toLowerCase() : "")
    );

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}
