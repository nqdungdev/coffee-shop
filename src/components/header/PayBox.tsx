import React, { Dispatch, SetStateAction } from "react";
import Button from "../common/button/Button";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Image from "next/image";

type Props = {
  usePay: [boolean, Dispatch<SetStateAction<boolean>>];
};

const PayBox = ({ usePay }: Props) => {
  const [isPay, setIsPay] = usePay;
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
                            <span className="leading-8 text-black">45,000</span>
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
  );
};

export default PayBox;
