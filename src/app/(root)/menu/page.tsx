"use client";
import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";
import { useAppDispatch } from "@/lib/hooks";
import useSWR from "swr";
import { setProducts, setSortBy } from "@/lib/features/products/productsSlice";
import { useSearchParams } from "next/navigation";
import ProductList from "@/components/menu/productList/ProductList";
import Pagination from "@/components/common/pagination/Pagination";
import {
  FaArrowDownShortWide,
  FaArrowUpWideShort,
  FaEye,
  FaHotjar,
} from "react-icons/fa6";
import ProductsFilter from "@/components/menu/productsFilter/ProductsFilter";

type Props = {};
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Menu = (props: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const dispatch = useAppDispatch();
  useSWR(search ? `/menu/api?search=${search}` : `/menu/api`, fetcher, {
    onSuccess: (fetchedData) => {
      dispatch(setProducts(fetchedData));
    },
  });

  const handleSortChange = (value: string) => {
    dispatch(setSortBy(value));
  };
  return (
    <div className="grid grid-cols-4 lg:gap-4">
      <div className="order-1 md:order-2 col-span-4 lg:col-span-3">
        <h1 className="text-[30px] mb-5 text-left text-black font-bold">
          Sản Phẩm
        </h1>

        <div className="mt-3 relative min-h-[200px]">
          <div className="relative overflow-hidden pb-4">
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

          <div className="mx-auto grid grid-cols-2 gap-4">
            <ProductList />
          </div>

          <Pagination totalPage={3} />
        </div>
      </div>

      <div className="order-2 md:order-1 col-span-4 lg:col-span-1">
        <ProductsFilter />
      </div>
    </div>
  );
};

export default Menu;
