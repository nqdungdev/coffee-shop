import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye, FaStar, FaStarHalf } from "react-icons/fa6";
import ProductItem from "./ProductItem";

type Props = {};

const Product = (props: Props) => {
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
      price: 35000,
      priceOld: 54000,
    },
  ];
  return (
    <section className="bg-[url('/uploads/source/background/bo-cong-anh-1.png')] bg-cover bg-no-repeat bg-center bg-fixed bg-blend-color-burn py-8">
      <div className="container">
        <div className="relative">
          <div className="text-center mt-4 mb-8">
            <p className="mb-4 text-green text-base leading-8">Menu Đặc biệt</p>
            <p className="text-center relative block text-theme text-[30px] leading-[30px] font-bold">
              MENU HALSEY COFFEE
            </p>
          </div>

          <div className="text-center">
            <ul className="mb-5 pb-5 inline-flex overflow-auto justify-start">
              {["Coffee", "Trà sữa", "Nước ép", "Sữa chua", "Trà trái cây"].map(
                (el, index) =>
                  el && (
                    <li
                      key={index}
                      className="p-0 mr-3 h-10 inline-block relative w-max group"
                    >
                      <Link
                        href="menu"
                        className="text-theme bg-white py-1 px-6 block rounded-[15px] border border-solid border-[#ddd] transition-all duration-500 uppercase font-bold group-hover:text-white group-hover:bg-theme"
                      >
                        {el}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-2 gap-4">
          {products.map(
            (product, index) =>
              products && (
                <article key={index} className="col-span-2 md:col-span-1 px-3">
                  <ProductItem product={product} />
                </article>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
