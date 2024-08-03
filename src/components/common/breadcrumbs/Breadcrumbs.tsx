import Link from "next/link";
import React from "react";

type Props = {
  location: {
    title: string;
    link: string;
  };
};

const Breadcrumbs = ({ location }: Props) => {
  return (
    <section className="bg-[#f5f5fd] py-1 overflow-hidden">
      <div className="container">
        <div className="relative inline-flex align-middle">
          <Link href="/" className="px-1 text-txt leading-[37px] line-clamp-1">
            Trang chủ
          </Link>

          <span className="px-1 text-txt leading-[37px] line-clamp-1">/</span>
          <Link
            href={location.link}
            className="px-1 text-txt leading-[37px] line-clamp-1"
          >
            {location.title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
