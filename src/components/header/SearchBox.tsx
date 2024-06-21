import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

type Props = {
  useSearch: [boolean, Dispatch<SetStateAction<boolean>>];
};

const SearchBox = ({ useSearch }: Props) => {
  const [isSearch, setIsSearch] = useSearch;

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
                <div className="mr-3 ">
                  <Link
                    href={product.link}
                    className="relative w-[80px] h-[80px]"
                  >
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
  );
};

export default SearchBox;
