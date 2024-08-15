"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { setFilters, setSortBy } from "@/lib/features/products/productsSlice";
import Button from "@/components/common/button/Button";
import productApiRequest from "@/utils/requests/product.request";
import MenuBox from "./MenuBox";
import SortBox from "./SortBox";
import { FaFilter, FaSort } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

type Props = {};
const ProductsFilter = (props: Props) => {
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [isSort, setIsSort] = useState<boolean>(false);
  const router = useRouter();
  const [categories, setCategories] = useState<any>();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch } = useForm();

  useEffect(() => {
    productApiRequest
      .getCategories()
      .then((res) => setCategories(res.payload.data));

    return () => {};
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const selectedCategories: string[] = watch("categories", []);

  useEffect(() => {
    selectedCategories && dispatch(setFilters(selectedCategories));

    return () => {};
  }, [selectedCategories, dispatch]);

  return (
    <>
      <div className="md:hidden p-3 bg-[#f6f6f6] text-txt relative grid grid-cols-2 mb-5 gap-0">
        <div
          className="relative flex gap-2 items-center cursor-pointer after:w-[1px] after:h-4 after:bg-[#b2b2b2] after:absolute after:top-1 after:right-0"
          onClick={() => setIsFilter(!isFilter)}
        >
          <FaFilter /> Lọc sản phẩm
        </div>
        <div
          className="relative flex gap-2 items-center pl-3 cursor-pointer"
          onClick={() => setIsSort(!isSort)}
        >
          <FaSort /> Sắp xếp
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:p-5 md:mb-3 bg-[#eff8f3] grid grid-col-2 gap-x-10"
      >
        <input
          className="hidden md:block p-3 text-center text-black border border-solid border-black w-full bg-white outline-none col-span-2"
          placeholder="Tìm kiếm"
          onChange={(e) => {
            router.push(`?search=${e.target.value.trim()}`);
          }}
        />

        <div
          className={`bg-[#eff8f3] p-5 md:p-0 flex flex-col top-0 md:!left-0 z-[100] md:z-0 w-[300px] h-screen fixed md:relative md:w-full md:h-max transition-all duration-300 lg:col-span-2 ${
            isFilter ? "left-0" : "-left-full"
          }`}
        >
          <div className="flex justify-between items-center border-b border-solid border-[#ddd] pb-5 md:hidden">
            <h3 className="font-bold text-black uppercase">BỘ LỌC</h3>
            <div className="cursor-pointer text-lg">
              <Button
                className="!w-10 !h-10 !p-2 bg-black border-black border text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
                type="button"
                onClick={() => setIsFilter(false)}
              >
                <FaTimes />
              </Button>
            </div>
          </div>

          <MenuBox categories={categories} register={register} />
        </div>

        <div
          className={`bg-[#eff8f3] p-5 md:p-0 flex flex-col top-0 md:!left-0 z-[100] md:z-0 w-[300px] h-screen fixed md:relative md:w-full md:h-max transition-all duration-300 lg:col-span-2 ${
            isSort ? "left-0" : "-left-full"
          }`}
        >
          <div className="flex justify-between items-center border-b border-solid border-[#ddd] pb-5 md:hidden">
            <h3 className="font-bold text-black uppercase">SẮP XẾP</h3>
            <div className="cursor-pointer text-lg">
              <Button
                className="!w-10 !h-10 !p-2 bg-black border-black border text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
                type="button"
                onClick={() => setIsSort(false)}
              >
                <FaTimes />
              </Button>
            </div>
          </div>

          <SortBox register={register} />
        </div>

        {(isFilter || isSort) && (
          <div
            className={`md:hidden fixed left-0 top-0 w-full h-full bg-black transition-all duration-300 z-50 ${
              isFilter || isSort ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => {
              setIsFilter(false);
              setIsSort(false);
            }}
          ></div>
        )}
      </form>
    </>
  );
};

export default ProductsFilter;
