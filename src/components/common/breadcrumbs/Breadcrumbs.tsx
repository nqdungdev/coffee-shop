import Link from "next/link";
import React from "react";

type Props = {};

const Breadcrumbs = (props: Props) => {
  return (
    <section className="bg-[#f5f5fd] py-1 overflow-hidden">
      <div className="container">
        <div className="relative inline-flex align-middle">
          <Link
            href="/"
            className="px-1 text-[#2e2e2e] leading-[37px] line-clamp-1"
          >
            Trang chủ
          </Link>

          <span className="px-1 text-[#2e2e2e] leading-[37px] line-clamp-1">
            /
          </span>
          <Link
            href="/"
            className="px-1 text-[#2e2e2e] leading-[37px] line-clamp-1"
          >
            Sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
