"use client";
import Pagination from "@/components/common/pagination/Pagination";
import ProductItem from "@/components/common/productItem/ProductItem";
import { setProducts } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Product } from "@/schema/product.schema";
import productApiRequest from "@/utils/requests/product.request";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {};

const ProductList = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const dispatch = useAppDispatch();
  const { filteredProducts } = useAppSelector((state) => state.productsReducer);
  useEffect(() => {
    productApiRequest
      .getProductListFiltered(
        search ? `?search=${search}&page=${page || 1}` : `?page=${page || 1}`
      )
      .then((res) => dispatch(setProducts((res.payload as any).data)));

    return () => {};
  }, [dispatch, page, search]);

  return (
    <>
      <div className="mx-auto grid grid-cols-2 gap-4">
        {filteredProducts &&
          filteredProducts?.map(
            (product: Product, index: number) =>
              filteredProducts && (
                <article key={index} className="col-span-2 md:col-span-1 px-3">
                  <ProductItem product={product} />
                </article>
              )
          )}
      </div>
      {filteredProducts && (
        <Pagination totalPage={Math.ceil(filteredProducts.length / 10)} />
      )}
    </>
  );
};

export default ProductList;
