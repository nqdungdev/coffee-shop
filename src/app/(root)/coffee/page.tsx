import Button from "@/components/common/button/Button";

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Products from "@/components/coffee/products/Products";

type Props = {};

const Coffee = (props: Props) => {
  return (
    <main className="bg-white text-black">
      <section className="bg-[url('/uploads/source/about/bg-coffee.jpg')] bg-cover bg-no-repeat bg-center bg-blend-color-burn bg-[rgba(0,0,0,0.673)] pt-[150px] pb-[200px]"></section>

      <section className="container">
        <div className="bg-theme -mt-[50px] mx-[100px] rounded px-2 py-8">
          <div className="relative overflow-hidden">
            <div className="text-center mb-8">
              <p className="text-center tracking-0 pb-0 m-0 text-white text-[45px] leading-[45px]">
                Sản phẩm chất lượng tới người yêu cà phê!
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Button className="border-green bg-green text-white before:bg-white hover:text-green">
                Xem thực đơn
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Products />

      <section className="bg-[rgba(99,60,2,0.763)] bg-[url('/uploads/source/background/bo-cong-anh-1.png')] bg-cover bg-no-repeat bg-center bg-blend-color-burn py-20">
        <div className="container-fluid">
          <div className="text-center">
            <p className="text-white text-[30px] leading-[1.5] mx-auto max-w-[1000px]">
              Liceria coffee tâm huyết gửi gắm những sản phẩm chất lượng tới
              người yêu cà phê! Liceria coffee tâm huyết gửi gắm những hạt cà
              phê sạch, nguyên chất. Mong muốn mang những sản phẩm chất lượng,
              giúp người yêu cà phê luôn được thưởng thức những ly cà phê thơm
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Coffee;
