"use client";
import Button from "@/components/common/button/Button";
import { useState } from "react";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";

type Props = {};

const Information = (props: Props) => {
  const [value, setValue] = useState<number>(1);
  console.log(value);
  return (
    <div>
      <h1 className="text-[25px] leading-[30px] mb-3 mt-0 text-[#222] font-bold">
        Ca cao kem trứng dừa nướng
      </h1>
      <div className="py-3 mt-1 mb-4">
        <p>Bubble Milk Tea With Baked Egg Foam</p>
      </div>
      <div className="relative block text-xs mb-3 text-yellow">
        <div className="inline-block flex items-center gap-2">
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <FaStar className="text-yellow" />
          <span className="text-yellow leading-[12px]">(1 đánh giá)</span>
        </div>
      </div>

      <div className="flex gap-10 items-end">
        <span className="text-lg font-bold text-red leading-[25px]">
          35,000đ
        </span>

        <del className="text-base font-normal text-[#999] leading-[25px]">
          54,000đ
        </del>

        <span className="text-lg font-bold text-red leading-[25px]">-36%</span>
      </div>

      <div className="overflow-hidden mt-1 py-3 flex gap-2">
        <div className="w-[97px] relative flex justify-between">
          <div className="border border-solid border-[#f7f8fa] bg-[#f7f8fa] rounded-md h-[50px] p-3 relative flex items-center justify-between">
            <FaMinus
              className="cursor-pointer w-3 h-3 relative text-[#086fcf]"
              onClick={() => value > 1 && setValue((value) => (value -= 1))}
            />
            <input
              type="number"
              name="quantity"
              defaultValue={1}
              value={1}
              min={1}
              className="border-0 block text-[#16161a] text-sm h-[30px] w-[50px] leading-5 bg-[#f7f8fa] text-center pl-3 outline-none"
            />
            <FaPlus
              className="cursor-pointer w-3 h-3 relative text-[#086fcf]"
              onClick={() => setValue((value) => (value += 1))}
            />
          </div>
        </div>

        <div className="w-[calc(100%_-_110px] flex gap-2">
          <Button className="bg-red border-red text-white hover:bg-white hover:text-red text-center capitalize ">
            <>
              <p className="text-xs leading-4">Thêm vào giỏ</p>
              <span className="text-[9px] font-normal leading-4">
                và mua sản phẩm khác
              </span>
            </>
          </Button>

          <Button className="bg-green border-green text-white hover:bg-white hover:text-green text-center capitalize ">
            <>
              <p className="text-xs leading-4">Mua Ngay</p>
              <span className="text-[9px] font-normal leading-4">
                Thanh toán ngay
              </span>
            </>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
