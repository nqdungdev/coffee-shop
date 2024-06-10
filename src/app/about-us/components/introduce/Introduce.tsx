import Button from "@/components/common/button/Button";
import Image from "next/image";
import React from "react";

type Props = {};

const Introduce = (props: Props) => {
  return (
    <section className="py-[40px] -mt-[250px]">
      <div className="container-fluid">
        <div className="relative w-full h-[500px]">
          <Image
            src="/uploads/source/background/coffeebackgroud1.jpg"
            alt="Về chúng tôi"
            title="Về chúng tôi"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="container">
          <div className="grid grid-cols-3 gap-5 -mt-[200px] overflow-hidden">
            <div className="order-2 col-span-3 md:col-span-2">
              <div className="mt-8 mx-0 my-5">
                <p className="relative mb-4 text-green text-base bg-white inline-block px-4 rounded-md">
                  Công Ty TNHH TM & DV Liceria
                </p>
                <p className="relative text-white text-[80px] leading-[1.5] font-bold">
                  Về Chúng Tôi
                </p>
              </div>

              <div className="mb-10">
                <p className="text-[17px] leading-[25px] mb-5 mt-3">
                  Chúng tôi là nhà cung cấp cà phê hảo hạng đi kèm với trãi
                  nghiệm bổ ích tại quán cafe. Chúng tôi cũng cung cấp lựa chọn
                  các loại loại trà chất lượng, nước ép tươi ngon, detox tốt cho
                  sức khoẻ, bánh ngọt và các món thú vị khác nhằm làm hài lòng
                  mọi vị giác.
                </p>

                <p className="text-[17px] leading-[25px] mb-5 mt-3">
                  Mọi người đến Halsey để thư giãn, trò chuyện, họp mặt hoặc làm
                  việc. Chúng tôi là địa điểm thư giãn cho các gia đình có trẻ
                  em, nơi tụ tập bạn bè, họp nhóm – và chúng tôi không thể hạnh
                  phúc hơn về điều này. Truy cập để tìm hiểu về chúng tôi và bạn
                  sẽ thấy: chúng tôi thú vị hơn nhiều so với những gì chúng tôi
                  pha.
                </p>
              </div>

              <Button className="bg-theme text-white border-theme hover:bg-white hover:text-theme">
                XEM THÊM
              </Button>
            </div>

            <div className="relative order-1 col-span-3 md:col-span-1 min-h-[400px] h-full">
              <Image
                src="/uploads/source/about/people.jpg"
                alt="Về Chúng Tôi"
                title="Về Chúng Tôi"
                loading="lazy"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
