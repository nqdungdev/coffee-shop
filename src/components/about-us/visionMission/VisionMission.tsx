import Image from "next/image";
import React from "react";

type Props = {};

const VisionMission = (props: Props) => {
  return (
    <section className="bg-[url('/uploads/source/background/bo-cong-anh-1.png')] bg-[#00864a] bg-cover bg-no-repeat bg-center bg-fixed bg-blend-color-burn py-10">
      <div className="container">
        <div className="mb-6 text-center">
          <p className="relative mb-4 text-green text-base bg-white inline-block px-4 rounded-md text-center">
            Không chỉ là cà phê nguyên chất
          </p>
          <p className="relative text-white text-[40px] leading-[40px] font-bold text-center">
            Tầm nhìn & Sứ Mệnh
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 md:col-span-1 border border-solid border-transparent p-5 flex gap-5 flex-col items-center md:items-start md:flex-row">
            <div className="relative min-w-[100px] w-[100px] h-[100px]">
              <Image
                src="/uploads/source/icon/tam-nhin.png"
                alt="Tầm nhìn"
                title="Tầm nhìn"
                loading="lazy"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="text-lg text-white text-justify">
              <p>
                – Xây dựng thương hiệu độc quyền với các chuỗi cửa hàng trên
                toàn quốc hoạt động dưới hình thức nhượng quyền, hoặc được vận
                hành bởi công ty mẹ.
              </p>
              <p>
                – Tiến ra thị trường quốc tế với mô hình take-away tại các nơi
                công cộng nổi tiếng. Hiện tại công ty có cơ hội mở rộng ở khu
                vực Tây Âu (nước Đức).
              </p>
              <p>
                – Mở rộng lĩnh vực hoạt động: tổ chức sự kiện, homstay, dịch vụ
                tour du lịch, xe điện du lịch, bida …
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 border border-solid border-transparent p-5 flex gap-5 flex-col items-center md:items-start md:flex-row">
            <div className="relative min-w-[100px] w-[100px] h-[100px]">
              <Image
                src="/uploads/source/icon/su-menh.png"
                alt="Sứ mệnh"
                title="Sứ mệnh"
                loading="lazy"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="text-lg text-white text-justify">
              <p>
                – Halsey là nơi cung cấp các đồ uống, đồ ăn với tiêu chuẩn chất
                lượng cao và trải nghiệm dịch vụ độc đáo.
              </p>
              <p>
                – Trở thành nơi làm việc đáng tin cậy và được tôn trọng nhất,
                cung cấp lợi ích bình đẳng và mang đến bầu không khí làm việc
                thân thiện cho nhân viên.
              </p>
              <p>
                – Công ty cũng ủng hộ hiệu quả năng lượng, giảm thiểu chất thải
                và hoạt động từ thiện như một doanh nghiệp xanh bền vững. Để
                truyền cảm hứng và nuôi dưỡng nhận thức của khách hàng, nhân
                viên, đối tác, cộng đồng và các bên liên quan khác về thực hành
                phát triển bền vững.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
