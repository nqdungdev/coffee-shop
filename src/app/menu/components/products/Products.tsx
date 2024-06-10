import Pagination from "@/components/common/pagination/Pagination";
import ProductItem from "@/components/home/product/ProductItem";
import React from "react";
import { FaWindowClose } from "react-icons/fa";
import {
  FaArrowDownShortWide,
  FaArrowUpWideShort,
  FaEye,
  FaHotjar,
  FaMinus,
} from "react-icons/fa6";

type Props = {};

const Products = (props: Props) => {
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
    <section className="container mt-4">
      <div className="grid grid-cols-4 lg:gap-4">
        <div className="order-1 md:order-2 col-span-4 lg:col-span-3">
          <h1 className="text-[30px] mb-5 text-left text-black font-bold">
            Sản Phẩm
          </h1>

          <div className="mt-3 relative min-h-[200px]">
            <div className="relative overflow-hidden pb-4">
              <div className="flex text-right items-center gap-3 border-b border-solid border-[#f4f4f4]">
                <label>Sắp xếp theo</label>
                <div className="flex">
                  {[
                    "Mới nhất",
                    "Bán chạy",
                    "Nổi bật",
                    "Giá thấp",
                    "Giá cao",
                  ].map(
                    (el, index) =>
                      el && (
                        <div
                          key={index}
                          className="block py-3 px-4 border-b-[3px] border-solid border-transparent mx-3 -my-[1px] leading-[1.5] text-[#212529] text-center align-middle cursor-pointer text-base transition-all duration-150 hover:text-theme hover:border-theme"
                        >
                          {el}
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>

            <div className="mx-auto grid grid-cols-2 gap-4">
              {products.map(
                (product, index) =>
                  products && (
                    <article
                      key={index}
                      className="col-span-2 md:col-span-1 px-3"
                    >
                      <ProductItem product={product} />
                    </article>
                  )
              )}
            </div>

            <Pagination totalPage={3} />
          </div>
        </div>

        <div className="order-2 md:order-1 col-span-4 lg:col-span-1">
          <div className="bg-[eff8f3] p-5 flex flex-col bg-[#eff8f3] fixed top-0 left-0 z-50 w-[300px] h-screen md:relative md:w-full md:h-max">
            <div className="flex justify-between items-center border-b border-solid border-[#ddd] pb-5 md:hidden">
              <h3 className="pl-3 font-bold text-black uppercase">BỘ LỌC</h3>
              <div className="cursor-pointer text-lg">
                <FaWindowClose />
              </div>
            </div>
            <button className="p-3 text-center text-black border border-solid border-black w-full mt-3 bg-white">
              Tìm kiếm
            </button>

            <div className="mt-4 order-1">
              <div className="p-0">
                <span className="m-0 font-bold py-4 leading-5 text-black mb-5 capitalize text-lg tracking-[.3px] flex justify-between items-center cursor-pointer border-b border-solid border-[#e7e7e7]">
                  Danh mục thực đơn <FaMinus />
                </span>
              </div>
              <div className="p-0 max-h-[1000px]">
                <ul className="p-0 max-h-[285px] overflow-y-auto flex gap-1 flex-col mb-1">
                  <li className="w-full">
                    <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                      <input type="checkbox" />
                      Ăn vặt
                    </label>
                  </li>
                  <li className="w-full">
                    <label className="py-1 px-3 relative flex items-center justify-between text-[#334862] text-xs leading-[17px] cursor-pointer font-bold">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        Đồ uống <span>(21)</span>
                      </div>
                      <FaMinus />
                    </label>
                    <ul className="pl-5">
                      {[
                        { label: "Coffee", count: "9" },
                        { label: "Trà sữa", count: "4" },
                        ,
                        { label: "Sữa chua", count: "2" },
                        ,
                        { label: "Trà trái cây", count: "6" },
                        ,
                      ].map(
                        (el, index) =>
                          el && (
                            <li key={index} className="w-full">
                              <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                                <input type="checkbox" />
                                {el.label} <span>({el.count})</span>
                              </label>
                            </li>
                          )
                      )}
                    </ul>
                  </li>
                  <li className="w-full">
                    <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                      <input type="checkbox" />
                      Đồ ăn
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[eff8f3] p-5 flex flex-col bg-[#eff8f3] fixed top-0 left-0 z-50 w-[300px] h-screen md:relative md:w-full md:h-max">
            <div className="flex justify-between items-center border-b border-solid border-[#ddd] pb-5 md:hidden">
              <h3 className="pl-3 font-bold text-black uppercase">SẮP XẾP</h3>
              <div className="cursor-pointer text-lg">
                <FaWindowClose />
              </div>
            </div>

            <div className="mt-4 order-1">
              <div className="p-0">
                <span className="m-0 font-bold py-4 leading-5 text-black mb-5 capitalize text-lg tracking-[.3px] flex justify-between items-center cursor-pointer border-b border-solid border-[#e7e7e7]">
                  Sắp xếp theo <FaMinus />
                </span>
              </div>
              <div className="p-0 max-h-[1000px]">
                <ul className="p-0 max-h-[285px] overflow-y-auto flex gap-1 flex-col mb-1">
                  {[
                    { label: "Mới nhất", icon: <FaEye /> },
                    { label: "Bán chạy", icon: <FaHotjar /> },
                    ,
                    {
                      label: "Giá cao đến thấp",
                      icon: <FaArrowUpWideShort />,
                    },
                    {
                      label: "Giá thấp đến cao",
                      icon: <FaArrowDownShortWide />,
                    },
                  ].map(
                    (el, index) =>
                      el && (
                        <li key={index} className="w-full">
                          <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                            <input type="radio" />
                            {el.icon}
                            <span>{el.label}</span>
                          </label>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
