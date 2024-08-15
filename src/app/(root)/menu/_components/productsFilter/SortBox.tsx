import {
  FaArrowDownShortWide,
  FaArrowUpWideShort,
  FaEye,
  FaHotjar,
} from "react-icons/fa6";
import Collapse from "../common/Collapse";
import { UseFormRegister } from "react-hook-form";
import { ChangeEvent } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setSortBy } from "@/lib/features/products/productsSlice";

type Props = {
  register: UseFormRegister<any>;
};

const SortBox = ({ register }: Props) => {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortBy(event.target.value));
  };
  return (
    <Collapse title="Sắp xếp theo">
      <ul className="p-0 overflow-y-auto flex gap-1 flex-col mb-1">
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
              <li key={index} className="w-full">
                <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                  <input
                    type="radio"
                    value={el.value}
                    {...register("sort")}
                    onChange={(e) => handleSortChange(e)}
                  />
                  {el.icon}
                  <span>{el.label}</span>
                </label>
              </li>
            )
        )}
      </ul>
    </Collapse>
  );
};

export default SortBox;
