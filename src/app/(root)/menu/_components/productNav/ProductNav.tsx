"use client";
import { setSortBy } from "@/lib/features/products/productsSlice";
import { useAppDispatch } from "@/lib/hooks";
import {
  FaArrowDownShortWide,
  FaArrowUpWideShort,
  FaEye,
  FaHotjar,
} from "react-icons/fa6";
type Props = {};

const ProductNav = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleSortChange = (value: string) => {
    dispatch(setSortBy(value));
  };
  return (
    <div className="hidden md:block relative overflow-hidden pb-4">
      <div className="flex text-right items-center gap-3 border-b border-solid border-[#f4f4f4]">
        <label>Sắp xếp theo</label>
        <div className="flex">
          {[
            { label: "Mới nhất", icon: <FaEye />, value: "new" },
            {
              label: "Bán chạy",
              icon: <FaHotjar />,
              value: "best-seller",
            },
            ,
            {
              label: "Giá cao đến thấp",
              icon: <FaArrowUpWideShort />,
              value: "desc",
            },
            {
              label: "Giá thấp đến cao",
              icon: <FaArrowDownShortWide />,
              value: "asc",
            },
          ].map(
            (el, index) =>
              el && (
                <div
                  key={index}
                  className="block py-3 px-4 border-b-[3px] border-solid border-transparent mx-3 -my-[1px] leading-[1.5] text-[#212529] text-center align-middle cursor-pointer text-base transition-all duration-150 hover:text-theme hover:border-theme"
                  onClick={() => handleSortChange(el.value)}
                >
                  {el.label}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
