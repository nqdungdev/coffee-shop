"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = { categories: { label: string; link: string }[] };

const HeaderCategories = ({ categories }: Props) => {
  const pathname = usePathname();

  const [active, setActive] = useState<string>(
    pathname === "/" ? "" : `${pathname.split("/")[1]}`
  );
  return (
    <ul className="flex">
      {categories?.map(
        (el, index) =>
          el && (
            <li
              key={index}
              className="relative group"
              onClick={() => setActive(el.link)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl bg-white/80 w-full h-full"></div>
              <Link
                target="_self"
                className={`relative text-txt p-5 text-base font-bold inline-block uppercase rounded-full
                  ${
                    active === el.link
                      ? "after:opacity-100 after:left-0 text-txtHover"
                      : "after:opacity-0 after:left-1"
                  } after:absolute after:top-1/2 after:w-3 after:h-3 after:bg-theme after:rounded-full after:-translate-y-1/2 after:transition-all after:duration-300 group-hover:after:opacity-100 group-hover:after:left-0 group-hover:text-txtHover
                    group-hover:after:transition-all group-hover:after:duration-300`}
                href={el.link}
              >
                <span>{el.label}</span>
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

export default HeaderCategories;
