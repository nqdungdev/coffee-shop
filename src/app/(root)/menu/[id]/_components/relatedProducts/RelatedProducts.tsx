"use client";

import ProductItem from "@/components/common/productItem/ProductItem";
import productApiRequest from "@/utils/requests/product.request";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const RelatedProducts = (props: Props) => {
  const [products, setProducts] = useState<any>();
  const flagRef = useRef<boolean>(true);
  useEffect(() => {
    flagRef.current &&
      productApiRequest
        .getProductListRelated()
        .then((res) => setProducts(res.payload));

    return () => {
      flagRef.current = false;
    };
  }, []);

  return (
    <section className="p-3 mb-3">
      <h3 className="text-[25px] leading-[30px] my-5 text-[#000] font-bold uppercase">
        Sản Phẩm Liên Quan
      </h3>

      <div className="grid grid-cols-2 gap-2">
        {products?.map(
          (product: any, index: number) =>
            products && (
              <article key={index} className="col-span-2 md:col-span-1 px-3">
                <ProductItem product={product} />
              </article>
            )
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
