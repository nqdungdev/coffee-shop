"use client";

import Button from "@/components/common/button/Button";
import Pagination from "@/components/common/pagination/Pagination";
import React, { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { FaRegThumbsUp, FaStar } from "react-icons/fa6";

type Props = {};

const Comments = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <>
      <section className="relative">
        <div className="mt-8">
          <ul className="mb-4 pl-8 flex items-center gap-2">
            <li>
              <span>Lọc theo:</span>
            </li>
            <li
              className="bg-[#e6eef7] py-1 px-5 rounded-md cursor-pointer text-[#0d5cb6]"
              data-sort
            >
              <span>Tất cả</span>
            </li>
            {[...Array(5)].map((_, index) => (
              <li
                key={index}
                className="bg-[#eee] px-5 rounded-md cursor-pointer flex items-center gap-2"
                data-sort="1-star"
              >
                <span className="text-sm">{index + 1}</span>
                <FaStar className="text-[#ccc] text-sm mb-1" />
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden py-5 border-t border-solid border-[#ccc]">
          <div className="flex items-center mb-3 gap-3">
            <div className="w-10 h-10 rounded-full relative bg-theme overflow-hidden flex justify-center items-center">
              <span className="text-white text-[100%]">HN</span>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="font-semibold text-[#242424] capitalize">
                <span className="text-sm">Hà Nhật</span>
                <div className="flex items-center text-green gap-1">
                  <FaCheckCircle className="mb-1" />
                  <span className="text-xs leading-[20px]">
                    Đã mua hàng từ shop
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs">
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
                <FaStar className="text-yellow" />
              </div>
            </div>
          </div>

          <div className="pl-12">
            <div className="bg-[#f3f4f6] rounded-md p-3">
              <p className="text-[#242424] mb-1 font-semibold leading-[25px]">
                Hài lòng
              </p>
              <div className="text-sm leading-[24px] overflow-hidden line-clamp-5 mb-1">
                Lúc đầu nghe nhiều tin đồn mua hàng online không ổn, nhưng khi
                mua tại web này thì quá good luôn
              </div>

              <div className="text-xs leading-[16px] text-[#787878] m-0">
                <span>6 tháng trước</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <div className="px-3 py-1 text-xs text-blue border border-solid border-blue rounded-md cursor-pointer flex items-center justify-center gap-1">
                <FaRegThumbsUp />
                <span>Like</span>
                <span>0</span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setIsOpenModal(true)}
              >
                <span className="text-xs leading-[20px] text-blue">
                  Gửi trả lời
                </span>
              </div>
            </div>
          </div>
        </div>

        <Pagination totalPage={3} />
      </section>

      {isOpenModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-black/60 flex justify-center items-center">
          <div className="bg-white w-[800px] max-w-full max-h-screen p-8 overflow-y-auto rounded-md mx-auto">
            <header className="flex justify-between items-center">
              <h2 className="text-xl font-semibold m-0 leading-[25px] uppercase text-blue">
                Phản hồi đánh giá
              </h2>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setIsOpenModal(false)}
              />
            </header>

            <div className="mt-5 mb-0 text-black/80">
              <div className="flex flex-col">
                <p className="text-sm leading-[12px] font-semibold capitalize">
                  Xuân
                </p>
                <p className="text-sm leading-[20px] mt-3 mb-10 text-black">
                  giá cả phải chăng, đáng để trãi nghiệm
                </p>
              </div>

              <form>
                <div className="flex flex-col">
                  <div className="m-0">
                    <textarea
                      name="rating_star_message"
                      className="m-0 relative py-3 px-4 w-full text-md leading-[1.5] text-black/60 border border-solid border-[e4e9f0] transition-all duration-300 shadow-none outline-none"
                      rows={5}
                      required
                      placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này nhé"
                      defaultValue={""}
                    />
                  </div>
                  <div className="m-0">
                    <Button
                      type="submit"
                      className="bg-theme text-white border-theme hover:bg-white hover:text-theme mx-auto text-sm"
                    >
                      Gửi
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
