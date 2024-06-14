import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ViewedProducts = (props: Props) => {
  return (
    <section className="border border-solid border-themeLight rounded-md">
      <div className="pt-4 px-3 pb-1 mb-3">
        <p className="text-center m-0 text-xl font-bold uppercase text-[#333] my-4 leading-5">
          Sản Phẩm Đã Xem
        </p>
      </div>

      <div className="px-3 overflow-hidden p-3">
        {[
          {
            label: "Cacao kem trứng dừa nướng",
            image:
              "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
            link: "cacao-kem-trung-dua-nuong",
            description: "Cocoa Egg Cream & Toasted Coconut",
            price: 35000,
            priceOld: 54000,
          },
          {
            label: "Cacao kem trứng dừa nướng",
            image:
              "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
            link: "cacao-kem-trung-dua-nuong",
            description: "Cocoa Egg Cream & Toasted Coconut",
            price: 35000,
            priceOld: 54000,
          },
        ].map(
          (el, index) =>
            el && (
              <article key={index} className="mb-3 flex gap-2">
                <Link href={el.link}>
                  <Image
                    src={el.image}
                    alt={el.label}
                    title={el.label}
                    loading="lazy"
                    width={75}
                    height={75}
                  />
                </Link>

                <div className="m-0">
                  <h3 className="text-sm text-[#323c3f] leading-[1.4] tracking-[0.01em] mb-3">
                    <Link href={el.link} title={el.label}>
                      Ca cao kem trứng dừa nướng
                    </Link>
                  </h3>
                  <p className="text-xl font-bold text-red mb-8 leading-[25px] flex gap-2 items-end">
                    <span className="text-[#ff5c5f]">35,000đ</span>
                    <del className="text-xs text-[#d6d6d6]">54,000đ</del>
                  </p>
                </div>
              </article>
            )
        )}
      </div>
    </section>
  );
};

export default ViewedProducts;
