import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div
      className="bg-[url('/uploads/source/background/bg-green.png')] bg-cover bg-no-repeat py-8"
      style={{
        backgroundPosition: "top center",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="order-2 col-span-2 md:col-span-1 px-3">
            <div className="mt-[80px] mb-5">
              <p className="text-green text-base mt-3 mb-4 bg-white inline-block py-0 px-4 rounded">
                Mong đợi hơn cả cà phê
              </p>
              <p className="text-left tracking-normal m-0 block text-white text-[30px] leading-[30px]">
                LICERIA COFFEE
              </p>
            </div>

            <div className="mb-10">
              <p className="text-white text-base text-justify">
                Chúng tôi là nhà cung cấp cà phê hảo hạng đi kèm với trãi nghiệm
                bổ ích tại quán cafe. Chúng tôi cũng cung cấp lựa chọn các loại
                loại trà chất lượng, nước ép tươi ngon, detox tốt cho sức khoẻ,
                bánh ngọt và các món thú vị khác nhằm làm hài lòng mọi vị giác.
              </p>
              <p className="text-white text-base text-justify">
                Mọi người đến Liceria để thư giãn, trò chuyện, họp mặt hoặc làm
                việc. Chúng tôi là địa điểm thư giãn cho các gia đình có trẻ em,
                nơi tụ tập bạn bè, họp nhóm – và chúng tôi không thể hạnh phúc
                hơn về điều này. Truy cập để tìm hiểu về chúng tôi và bạn sẽ
                thấy: chúng tôi thú vị hơn nhiều so với những gì chúng tôi pha.
              </p>
            </div>
          </div>

          <div className="order-1 col-span-2 md:col-span-1 px-3">
            <figure className="relative w-full h-full">
              <Image
                src="/uploads/source/about/img-coffee-1.png"
                alt="COFFEE"
                title="COFFEE"
                loading="lazy"
                layout="fill"
                objectFit="contain"
              />
            </figure>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-4">
          {[
            {
              image: "/uploads/source/icon/f-icon-1-1.png",
              label: "Cà phê chất lượng",
              description:
                "Liceria Coffee tự hào là 1 trong những đơn vị cung cấp cafe sạch, rang mộc tự nhiên chất lượng với giá tốt nhất cho khách hàng.",
            },
            {
              image: "/uploads/source/icon/f-icon-3-1.png",
              label: "Đa dạng thức uống",
              description:
                "Đến với Liceria Coffee</, khách hàng sẽ có những trải nghiệm thú vị từ hơn 40 loại đồ uống các loại được phục vụ trên tiêu chí: Ngon – Rẻ – Chất lượng.",
            },
            {
              image: "/uploads/source/icon/f-icon-4-1.png",
              label: "Dịch vụ chuyên nghiệp",
              description:
                "Năng động, nhiệt huyết, luôn mỉm cười, xem khách hàng là ân nhân lấy sự hài lòng của quý khách là niềm hạnh phúc của mình!",
            },
            {
              image: "/uploads/source/icon/f-icon-1-1.png",
              label: "Hậu mãi khách hàng",
              description:
                "Nhằm cảm ơn khách hàng luôn tin tưởng và đồng hành cùng Liceria Coffee trong suốt những năm tháng qua, chúng tôi luôn có những chính sách ưu đãi tốt nhất.",
            },
          ].map(
            (el, index) =>
              el && (
                <div
                  key={index}
                  className="col-span-4 sm:col-span-2 md:col-span-1"
                >
                  <div className="p-3 mb-5 relative overflow-hidden items-center">
                    <figure className="relative w-[60px] h-[60px]">
                      <Image
                        src={el.image}
                        alt={el.label}
                        title={el.label}
                        data-src={el.image}
                        loading="lazy"
                        layout="fill"
                        objectFit="contain"
                      />
                    </figure>

                    <p className="text-left text-white text-[22px] font-bold mt-5 mb-3 leading-[25px]">
                      {el.label}
                    </p>
                    <p className="text-left text-white text-[17.6px] leading-6">
                      {el.description}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
