import Link from "next/link";
import Payment from "./Payment";
import { Product } from "@/schema/product.schema";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

type Props = {
  product?: Product | null;
};

const Information = ({ product }: Props) => {
  return (
    <>
      <div className="col-span-9 md:col-span-3 flex flex-col justify-between gap-2">
        <div className="relative w-full h-full rounded-md overflow-hidden">
          <Link href="#">
            {product && (
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                  loading="lazy"
                  fill
                  sizes="40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </Link>
        </div>

        <nav className="my-3">
          <div className="mt-3 flex gap-2">
            {[
              {
                label: "Facebook",
                image: "/uploads/source/icon/group-1.png",
                link: "#",
              },
              {
                label: "Twitter",
                image: "/uploads/source/icon/twitter-1.png",
                link: "#",
              },
              {
                label: "Google mail",
                image: "/uploads/source/icon/Google-Icon.png",
                link: "#",
              },
              {
                label: "Zalo",
                image: "/uploads/source/icon/Zalo-Icon.png",
                link: "#",
              },
              {
                label: "QR",
                image: "/uploads/source/icon/qr-code.png",
                link: "#",
              },
            ].map(
              (el, index) =>
                el && (
                  <Link
                    key={index}
                    href="{el.link}"
                    className="inline-block bg-white w-10 h-10 leading-[30px] text-center relative overflow-hidden rounded-md shadow-[0_5px_15px_-5px_rgba(0,0,0,.1)] p-1 border border-solid border-[#f0f1f4] transition-all duration-300 group before:absolute before:top-[90%] before:-left-[120%] before:w-[150%] before:h-[150%] before:rotate-[45deg] before:bg-[#dc4c38] hover:before:-top-[25%] hover:before:-left-[25%] before:transition-all before:duration-300"
                  >
                    <figure className="w-8 h-8 relative">
                      <Image
                        src={el.image}
                        alt={el.label}
                        title={el.label}
                        loading="lazy"
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="10vw"
                        className="scale-[0.8] group-hover:scale-[1] group-hover:saturate-[3] transition-all duration-300"
                      />
                    </figure>
                  </Link>
                )
            )}
          </div>
        </nav>
      </div>

      {product && (
        <div className="col-span-9 md:col-span-6">
          <h1 className="text-[25px] leading-[30px] mb-3 mt-0 text-[#222] font-bold">
            {product.name}
          </h1>
          <div className="py-3 mt-1 mb-4">
            <p>{product.description}</p>
          </div>
          <div className="relative block text-xs mb-3 text-yellow">
            <div className="flex items-center gap-2">
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
              {(+product.new_price / 1000).toFixed(3)}đ
            </span>

            {product.new_price !== product.old_price && (
              <del className="text-base font-normal text-[#999] leading-[25px]">
                {(+product.old_price / 1000).toFixed(3)}đ
              </del>
            )}
            {product.old_price !== product.old_price && (
              <div className="text-lg font-bold text-red leading-[25px]">
                <span
                  title={`-${Math.ceil(
                    ((+product.old_price - +product.new_price) /
                      +product.old_price) *
                      100
                  )}%`}
                >
                  -
                  {Math.ceil(
                    ((+product.old_price - +product.new_price) /
                      +product.old_price) *
                      100
                  )}
                  %
                </span>
              </div>
            )}
          </div>

          <div className="overflow-hidden mt-1 py-3 flex flex-wrap gap-2">
            {/* <div className="w-[97px] relative flex justify-between">
              <div className="border border-solid border-[#f7f8fa] bg-[#f7f8fa] rounded-md h-[50px] p-3 relative flex items-center justify-between">
                <FaMinus
                  className="cursor-pointer w-3 h-3 relative text-[#086fcf]"
                  onClick={() => value > 1 && setValue((value) => (value -= 1))}
                />
                <input
                  type="number"
                  name="quantity"
                  defaultValue={1}
                  min={1}
                  className="border-0 block text-[#16161a] text-sm h-[30px] w-[50px] leading-5 bg-[#f7f8fa] text-center pl-3 outline-none"
                />
                <FaPlus
                  className="cursor-pointer w-3 h-3 relative text-[#086fcf]"
                  onClick={() => setValue((value) => (value += 1))}
                />
              </div>
            </div> */}

            <Payment product={product} />
          </div>
        </div>
      )}
    </>
  );
};

export default Information;
