import RelatedProducts from "@/app/(root)/menu/[id]/_components/relatedProducts/RelatedProducts";
import RatingStar from "@/app/(root)/menu/[id]/_components/ratingStar/RatingStar";
import Comments from "@/app/(root)/menu/[id]/_components/comments/Comments";
import ViewedProducts from "@/app/(root)/menu/[id]/_components/viewedProducts/ViewedProducts";
import PolicyIntuitive from "@/app/(root)/menu/[id]/_components/policyIntuitive/PolicyIntuitive";
import Information from "@/app/(root)/menu/[id]/_components/information/Information";
import { Metadata, ResolvingMetadata } from "next";
import envConfig from "@/configs/envConfig";
import productApiRequest from "@/utils/requests/product.request";
import { cache } from "react";

const getProductDetail = cache(productApiRequest.getProductDetail);

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { payload } = await getProductDetail(params.id);
  const product = payload.data;
  const url = envConfig.NEXT_PUBLIC_API_ENDPOINT + "/menu/" + product._id;
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url,
      images: [
        {
          url: product.image,
        },
      ],
      locale: "en_US",
      type: "website",
      siteName: "Gờ coffee",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProductDetail({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  let product;
  try {
    const { payload } = await getProductDetail(params.id);
    product = payload.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
  }
  if (!product) {
    return <p>Product not found or failed to load.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-2 min-h-[420px]">
        <div className="col-span-12 md:col-span-9 grid grid-cols-9 gap-5">
          <Information product={product} />
        </div>

        <div className="col-span-12 md:col-span-3">
          <PolicyIntuitive />
        </div>
      </div>

      <section className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-9">
          <RelatedProducts />

          <RatingStar />

          <Comments />
        </div>

        <div className="col-span-12 md:col-span-3">
          <ViewedProducts />
        </div>
      </section>
    </>
  );
}
