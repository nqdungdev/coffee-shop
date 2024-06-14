import Button from "@/components/common/button/Button";
import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <main className="min-h-screen bg-white text-black ">
      <div className="grid grid-cols-2 bg-white">
        <div className="bg-green h-screen flex justify-center items-center animate-translateL rounded-e-[100px]">
          <Button href="/login">login</Button>
        </div>
        <div className="bg-transparent h-screen  flex justify-center items-center animate-translateR">
          login page
        </div>
      </div>
    </main>
  );
};

export default Register;
