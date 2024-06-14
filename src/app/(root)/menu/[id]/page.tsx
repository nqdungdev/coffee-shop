import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";
import Button from "@/components/common/button/Button";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaMinus, FaPlus, FaStar, FaStarHalf } from "react-icons/fa6";
import RelatedProducts from "./components/relatedProducts/RelatedProducts";
import RatingStar from "./components/ratingStar/RatingStar";
import Comments from "./components/comments/Comments";
import ViewedProducts from "./components/viewedProducts/ViewedProducts";
import PolicyIntuitive from "./components/policyIntuitive/PolicyIntuitive";
import Information from "./components/information/Information";

type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <main className="bg-white text-black pt-[165px]">
      <Breadcrumbs />

      <div className="container mt-4">
        <div className="grid grid-cols-12 gap-2 min-h-[400px]">
          <div className="col-span-12 md:col-span-4 flex flex-col justify-between gap-2">
            <div className="relative w-full h-full rounded-md">
              <Link href="#">
                <Image
                  src="/uploads/source/product/cacao-kem-trung-dua-nuong-150x150.png"
                  alt="Ca cao kem trứng dừa nướng"
                  title="Ca cao kem trứng dừa nướng"
                  loading="lazy"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </div>

            <nav className="my-3">
              <div className="mt-3 flex gap-2">
                {[
                  {
                    label: "Facebook",
                    image: "/uploads/source/icon/group-1.png",
                    link: "#",
                  },
                  {
                    label: "Twitter",
                    image: "/uploads/source/icon/twitter-1.png",
                    link: "#",
                  },
                  {
                    label: "Google mail",
                    image: "/uploads/source/icon/Google-Icon.png",
                    link: "#",
                  },
                  {
                    label: "Zalo",
                    image: "/uploads/source/icon/Zalo-Icon.png",
                    link: "#",
                  },
                  {
                    label: "QR",
                    image: "/uploads/source/icon/qr-code.png",
                    link: "#",
                  },
                ].map((el, index) => (
                  <Link
                    key={index}
                    href={el.link}
                    className="inline-block bg-white w-10 h-10 leading-[30px] text-center relative overflow-hidden rounded-md shadow-[0_5px_15px_-5px_rgba(0,0,0,.1)] p-1 border border-solid border-[#f0f1f4] transition-all duration-300 group before:absolute before:top-[90%] before:-left-[120%] before:w-[150%] before:h-[150%] before:rotate-[45deg] before:bg-[#dc4c38] hover:before:-top-[25%] hover:before:-left-[25%] before:transition-all before:duration-300"
                  >
                    <Image
                      src={el.image}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      width={32}
                      height={32}
                      className="scale-[0.8] group-hover:scale-[1] group-hover:saturate-[3] transition-all duration-300"
                    />
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div className="col-span-12 md:col-span-5">
            <Information />
          </div>

          <div className="col-span-12 md:col-span-3">
            <PolicyIntuitive />
          </div>
        </div>

        <section className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-9">
            <RelatedProducts />

            <RatingStar />

            <Comments />
          </div>

          <div className="col-span-12 md:col-span-3">
            <ViewedProducts />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetails;
