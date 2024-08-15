import ButtonAnchor from "@/components/common/button/ButtonAnchor";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Đăng nhập",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1 relative bg-transparent h-screen flex justify-center items-center animate-translateL">
        <div className="relative flex flex-col animate-translateL">
          <div className="relative z-10">
            <h1 className="text-[25px] leading-[30px] mb-3 mt-0 text-[#222] font-bold uppercase">
              Đăng nhập
            </h1>
            {children}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl bg-white/40 w-[120%] h-[120%]"></div>
        </div>
      </div>

      <div className="hidden md:flex relative bg-theme h-screen justify-center items-center animate-translateR z-20 bg-gradient-to-tr from-black to-theme rounded-s-[100px] overflow-hidden">
        <div className="relative flex flex-col justify-center items-center animate-translateR p-10">
          <h1 className="text-[40px] text-white text-bold text-center mb-5">
            Welcome back!
          </h1>
          <p className="text-base text-white mb-5 text-center">
            Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng của
            trang web
          </p>
          <ButtonAnchor
            href="/register"
            className="bg-transparent border-white text-sm hover:text-theme"
          >
            <span className="relative">Đăng ký</span>
          </ButtonAnchor>
        </div>
      </div>
    </div>
  );
}
