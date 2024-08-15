"use client";

import Button from "@/components/common/button/Button";
import { addToCart } from "@/lib/features/products/productsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";

type Props = { product: any };

const Payment = ({ product }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="w-[calc(100%_-_110px] flex gap-2">
      <Button
        className="bg-red border-red text-white hover:bg-white hover:text-red text-center capitalize"
        onClick={() => handleAddToCart(product)}
      >
        <>
          <p className="text-xs leading-4">Thêm vào giỏ</p>
          <span className="text-[9px] font-normal leading-4">
            và mua sản phẩm khác
          </span>
        </>
      </Button>

      <Button
        className="bg-green border-green text-white hover:bg-white hover:text-green text-center capitalize"
        onClick={() => {
          handleAddToCart(product);
          router.push("/payment");
        }}
      >
        <>
          <p className="text-xs leading-4">Mua Ngay</p>
          <span className="text-[9px] font-normal leading-4">
            Thanh toán ngay
          </span>
        </>
      </Button>
    </div>
  );
};

export default Payment;
