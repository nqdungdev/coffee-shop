"use client";
import Button from "@/components/common/button/Button";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaPlus, FaRegStar, FaStar } from "react-icons/fa6";

type Props = {};

const RatingStar = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <>
      <section className="mt-3 mb-0 mx-auto border border-solid border-white rounded-md overflow-hidden bg-[#f5f5f5] grid grid-cols-2 gap-2">
        <div className="p-5 border-r border-solid border-[#eee]">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[50px] align-middle font-bold text-center leading-1">
              4.0
            </span>
            <div className="inline-block flex items-center gap-2 text-lg">
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaRegStar className="text-yellow" />
            </div>
            <span className="leading-[25px]">(1 đánh giá)</span>
          </div>
          {[...Array(5)].map((_, index: number) => (
            <div key={index} className="flex items-center">
              <div className="inline-block flex items-center gap-2 text-sm">
                {[...Array(5 - index)].map((_, i) => (
                  <FaStar key={i} className="text-yellow" />
                ))}
                {[...Array(index)].map((_, i) => (
                  <FaRegStar key={i} className="text-yellow" />
                ))}
              </div>
              <div className="w-[40%] bg-[#e9e9e9] h-3 mx-3 rounded-[5px] overflow-hidden">
                <div className="w-[75%] bg-[#f25800] h-3 max-w-full" />
              </div>
              <span className="text-sm font-bold leading-[25px]">
                <strong>
                  <b>0%</b> | 0
                </strong>
              </span>
            </div>
          ))}
        </div>

        <div className="p-5">
          <div className="flex flex-col items-center gap-5">
            <p className="text-center text-xs leading-[25px]">Có 1 đánh giá</p>
            <Button
              type="button"
              className="bg-theme text-white border-theme text-xs hover:bg-white hover:text-theme"
              onClick={() => setIsOpenModal(true)}
            >
              Gửi đánh giá của bạn
            </Button>
          </div>
        </div>
      </section>
      {isOpenModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden bg-black/60 flex justify-center items-center">
          <div className="bg-white w-[800px] max-w-full max-h-screen p-8 overflow-y-auto rounded-md mx-auto">
            <header className="flex justify-between items-center">
              <h2 className="text-xl font-semibold m-0 leading-[25px] uppercase text-blue">
                ĐÁNH GIÁ sản phẩm
              </h2>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setIsOpenModal(false)}
              />
            </header>

            <div className="mt-5 mb-0 text-black/80">
              <div className="my-12 px-3">
                <div className="relative text-center flex flex-col items-center">
                  <Image
                    src="/uploads/source/icon/success.png"
                    alt="Thành công"
                    title="Thành công"
                    loading="lazy"
                    width={50}
                    height={50}
                  />
                  <p className="text-sm mt-2">
                    Cám ơn bạn đã gửi đánh giá cho chúng tôi! Đánh giá của bạn
                    sẻ giúp chúng tôi cải thiện chất lượng dịch vụ hơn nữa.
                  </p>
                </div>
              </div>
              <form>
                <div className="text-center mb-8">
                  <div className="inline-block flex items-center justify-center gap-2 text-[40px]">
                    <FaStar className="text-yellow" />
                    <FaStar className="text-yellow" />
                    <FaStar className="text-yellow" />
                    <FaStar className="text-yellow" />
                    <FaStar className="text-yellow" />
                  </div>
                </div>
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
                    <div className="flex items-center gap-2 cursor-pointer relative my-3">
                      <Image
                        src="/uploads/source/icon/camera-icon.png"
                        alt="Camera"
                        title="Camera"
                        loading="lazy"
                        width={35}
                        height={35}
                      />
                      <span className="text-theme font-bold">
                        Gửi ảnh thực tế
                      </span>
                    </div>

                    <div className="mt-3">
                      <div className="flex gap-2">
                        <div className="relative flex">
                          <input
                            type="file"
                            name="attach[]"
                            className="hidden"
                            id="attach_file_1"
                          />
                          <label
                            className="cursor-pointer w-20 h-20 border border-dashed border-[#ccc] flex justify-center items-center"
                            htmlFor="attach_file_1"
                          >
                            <FaPlus />
                          </label>
                        </div>
                      </div>

                      <div className="mt-3 mb-4">
                        <p className="text-center text-xs">
                          Chỉ chấp nhận JPEG, JPG, PNG. Dung lượng không quá 2Mb
                          mỗi hình
                        </p>
                      </div>
                    </div>
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

export default RatingStar;
