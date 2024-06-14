import Button from "@/components/common/button/Button";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <main className="min-h-screen bg-white text-black ">
      <div className="grid grid-cols-2 bg-white">
        <div className="bg-transparent h-screen flex justify-center items-center animate-translateL">
          register page
        </div>
        <div className="bg-green h-screen  flex justify-center items-center animate-translateR rounded-s-[100px]">
          <Button href="/register">register</Button>
        </div>
      </div>
    </main>
  );
};

export default Login;
