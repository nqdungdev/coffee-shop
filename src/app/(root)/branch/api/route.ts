import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest) {
  try {
    const response = await axios.get(`https://diatycafe.vercel.app/api/branch`);

    return new Response(JSON.stringify(response.data.data), {
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
