import ProductItem from "@/components/home/product/ProductItem";
import React from "react";

type Props = {};

const RelatedProducts = (props: Props) => {
  const products = [
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: 35000,
      priceOld: 54000,
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: 35000,
      priceOld: 54000,
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: 54000,
      priceOld: 54000,
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: 54000,
      priceOld: 54000,
    },
  ];
  return (
    <section className="p-3 mb-3">
      <h3 className="text-[25px] leading-[30px] my-5 text-[#000] font-bold uppercase">
        Sản Phẩm Liên Quan
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {products.map(
          (product, index) =>
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
