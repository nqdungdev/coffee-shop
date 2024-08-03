"use client";
import React, { Children, ReactNode, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

type Props = { title: string; children: ReactNode };

const MenuCollapse = ({ title, children }: Props) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [rotated, setRotated] = useState(false);
  return (
    <>
      <div className="p-0">
        <span className="m-0 font-bold py-3 leading-5 text-black my-2 capitalize text-lg tracking-[.3px] flex justify-between items-center cursor-pointer border-b border-solid border-[#e7e7e7]">
          {title}
          <button
            onClick={() => {
              setIsShowMenu((prev) => (prev = !prev));
              setRotated(!rotated);
            }}
            className={`${
              rotated ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          >
            {isShowMenu ? <FaPlus /> : <FaMinus />}
          </button>
        </span>
      </div>
      <div className="overflow-hidden">
        <div
          className={`${
            rotated ? "h-0" : "h-[320px]"
          } transition-all duration-300 p-0 max-h-[1000px]`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default MenuCollapse;
