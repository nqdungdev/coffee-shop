import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  try {
    const response = await axios.get(`https://diatycafe.vercel.app/api/menu`);

    const shuffle = response.data.data.sort(() => Math.random() - 0.5);

    const result = shuffle.filter((el: any, index: number) => index < 4 && el);

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
