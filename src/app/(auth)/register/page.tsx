"use client";

import Button from "@/components/common/button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
type Props = {};

export interface RegisterValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const Register = (props: Props) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const router = useRouter();

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username không được để trống"),
    password: yup
      .string()
      .required("Mật khẩu không được để trống")
      .min(6, "Mật khẩu quá ngắn."),
    confirmPassword: yup
      .string()
      .required("Nhập lại mật khẩu không đúng")
      .oneOf([yup.ref("password")], "Nhập lại mật khẩu không đúng"),
    email: yup
      .string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<RegisterValues> = async (values) => {};

  return (
    <div className="grid grid-cols-2">
      <div className="relative bg-transparent h-screen flex justify-center items-center animate-translateR order-2">
        <div className="relative flex flex-col animate-translateR">
          <h1 className="text-[25px] leading-[30px] mb-3 mt-0 text-[#222] font-bold uppercase">
            Đăng ký!
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-5 w-[400px]"
          >
            {isSuccess && (
              <p className="w-full bg-[#07bc0c]/80 text-center text-sm text-white px-5 py-3 rounded-md">
                Đăng ký thành công
              </p>
            )}

            {[
              { id: "username", label: "Tài khoản", type: "text" },
              { id: "password", label: "Mật khẩu", type: "password" },
              {
                id: "confirmPassword",
                label: "Nhập lại Mật khẩu",
                type: "password",
              },
              { id: "email", label: "Email", type: "email" },
            ].map((item) => (
              <label
                key={item.id}
                htmlFor={item.id}
                className="relative w-full after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-theme after:block after:z-10  hover:after:w-full focus-within:after:w-full after:transition-all after:duration-300"
              >
                {errors[item.id as keyof RegisterValues] && (
                  <div className="text-red ml-2 mt-2 text-xs">
                    {errors[item.id as keyof RegisterValues]?.message}
                  </div>
                )}
                <input
                  required
                  type={item.type}
                  id={item.id}
                  placeholder={item.label}
                  className="relative text-black text-sm border-b border-solid border-[#3f4a50] shadow-none w-full h-11 font-semibold bg-transparent focus:outline-none pl-6 placeholder-black"
                  {...register(item.id as keyof RegisterValues)}
                />
              </label>
            ))}
            <div className="w-full flex justify-end">
              <Button
                className="bg-theme border-theme text-white hover:bg-white hover:text-theme"
                type="submit"
              >
                Đăng ký
              </Button>
            </div>

            <p className="text-xs text-black font-semibold w-full text-start py-5">
              Đã có tài khoản?
              <Link
                href="/login"
                className="uppercase text-theme text-sm font-semibold mx-2 hover:text-themeLight transition-all duration-300"
              >
                đăng nhập
              </Link>
              ngay!
            </p>
          </form>
        </div>
      </div>
      <div className="relative bg-theme h-screen flex justify-center items-center animate-translateL z-20 bg-gradient-to-tr from-black to-theme rounded-e-[100px] overflow-hidden order-1">
        <div className="relative flex flex-col justify-center items-center animate-translateL p-10">
          <h1 className="text-[40px] text-white text-bold text-center mb-5">
            Hello, friend!
          </h1>
          <p className="text-base text-white mb-5 text-center">
            Đăng ký thông tin cá nhân của bạn để sử dụng tất cả các tính năng
            của trang web
          </p>
          <Button
            className="bg-transparent text-white border-white hover:bg-white hover:text-theme text-sm"
            href="/login"
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
