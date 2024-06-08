import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye, FaStar, FaStarHalf } from "react-icons/fa6";

type Props = {
  product: {
    label: string;
    image: string;
    link: string;
    description: string;
    price: number;
    priceOld: number;
  };
};

const ProductItem = ({ product }: Props) => {
  return (
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

          {product.price !== product.priceOld && (
            <div className="text-white bg-green border border-solid border-green rounded-[100px] -top-4 right-3 absolute text-xs leading-4 py-1 px-3 font-bold">
              <span
                title={`-${Math.ceil(
                  ((product.priceOld - product.price) / product.priceOld) * 100
                )}%`}
              >
                -
                {Math.ceil(
                  ((product.priceOld - product.price) / product.priceOld) * 100
                )}
                %
              </span>
            </div>
          )}
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
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end">
          <span className="text-black text-xl font-bold">
            {(product.price / 1000).toFixed(3)}đ
          </span>
          {product.price !== product.priceOld && (
            <del className="text-[#5b5b5b]">
              {(product.priceOld / 1000).toFixed(3)}đ
            </del>
          )}
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
  );
};

export default ProductItem;
