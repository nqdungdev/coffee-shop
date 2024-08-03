import React from "react";
import RelatedProducts from "@/components/productDetail/relatedProducts/RelatedProducts";
import RatingStar from "@/components/productDetail/ratingStar/RatingStar";
import Comments from "@/components/productDetail/comments/Comments";
import ViewedProducts from "@/components/productDetail/viewedProducts/ViewedProducts";
import PolicyIntuitive from "@/components/productDetail/policyIntuitive/PolicyIntuitive";
import Information from "@/components/productDetail/information/Information";

type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 min-h-[420px]">
        <div className="col-span-12 md:col-span-9 grid grid-cols-9 gap-5">
          <Information />
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
};

export default ProductDetails;
