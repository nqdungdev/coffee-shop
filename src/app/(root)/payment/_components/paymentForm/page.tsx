"use client";
import Button from "@/components/common/button/Button";
import {
  decreaseQuality,
  increaseQuality,
  removeToCart,
} from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaMinus, FaMoneyCheckDollar, FaPlus } from "react-icons/fa6";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {};

const PaymentForm = (props: Props) => {
  const [active, setActive] = useState<number>(0);
  const [cities, setCities] = useState<any>([]);
  const [districts, setDistricts] = useState<any>([]);
  const [wards, setWards] = useState<any>([]);
  const citiesRef = useRef<HTMLSelectElement>(null);
  const districtsRef = useRef<HTMLSelectElement>(null);
  const wardsRef = useRef<HTMLSelectElement>(null);
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.productsReducer);

  const handleDelete = (id: string) => {
    dispatch(removeToCart(id));
  };

  const handleIncrease = (id: string) => {
    dispatch(increaseQuality(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuality(id));
  };

  const { data } = useSWR(
    `https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json`,
    fetcher,
    { onSuccess: (fetchData) => setCities(fetchData) }
  );

  const handleCityChange = () => {
    const cityId =
      citiesRef.current && citiesRef.current.selectedOptions[0].dataset.id;
    const selectedCity = cities.find((city: any) => city.Id === cityId);
    setDistricts(selectedCity ? selectedCity.Districts : []);
    setWards([]);
  };

  const handleDistrictChange = () => {
    const districtId =
      districtsRef.current &&
      districtsRef.current.selectedOptions[0].dataset.id;
    const selectedCity = cities.find(
      (city: any) =>
        citiesRef.current &&
        city.Id === citiesRef.current.selectedOptions[0].dataset.id
    );
    const selectedDistrict = selectedCity.Districts.find(
      (district: any) => district.Id === districtId
    );
    setWards(selectedDistrict ? selectedDistrict.Wards : []);
  };

  return (
    <form>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-7 border-r border-solid border-[#d9d9d9] relative p-2">
          <div className="p-3 bg-white">
            <h2 className="uppercase tracking-tight font-bold text-xl mb-5">
              Thông Tin vận chuyển
            </h2>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-6 flex flex-col">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium pb-1 tracking-tight"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                  placeholder="Điền họ tên của bạn."
                />
              </div>
              <div className="col-span-6 flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium pb-1 tracking-tight"
                >
                  Số điện thoại
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                  placeholder="Điện thoại liên lạc với bạn."
                />
              </div>
              <div className="col-span-12 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium pb-1 tracking-tight"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                  placeholder="Địa chỉ email của bạn."
                />
              </div>
              <div className="col-span-12 flex flex-col">
                <label
                  htmlFor="address"
                  className="text-sm font-medium pb-1 tracking-tight"
                >
                  Địa chỉ
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                  placeholder="Địa chỉ của bạn."
                />
              </div>
              <div className="col-span-4 flex flex-col">
                <label
                  htmlFor="city"
                  className="text-sm font-medium pb-1 tracking-tight"
                >
                  Tỉnh / Thành Phố
                </label>
                <select
                  name="city"
                  className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                  id="city"
                  ref={citiesRef}
                  onChange={handleCityChange}
                >
                  <option value="" selected>
                    Chọn tỉnh thành
                  </option>
                  {cities.map((city: any) => (
                    <option key={city.Id} value={city.Name} data-id={city.Id}>
                      {city.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-4 flex flex-col">
                <label
                  htmlFor="districts"
                  className="text-sm font-medium pb-1 tracking-tight"
                >
                  Quận Huyện
                </label>
                <select
                  name="districts"
                  className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                  id="districts"
                  ref={districtsRef}
                  onChange={handleDistrictChange}
                >
                  <option value="" selected>
                    Chọn quận huyện
                  </option>
                  {districts.map((district: any) => (
                    <option
                      key={district.Id}
                      value={district.Name}
                      data-id={district.Id}
                    >
                      {district.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-4 flex flex-col">
                <label
                  htmlFor="ward"
                  className="text-sm font-medium pb-1 tracking-tight"
                >
                  Phường xã
                </label>
                <select
                  name="ward"
                  className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                  id="ward"
                  ref={wardsRef}
                >
                  <option value="" selected>
                    Chọn phường xã
                  </option>
                  {wards.map((ward: any) => (
                    <option key={ward.Id} value={ward.Name} data-id={ward.Id}>
                      {ward.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-12 flex flex-col">
                <label
                  htmlFor="order_note"
                  className="text-sm font-medium pb-1 tracking-tight"
                >
                  Ghi chú
                </label>

                <textarea
                  name="order_note"
                  cols={40}
                  rows={4}
                  id="order_note"
                  className="h-11 leading-10 mb-4 bg-white rounded-lg border border-solid border-[#d9d9d9] text-sm px-3 font-medium text-[#231f20] outline-none shadow-none"
                  defaultValue={""}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="p-3 bg-white">
            <h2 className="uppercase tracking-tight font-bold text-xl mb-5">
              HÌNH THỨC THANH TOÁN
            </h2>

            <div className="py-2">
              {[
                {
                  title: "Trả tiền khi nhận hàng",
                  description: "Thanh toán khi nhận hàng",
                  icon: <FaMoneyCheckDollar className="w-full h-full" />,
                },
                {
                  title: "Chuyển khoản ngân hàng",
                  description:
                    "  Thanh toán qua hình thức chuyển khoản ngân hàng",
                  icon: <FaMoneyCheckDollar className="w-full h-full" />,
                },
              ].map((el, index) => (
                <label
                  key={index}
                  className={`border border-solid rounded-2xl flex items-center gap-8 py-3 pr-3 pl-16 mb-3 cursor-pointer transition-al duration-300 w-[calc(100%_-_50px) ${
                    active === index
                      ? "border-them opacity-100 grayscale-0"
                      : "border-transparent opacity-40 grayscale"
                  }`}
                  onClick={() => setActive(index)}
                >
                  <div className="relative w-10 h-10 before:border-4 before:border-solid before:border-theme before:absolute before:w-4 before:h-4 before:rounded-full before:top-1/2 before:right-[calc(100%_+_20px)] before:-translate-y-1/2">
                    {el.icon}
                  </div>
                  <div className="w-[calc(100%_-_100px)">
                    <div className="text-sm text-black">{el.title}</div>
                    <div className="text-xs text-[#787878] font-normal">
                      {el.description}
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="_payment"
                    id="_payment"
                    defaultChecked
                    className="hidden"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-5 relative p-2">
          <div className="pb-5">
            <h2 className="uppercase tracking-tight font-bold text-xl mb-5">
              Giỏ hàng
            </h2>

            <div>
              {cart?.map(
                (product: any, index) =>
                  product && (
                    <div key={index}>
                      <div className="mb-8 flex p-0 relative">
                        <div className="relative w-[126px] h-[126px] rounded-md overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            title={product.name}
                            loading="lazy"
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="10vw"
                          />
                        </div>
                        <div className="ml-6 w-[calc(100%_-_126px)]">
                          <div className="flex h-full flex-col">
                            <h3 className="font-bold text-sm leading-4 w-max-[85%] block m-0 text-black text-left">
                              {product.name}
                            </h3>

                            <div className="w-full mt-auto">
                              <div className="flex items-center justify-between text-right">
                                <div className="bg-white border border-solid border-black rounded-[8px] inline-flex items-center h-8 w-[77px] justify-between p-1">
                                  <div className="flex cursor-pointer text-base leading-5 transition-all duration-300 p-0 border-0 bg-white">
                                    <FaMinus
                                      className="text-black"
                                      onClick={() =>
                                        handleDecrease(product._id)
                                      }
                                    />
                                  </div>
                                  <div className="border-0 m-0 h-full w-8 text-center font-sm text-black">
                                    {product.quality}
                                  </div>
                                  <div className="flex cursor-pointer text-base leading-5 transition-all duration-300 p-0 border-0 bg-white">
                                    <FaPlus
                                      className="text-black"
                                      onClick={() =>
                                        handleIncrease(product._id)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="pt-1">
                                  <span className="leading-8 text-black">
                                    {(+product.new_price as number) *
                                      product.quality}
                                  </span>
                                  đ
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-10 h-10 absolute cursor-pointer top-0 right-0 transition-all duration-300 flex justify-end items-top">
                          <FaTrashAlt
                            className="text-black"
                            onClick={() => handleDelete(product._id)}
                          />
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="min-h-[600px]">
            <div className="my-5 py-5 border-y border-solid border-[#d9d9d9]">
              <table className="p-3 w-full">
                <tbody>
                  <tr className="text-sm leading-5 text-[#23f20] font-medium">
                    <th className="text-start">Tạm tính</th>
                    <td className="text-end">
                      <span className="leading-8 text-black">
                        {cart.reduce(
                          (total, el) =>
                            total + (+el.new_price as number) * el.quality,
                          0
                        )}
                      </span>
                      đ
                    </td>
                  </tr>
                  <tr className="text-sm leading-5 text-[#23f20] font-medium">
                    <th className="text-start">Tổng</th>
                    <td className="text-end">
                      <strong className="text-lg text-red">
                        {cart.reduce(
                          (total, el) =>
                            total + (+el.new_price as number) * el.quality,
                          0
                        )}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Button
              type="submit"
              className="bg-red text-white border-red hover:bg-white hover:text-red"
            >
              ĐẶT HÀNG
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
