import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationArrow, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

type Props = {};

const Store = (props: Props) => {
  return (
    <main className="bg-white text-black pt-[165px]">
      <Breadcrumbs />

      <section className="container mt-4">
        <div className="mb-3">
          <h1 className="text-[40px] text-theme leading-[1.5] font-bold text-center">
            Danh sách cửa hàng
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-3 md:col-span-2 lg:col-span-1">
            <div className="flex gap-3 p-3 bg-[#e6e6e6]">
              <div className="relative w-[120px] h-[160px]">
                <Image
                  src="/uploads/source/about/people.jpg"
                  alt="Cửa hàng"
                  title="Cửa hàng"
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex-1">
                <div className="font-bold text-lg leading-[1.5] text-theme mb-4">
                  Chi nhánh Thanh Khê Đà Nẵng
                </div>
                <p className="cursor-pointer flex gap-1 text-sm mb-3">
                  <FaLocationDot className="w-3 text-theme" />
                  <span className="text-black transition-all duration-300 hover:text-theme flex-1">
                    10 Hà Huy Tập, Xuân Hà, Thanh Khê, Đà Nẵng
                  </span>
                </p>

                <p className="cursor-pointer flex gap-1 text-sm mb-3">
                  <FaPhoneVolume className="w-3 text-theme" />
                  <div className="flex-1">
                    <Link
                      className="text-black transition-all duration-300 hover:text-theme"
                      href="tel:0123 456 789"
                    >
                      0123 456 789
                    </Link>
                    <span> - </span>
                    <Link
                      className="text-black transition-all duration-300 hover:text-theme"
                      href="tel:0522 465 789"
                    >
                      0522 465 789
                    </Link>
                  </div>
                </p>

                <p className="cursor-pointer flex gap-1 text-sm mb-3">
                  <FaLocationArrow className="w-3 text-theme" />

                  <Link
                    className="text-theme font-bold transition-all duration-300 hover:text-themeLight flex-1"
                    href="http://maps.google.com/?q=10 Hà Huy Tập, Xuân Hà, Thanh Khê, Đà Nẵng"
                  >
                    Xem trên google maps
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex gap-3 p-3 bg-transparent">
              <div className="relative w-[120px] h-[160px]">
                <Image
                  src="/uploads/source/about/people.jpg"
                  alt="Cửa hàng"
                  title="Cửa hàng"
                  loading="lazy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex-1">
                <div className="font-bold text-lg leading-[1.5] text-theme mb-4">
                  Chi nhánh Thanh Khê Đà Nẵng
                </div>
                <p className="cursor-pointer flex gap-1 text-sm mb-3">
                  <FaLocationDot className="w-3 text-theme" />
                  <span className="text-black transition-all duration-300 hover:text-theme flex-1">
                    10 Hà Huy Tập, Xuân Hà, Thanh Khê, Đà Nẵng
                  </span>
                </p>

                <p className="cursor-pointer flex gap-1 text-sm mb-3">
                  <FaPhoneVolume className="w-3 text-theme" />
                  <div className="flex-1">
                    <Link
                      className="text-black transition-all duration-300 hover:text-theme"
                      href="tel:0123 456 789"
                    >
                      0123 456 789
                    </Link>
                    <span> - </span>
                    <Link
                      className="text-black transition-all duration-300 hover:text-theme"
                      href="tel:0522 465 789"
                    >
                      0522 465 789
                    </Link>
                  </div>
                </p>

                <p className="cursor-pointer flex gap-1 text-sm mb-3">
                  <FaLocationArrow className="w-3 text-theme" />

                  <Link
                    className="text-theme font-bold transition-all duration-300 hover:text-themeLight flex-1"
                    href="http://maps.google.com/?q=10 Hà Huy Tập, Xuân Hà, Thanh Khê, Đà Nẵng"
                  >
                    Xem trên google maps
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 md:col-span-2 lg:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.898448959592!2d108.18893727518171!3d16.070758684608965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421855943603d1%3A0x669b97d5e4930fd0!2zMTAgSMOgIEh1eSBU4bqtcCwgWHXDom4gSMOgLCBUaGFuaCBLaMOqLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1701247662470!5m2!1sen!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Store;
