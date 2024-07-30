import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req?.url || "");
  const search = req.url ? searchParams.get("search") : "";
  try {
    const response = await axios.get(`https://diatycafe.vercel.app/api/menu`);

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
