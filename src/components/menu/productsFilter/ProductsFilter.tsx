"use client";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { FaWindowClose } from "react-icons/fa";
import {
  FaArrowDownShortWide,
  FaArrowUpWideShort,
  FaEye,
  FaHotjar,
  FaMinus,
  FaPlus,
} from "react-icons/fa6";
import MenuCollapse from "../common/MenuCollapse";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setFilters, setSortBy } from "@/lib/features/products/productsSlice";
import { current } from "@reduxjs/toolkit";
type Props = {};
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const ProductsFilter = (props: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch } = useForm();
  const { data: categories, mutate } = useSWR<any>(
    "https://diatycafe.vercel.app/api/category",
    fetcher
  );

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortBy(event.target.value));
  };

  const selectedCategories: string[] = watch("categories", []);

  const flag = useRef(false);

  useEffect(() => {
    selectedCategories && dispatch(setFilters(selectedCategories));

    return () => {};
  }, [selectedCategories, dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-[eff8f3] p-5 flex flex-col bg-[#eff8f3] fixed top-0 left-0 z-40 w-[300px] h-screen md:relative md:w-full md:h-max">
        <div className="flex justify-between items-center border-b border-solid border-[#ddd] pb-5 md:hidden">
          <h3 className="pl-3 font-bold text-black uppercase">BỘ LỌC</h3>
          <div className="cursor-pointer text-lg">
            <FaWindowClose />
          </div>
        </div>
        <input
          className="p-3 text-center text-black border border-solid border-black w-full bg-white outline-none"
          placeholder="Tìm kiếm"
          // onChange={(e) => setQuery(e.target.value)}
          onChange={(e) => {
            if (e.target.value.trim() !== "") {
              router.push(`?search=${e.target.value}`);
            }
          }}
        />

        <div className="mt-4 order-1">
          <MenuCollapse title="Danh mục thực đơn">
            <ul className="overflow-y-auto flex gap-1 flex-col mb-1">
              {categories?.data?.map(
                (el: any) =>
                  el &&
                  !el.parent_id && (
                    <li className="w-full" key={el._id}>
                      <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                        <input
                          type="checkbox"
                          value={el._id}
                          {...register("categories")}
                          // onChange={handleFilterChange}
                        />
                        {el.name_vie}
                      </label>
                      <ul className="pl-5">
                        {categories?.data?.map(
                          (elChild: any) =>
                            elChild.parent_id &&
                            elChild.parent_id === el._id && (
                              <li key={elChild._id} className="w-full">
                                <label className="py-1 px-3 relative flex items-center gap-2 text-[#334862] text-xs leading-[17px] cursor-pointer">
                                  <input
                                    type="checkbox"
                                    value={elChild._id}
                                    {...register("categories")}
                                    // onChange={handleFilterChange}
                                  />
                                  {elChild.name_vie}
                                </label>
                              </li>
                            )
                        )}
                      </ul>
                    </li>
                  )
              )}
            </ul>
          </MenuCollapse>
        </div>
      </div>

      <div className="bg-[eff8f3] p-5 flex flex-col bg-[#eff8f3] fixed top-0 left-0 z-50 w-[300px] h-screen md:relative md:w-full md:h-max">
        <div className="flex justify-between items-center border-b border-solid border-[#ddd] pb-5 md:hidden">
          <h3 className="pl-3 font-bold text-black uppercase">SẮP XẾP</h3>
          <div className="cursor-pointer text-lg">
            <FaWindowClose />
          </div>
        </div>

        <MenuCollapse title="Sắp xếp theo">
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
        </MenuCollapse>
      </div>
    </form>
  );
};

export default ProductsFilter;
