import Image from "next/image";
import React from "react";

type Props = {};

const PolicyIntuitive = (props: Props) => {
  return (
    <section className="border border-solid border-themeLight rounded-md">
      <div className="pt-4 px-3 pb-1 mb-3">
        <p className="text-center m-0 text-xl font-bold uppercase text-[#333] my-4 leading-5">
          CAM KẾT
        </p>
      </div>
      <div className="px-3">
        {[
          {
            label: "Miễn phí giao hàng",
            description: "Giao hàng toàn quốc",
            image: "/uploads/source/icon/shipped-1.png",
          },
          {
            label: "Đảm bảo",
            description: "Chất lượng đã kiểm định",
            image: "/uploads/source/icon/shield-1.png",
          },
          {
            label: "Khuyến mãi",
            description: "Khuyến mãi thường xuyên",
            image: "/uploads/source/icon/gift-box-1.png",
          },
          {
            label: "Hỗ trợ 24/7",
            description: "Chăm sóc khách hàng uy tín",
            image: "/uploads/source/icon/customer-service-1.png",
          },
        ].map(
          (el, index) =>
            el && (
              <div
                key={index}
                className="overflow-hidden mb-3 flex gap-3 items-center gap-2"
              >
                <div className="p-2">
                  <div className="relative w-[30px] h-[30px]">
                    <Image
                      src={el.image}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="w-[calc(100%_-_50px)]">
                  <h4 className="text-sm text-theme mb-2 font-bold leading-[1.2]">
                    {el.label}
                  </h4>
                  <p className="text-sm leading-[22px] mb-0">
                    {el.description}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default PolicyIntuitive;
