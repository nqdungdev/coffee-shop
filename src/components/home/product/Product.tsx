import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye, FaStar, FaStarHalf } from "react-icons/fa6";

type Props = {};

const Product = (props: Props) => {
  const products = [
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
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
                <div key={index} className="col-span-2 md:col-span-1 px-3">
                  <div className="flex items-center overflow-visible ml-12 py-5 pr-5 pl-12 border border-solid border-[#ddd] rounded-[15px] relative transition-all duration-500 group after:absolute after:top-0 after:left-0 after:w-0 after:bottom-0 hover:after:w-full hover:after:bg-themeLight after:transition-all after:duration-500 after:rounded-[15px]">
                    <div className="w-[100px] h-[100px] p-3 rounded-full bg-white absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_5px_20px_0_rgb(23,44,82,0.1)]">
                      <Link href={product.link}>
                        <div className="overflow-hidden w-full h-full relative transition-all duration-500 group-hover:scale-150">
                          <Image
                            src={product.image}
                            alt={product.label}
                            title={product.label}
                            loading="lazy"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </Link>

                      <div className="absolute text-center z-20 opacity-0 top-[15px] right-[35px] transition-all duration-500 text-sm group-hover:opacity-100 group-hover:right-[15px]">
                        <Link
                          href={product.link}
                          className="bg-theme text-white block w-10 h-10 flex items-center justify-center rounded-full mb-1 transition-all duration-500"
                        >
                          <FaEye />
                        </Link>
                        <Link
                          href={product.link}
                          className="bg-theme text-white block w-10 h-10 flex items-center justify-center text-center rounded-full mb-1 transition-all duration-500"
                        >
                          <FaShoppingCart />
                        </Link>
                      </div>
                    </div>

                    <div className="w-full relative z-10 pr-[20%] p-1">
                      <p className="py-[0.7%] block text-[17px] text-theme text-ellipsis line-clamp-1 font-semibold uppercase">
                        <Link href={product.link} title={product.label}>
                          {product.label}
                        </Link>
                      </p>
                      <p>{product.description}</p>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <span className="text-black text-xl font-bold">
                          {product.price}
                        </span>
                      </div>
                      <div className="relative block">
                        <div className="inline-block flex">
                          <FaStar className="text-yellow" />
                          <FaStar className="text-yellow" />
                          <FaStar className="text-yellow" />
                          <FaStar className="text-yellow" />
                          <FaStarHalf className="text-yellow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
