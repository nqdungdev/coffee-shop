"use client";
import React, { useCallback } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
type Props = {
  totalPage: number;
};

const Pagination = ({ totalPage }: Props) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { push } = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <nav className="flex w-full justify-start my-4">
      <ul className="inline-flex -space-x-px items-center">
        <li>
          <button
            onClick={() => {
              page > 1 &&
                push(
                  `${pathname}?${createQueryString("page", (1).toString())}`
                );
            }}
            className={`flex items-center justify-center py-1 px-3 rounded-md m-1 text-xs transition-all duration-300 bg-transparent text-black hover:bg-[#FBF9FF] hover:shadow-[0_4px_30px_0_rgba(0,0,0,.2),_0_0_0_transparent] ${
              page <= 1 && "hidden"
            }`}
            disabled={page <= 1 ? true : false}
          >
            <FaAngleDoubleLeft />
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              page > 1 &&
                push(
                  `${pathname}?${createQueryString(
                    "page",
                    (page - 1).toString()
                  )}`
                );
            }}
            className={`flex items-center justify-center py-1 px-3 rounded-md m-1 text-xs transition-all duration-300 bg-transparent text-black hover:bg-[#FBF9FF] hover:shadow-[0_4px_30px_0_rgba(0,0,0,.2),_0_0_0_transparent] ${
              page <= 1 && "hidden"
            }`}
            disabled={page <= 1 ? true : false}
          >
            Prev
          </button>
        </li>

        {[...Array(totalPage)].map((_, index) =>
          index + 1 === 1 ||
          index + 1 === page - 1 ||
          index + 1 === page ||
          index + 1 === page + 1 ||
          index + 1 === page + 2 ? (
            <li key={index}>
              <button
                className={`flex items-center justify-center py-1 px-3 rounded-md m-1 text-xs transition-all duration-300 ${
                  page === index + 1
                    ? "text-white bg-theme"
                    : "bg-transparent text-black hover:bg-[#FBF9FF] hover:shadow-[0_4px_30px_0_rgba(0,0,0,.2),_0_0_0_transparent]"
                }`}
                onClick={() => {
                  push(
                    `${pathname}?${createQueryString(
                      "page",
                      (index + 1).toString()
                    )}`
                  );
                }}
              >
                {index + 1}
              </button>
            </li>
          ) : (
            ""
          )
        )}

        <li>
          <button
            onClick={() => {
              page < totalPage &&
                push(
                  `${pathname}?${createQueryString(
                    "page",
                    (page + 1).toString()
                  )}`
                );
            }}
            className={`flex items-center justify-center py-1 px-3 rounded-md m-1 text-xs transition-all duration-300 bg-transparent text-black hover:bg-[#FBF9FF] hover:shadow-[0_4px_30px_0_rgba(0,0,0,.2),_0_0_0_transparent] ${
              page >= totalPage && "hidden"
            }`}
            disabled={page >= totalPage ? true : false}
          >
            Next
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              page < totalPage &&
                push(
                  `${pathname}?${createQueryString(
                    "page",
                    totalPage.toString()
                  )}`
                );
            }}
            className={`flex items-center justify-center py-1 px-3 rounded-md m-1 text-xs transition-all duration-300 bg-transparent text-black hover:bg-[#FBF9FF] hover:shadow-[0_4px_30px_0_rgba(0,0,0,.2),_0_0_0_transparent] ${
              page >= totalPage && "hidden"
            }`}
            disabled={page >= totalPage ? true : false}
          >
            <FaAngleDoubleRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
