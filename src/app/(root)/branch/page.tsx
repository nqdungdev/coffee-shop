"use client";

import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationArrow, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import useSWR from "swr";

type Props = {};
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Branch = (props: Props) => {
  const { data: branches, error } = useSWR(`/branch/api`, fetcher);

  console.log(branches);
  return (
    <main className="bg-white text-black pt-[165px]">
      <Breadcrumbs />

      <section className="container mt-4">
        <div className="mb-3">
          <h1 className="text-[40px] text-theme leading-[1.5] font-bold text-center">
            Danh sách cửa hàng
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-5 py-5">
          <div className="col-span-3 md:col-span-2 lg:col-span-1 max-h-[450px] overflow-y-auto">
            {branches?.map((branch: any) => (
              <div key={branch._id} className="flex gap-3 p-3 bg-[#e6e6e6]">
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
                    {branch.name}
                  </div>
                  <p className="cursor-pointer flex gap-1 text-sm mb-3">
                    <FaLocationDot className="w-3 text-theme" />
                    <span className="text-black transition-all duration-300 hover:text-theme flex-1">
                      {branch.address}
                    </span>
                  </p>

                  <p className="cursor-pointer flex gap-1 text-sm mb-3">
                    <FaPhoneVolume className="w-3 text-theme" />
                    <span className="flex-1">
                      <Link
                        className="text-black transition-all duration-300 hover:text-theme"
                        href={`tel:${branch.phone}`}
                      >
                        {branch.phone}
                      </Link>
                    </span>
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
            ))}
          </div>

          <div className="col-span-3 md:col-span-2 lg:col-span-2">
            {branches && (
              <div
                className="w-full"
                dangerouslySetInnerHTML={{ __html: branches[0].iframe }}
              ></div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Branch;
