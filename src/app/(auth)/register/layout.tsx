import ButtonAnchor from "@/components/common/button/ButtonAnchor";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Đăng ký",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1 relative bg-transparent h-screen flex justify-center items-center animate-translateR order-2">
        <div className="relative flex flex-col animate-translateR">
          <div className="relative z-10">
            <h1 className="relative text-[25px] leading-[30px] mb-3 mt-0 text-[#222] font-bold uppercase">
              Đăng ký!
            </h1>
            {children}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl bg-white/40 w-[120%] h-[120%]"></div>
        </div>
      </div>

      <div className="hidden md:flex relative bg-theme h-screen justify-center items-center animate-translateL z-20 bg-gradient-to-tr from-black to-theme rounded-e-[100px] overflow-hidden order-1">
        <div className="relative flex flex-col justify-center items-center animate-translateL p-10">
          <h1 className="text-[40px] text-white text-bold text-center mb-5">
            Hello, friend!
          </h1>
          <p className="text-base text-white mb-5 text-center">
            Đăng ký thông tin cá nhân của bạn để sử dụng tất cả các tính năng
            của trang web
          </p>
          <ButtonAnchor
            href="/login"
            className="bg-transparent border-white text-sm hover:text-theme"
          >
            <span className="relative">Đăng nhập</span>
          </ButtonAnchor>
        </div>
      </div>
    </div>
  );
}
