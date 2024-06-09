import Link from "next/link";
import React from "react";

type Props = {
  children: string;
  link?: string;
  className?: string;
};

const Button = ({ children, link = "", className }: Props) => {
  return (
    <Link
      href={link}
      className={`relative inline-block overflow-hidden font-bold leading-[30px] cursor-pointer py-1 px-7 text-white border border-solid border-black rounded-[5px] bg-black uppercase font-xs flex justify-center items-center w-max tracking-[1px] transition-all duration-300 
              before:transition-all before:duration-300 before:absolute before:-left-full before:top-0 before:bottom-0 before:w-full before:bg-white hover:text-black hover:before:left-0 ${
                className && className
              }`}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default Button;
