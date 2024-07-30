"use client";
import Button from "@/components/common/button/Button";
import PaymentForm from "@/components/payment/paymentForm/page";
import { useRouter } from "next/navigation";

type Props = {};

const Payment = (props: Props) => {
  const router = useRouter();

  return (
    <>
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
    </>
  );
};

export default Payment;
