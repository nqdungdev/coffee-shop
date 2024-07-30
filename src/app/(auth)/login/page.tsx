"use client";

import Button from "@/components/common/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
// import { useAppDispatch } from "@/lib/hooks";
// import { setUser } from "@/lib/features/users/usersSlice";

type Props = {};

export interface LoginValues {
  email: string;
  password: string;
}

const Login = (props: Props) => {
  const router = useRouter();
  // const dispatch = useAppDispatch();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
    password: yup
      .string()
      .required("Mật khẩu không được để trống")
      .min(6, "Mật khẩu quá ngắn"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginValues> = async (values) => {
    try {
      const res = await fetch("https://diatycafe.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const result = await res.json();
      console.log(result);
      if (res.ok) {
        // Cookies.set("token", result.token);
        await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionToken: result.token,
            expiresAt: "10h",
          }),
        });
        // dispatch(setUser(result.info));
        localStorage.setItem("token", JSON.stringify(result.token));
        localStorage.setItem("user", JSON.stringify(result.info));
        toast.success(result.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // mutate(); // Re-fetch the data
        // setTimeout(() => router.push("/"), 5000);
      } else {
        toast.error(result.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {}
  };

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1 relative bg-transparent h-screen flex justify-center items-center animate-translateL">
        <div className="relative flex flex-col animate-translateL">
          <h1 className="text-[25px] leading-[30px] mb-3 mt-0 text-[#222] font-bold uppercase">
            Đăng nhập
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-5 w-[300px]"
          >
            {[
              { id: "email", label: "Email", type: "email" },
              { id: "password", label: "Mật khẩu", type: "password" },
            ].map((item) => (
              <label
                key={item.id}
                htmlFor={item.id}
                className="relative w-full after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-theme after:block after:z-10  hover:after:w-full focus-within:after:w-full after:transition-all after:duration-300"
              >
                {errors[item.id as keyof LoginValues] && (
                  <div className="text-red ml-2 mt-2 text-xs">
                    {errors[item.id as keyof LoginValues]?.message}
                  </div>
                )}
                <input
                  required
                  type={item.type}
                  id={item.id}
                  placeholder={item.label}
                  className="relative text-black text-sm border-b border-solid border-[#3f4a50] shadow-none w-full h-11 font-semibold bg-transparent focus:outline-none pl-6 placeholder-black"
                  {...register(item.id as keyof LoginValues)}
                />
              </label>
            ))}

            <div className="w-full flex justify-end">
              <Link
                href="/forgot-password"
                className="text-theme text-sm font-semibold ml-2 hover:text-themeLight transition-all duration-300"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <div className="w-full flex justify-end">
              <Button
                className="bg-theme border-theme text-white hover:bg-white hover:text-theme"
                type="submit"
              >
                Đăng nhập!
              </Button>
            </div>

            <p className="text-sm text-black font-semibold w-full text-start py-5">
              Chưa có tài khoản?
              <Link
                href="/register"
                className="uppercase text-theme text-sm font-semibold ml-2 hover:text-themeLight transition-all duration-300"
              >
                đăng ký
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden md:flex relative bg-theme h-screen justify-center items-center animate-translateR z-20 bg-gradient-to-tr from-black to-theme rounded-s-[100px] overflow-hidden">
        <div className="relative flex flex-col justify-center items-center animate-translateR p-10">
          <h1 className="text-[40px] text-white text-bold text-center mb-5">
            Welcome back!
          </h1>
          <p className="text-base text-white mb-5 text-center">
            Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng của
            trang web
          </p>
          <Button
            className="bg-transparent text-white border-white hover:bg-white hover:text-theme text-sm"
            onClick={() => router.push("/register")}
          >
            Đăng ký
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
