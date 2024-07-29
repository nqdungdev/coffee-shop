"use client";
import Button from "@/components/common/button/Button";
import PaymentForm from "@/components/payment/paymentForm/page";
import {
  decreaseQuality,
  increaseQuality,
  removeToCart,
} from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

type Props = {};

const Payment = (props: Props) => {
  const router = useRouter();
  
  return (
    <main className="bg-white text-black pt-[165px]">
      <section className="container wrapper-container">
        <div className="bg-white">
          <header>
            <div className="container">
              <div className="flex items-center h-[70px] min-h-[70px] max-h-[70px] px-3">
                <div className="flex justify-center items-center">
                  <Button onClick={() => router.back()}>QUAY LẠI</Button>
                </div>
              </div>
            </div>
          </header>

          <div className="mt-[50px]">
            <PaymentForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Payment;
