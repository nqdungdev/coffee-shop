"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaTimes, FaTrashAlt } from "react-icons/fa";
import { FaBasketShopping, FaMinus, FaPlus } from "react-icons/fa6";
import Button from "../common/button/Button";

type Props = {};

const Header = (props: Props) => {
  const [active, setActive] = useState<number>(0);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isPay, setIsPay] = useState<boolean>(false);
  const products = [
    {
      label: "Cacao kem trứng dừa nướng",
      image: "/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png",
      link: "cacao-kem-trung-dua-nuong",
      description: "Cocoa Egg Cream & Toasted Coconut",
      price: "54,000đ",
    },
  ];
  return (
    <header
      id="header"
      className="hidden lg:block z-50 absolute top-0 left-0 w-full"
    >
      <div className="p-3 bg-transparent h-[100px]">
        <div className="container h-full">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-5 text-left px-3">
              <div className="mt-3 flex gap-2">
                {[
                  {
                    label: "Facebook",
                    image: "/uploads/source/icon/group-1.png",
                    link: "#",
                  },
                  {
                    label: "Twitter",
                    image: "/uploads/source/icon/twitter-1.png",
                    link: "#",
                  },
                  {
                    label: "Youtube",
                    image: "/uploads/source/icon/youtube-1.png",
                    link: "#",
                  },
                  {
                    label: "Instagram",
                    image: "/uploads/source/icon/instagram-1.png",
                    link: "#",
                  },
                  {
                    label: "Pinterest",
                    image: "/uploads/source/icon/google-plus-1.png",
                    link: "#",
                  },
                ].map((el, index) => (
                  <Link key={index} href={el.link}>
                    <Image
                      src={el.image}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      width={32}
                      height={32}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-2 text-center logo px-3 relative">
              <Link href="/" title="Coffee">
                <Image
                  src="/uploads/source/logo/logo.png"
                  alt="Coffee"
                  title="Coffee"
                  loading="lazy"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>

            <div className="col-span-5 text-left flex justify-end gap-4 px-3">
              {[
                {
                  title: "Hệ thống",
                  content: "Cửa hàng",
                  icon: "/uploads/source/icon/icon-store.png",
                  link: "store",
                },
                {
                  title: "Hotline hỗ trợ",
                  content: "0123 456 789",
                  icon: "/uploads/source/icon/support.svg",
                  link: "tel:0123 456 789",
                },
              ].map(
                (el, index) =>
                  el && (
                    <div key={index} className="flex items-center gap-1">
                      <Image
                        src={el.icon}
                        alt={el.title}
                        title={el.title}
                        loading="lazy"
                        width={32}
                        height={32}
                      />
                      <div>
                        <p className="text-theme mb-1 text-base leading-4">
                          {el.title}
                        </p>
                        <h3 className="text-xl leading-5">
                          <Link
                            className="text-headerItem text-xl font-bold"
                            href={el.link}
                          >
                            {el.content}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="container flex justify-between items-center">
        <ul className="flex">
          {[
            { label: "Trang chủ", link: "" },
            { label: "Cà phê", link: "coffee" },
            { label: "Thực đơn", link: "menu" },
            { label: "Về chúng tôi", link: "about-us" },
            { label: "Liên hệ", link: "contact" },
          ].map(
            (el, index) =>
              el && (
                <li
                  key={index}
                  className="group"
                  onClick={() => setActive(index)}
                >
                  <Link
                    target="_self"
                    className={`relative text-navTxt p-5 text-base font-bold inline-block uppercase  
                  ${
                    active === index
                      ? "after:opacity-100 after:left-0 text-navTxtHover"
                      : "after:opacity-0 after:left-1"
                  } after:absolute after:top-1/2 after:w-3 after:h-3 after:bg-theme after:rounded-full after:-translate-y-1/2 after:transition-all after:duration-300 group-hover:after:opacity-100 group-hover:after:left-0 group-hover:text-navTxtHover
                    group-hover:after:transition-all group-hover:after:duration-300`}
                    href={el.link}
                  >
                    <span>{el.label}</span>
                  </Link>
                </li>
              )
          )}
        </ul>

        <div className="flex items-center gap-5">
          <button
            className="text-white w-8 h-8 p-2 bg-theme rounded-full flex justify-center items-center relative"
            onClick={() => setIsSearch(true)}
          >
            <FaSearch />
          </button>
          <button
            className="text-white w-8 h-8 p-2 bg-theme rounded-full flex justify-center items-center relative"
            onClick={() => setIsPay(true)}
          >
            <FaBasketShopping />
            <span className="absolute -top-1 right-1 text-white bg-headerItem text-xs leading-4 px-1 py-0 rounded-full">
              0
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`h-screen w-[400px] top-0 fixed z-50 overflow-y-auto text-center text-white bg-white transition-all duration-500 ${
          isSearch ? "right-0" : "-right-full"
        }`}
      >
        <form
          method="get"
          className="mb-8 px-4 py-5 bg-theme overflow-hidden flex"
          action="search"
        >
          <div
            role="search"
            className="w-[calc(100%_-_80px)] relative h-10 bg-white"
          >
            <input
              className="bg-transparent w-full text-black text-base p-3 outline-none h-10"
              type="text"
              name="keyword"
              autoComplete="off"
              placeholder="Tìm kiếm..."
            />
          </div>
          <button
            className="w-10 h-10 bg-black border-white border border-l-0 text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
            type="submit"
          >
            <FaSearch />
          </button>
          <button
            className="w-10 h-10 bg-black border-white border border-l-0 text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
            type="button"
            onClick={() => setIsSearch(false)}
          >
            <FaTimes />
          </button>
        </form>

        <div className="my-0 mx-[5%]">
          {products.map(
            (product, index) =>
              product && (
                <div key={index} className="mb-3 overflow-hidden flex">
                  <div className="mr-3 relative w-[80px] h-[80px]">
                    <Link href={product.link}>
                      <Image
                        src={product.image}
                        alt={product.label}
                        title={product.label}
                        loading="lazy"
                        layout="fill"
                        objectFit="contain"
                      />
                    </Link>
                  </div>
                  <div className="text-sm text-black leading-[1.4] tracking-widest mt-0 text-left">
                    <h3 className="mb-3">
                      <Link href={product.link} title={product.label}>
                        {product.label}
                      </Link>
                    </h3>
                    <p className="text-[#ff5c5f] leading-6">47,000đ</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div
        className={`h-screen w-[400px] top-0 fixed z-50 overflow-y-auto text-center text-white bg-white transition-all duration-500 ${
          isPay ? "right-0" : "-right-full"
        }`}
      >
        <div className="mb-8 px-4 py-5 bg-theme overflow-hidden flex items-center">
          <h3 className="w-[calc(100%_-_40px)] relative bg-transparent">
            GIỎ HÀNG
          </h3>

          <button
            className="w-10 h-10 bg-black border-white border text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
            type="button"
            onClick={() => setIsPay(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="my-0 mx-[5%]">
          {products.map(
            (product, index) =>
              product && (
                <div key={index}>
                  <div className="mb-8 flex p-0 relative">
                    <div className="relative w-[126px] h-[126px]">
                      <Image
                        src={product.image}
                        alt={product.label}
                        title={product.label}
                        loading="lazy"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="ml-6 w-[calc(100%_-_126px)]">
                      <div className="flex h-full flex-col">
                        <h3 className="font-bold text-sm leading-4 w-max-[85%] block m-0 text-black text-left">
                          {product.label}
                        </h3>

                        <div className="w-full mt-auto">
                          <div className="flex items-center justify-between text-right">
                            <div className="bg-white border border-solid border-black rounded-[8px] inline-flex items-center h-8 w-[77px] justify-between p-1">
                              <div className="flex cursor-pointer text-base leading-5 transition-all duration-300 p-0 border-0 bg-white">
                                <FaMinus className="text-black" />
                              </div>
                              <div className="border-0 m-0 h-full w-8 text-center font-sm text-black">
                                1
                              </div>
                              <div className="flex cursor-pointer text-base leading-5 transition-all duration-300 p-0 border-0 bg-white">
                                <FaPlus className="text-black" />
                              </div>
                            </div>
                            <div className="pt-1">
                              <span className="leading-8 text-black">
                                45,000
                              </span>
                              đ
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-10 h-10 absolute cursor-pointer top-0 right-0 transition-all duration-300 flex justify-end items-top">
                      <FaTrashAlt className="text-black" />
                    </div>
                  </div>
                  <div className="cart-item-skeleton-loading">
                    <div className="cart-item-skeleton">
                      <div className="grid__column skeleton-img">
                        <div className="skeleton__thumbnail-block">
                          <div className="skeleton__thumbnail" />
                        </div>
                      </div>
                      <div className="grid__column skeleton-info">
                        <div className="skeleton-info__block">
                          <div className="skeleton-info__title" />
                          <div className="skeleton-info__variant" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        <div className="mt-16 w-full">
          <div className="pb-4 flex gap-1 justify-center w-full">
            <Button>Thanh toán</Button>
            <Button className="border-red bg-red text-white before:bg-white hover:text-red">
              Mua thêm
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
