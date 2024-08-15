import productApiRequest from "@/utils/requests/product.request";

export async function GET(req: Request) {
  const { searchParams } = new URL(req?.url || "");
  const search = req.url ? searchParams.get("search") : "";
  const page = (req.url && searchParams.get("page")) || 1;
  try {
    const { payload } = await productApiRequest.getProductList();

    const filtered = (payload as any).data.filter((item: any) =>
      item.name.toLowerCase().includes(search ? search.toLowerCase() : "")
    );

    const result = filtered.map(
      (el: any, index: number) =>
        index < +page * 10 && index >= (+page - 1) * 10 && el
    );

    return new Response(
      JSON.stringify({
        data: result,
        totalPage: Math.ceil(filtered.length / 10),
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}
