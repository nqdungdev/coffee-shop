"use client";

import ProductItem from "@/components/home/products/ProductItem";
import { useAppSelector } from "@/lib/hooks";

type Props = {};

const ProductList = (props: Props) => {
  const { filteredProducts } = useAppSelector((state) => state.productsReducer);

  return (
    <>
      {filteredProducts &&
        filteredProducts?.map(
          (product: any, index: number) =>
            filteredProducts && (
              <article key={index} className="col-span-2 md:col-span-1 px-3">
                <ProductItem product={product} />
              </article>
            )
        )}
    </>
  );
};

export default ProductList;
