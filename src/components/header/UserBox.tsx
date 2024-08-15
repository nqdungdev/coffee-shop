"use client";
import ButtonAnchor from "../common/button/ButtonAnchor";
import Image from "next/image";
import Button from "../common/button/Button";
import { FaUser } from "react-icons/fa";
import authApiRequest from "@/utils/requests/auth.request";
import { handleErrorApi } from "@/utils/errors";
import { useRouter } from "next/navigation";

type Props = { accessToken: string };

const UserBox = ({ accessToken }: Props) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authApiRequest.logoutClient();
      router.push("/login");
    } catch (error) {
      handleErrorApi({
        error,
      });
    }
  };
  return (
    <>
      {accessToken ? (
        <div className="relative group">
          <ButtonAnchor
            className="!w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full relative"
            href={"/profile"}
          >
            <Image
              src="/uploads/source/logo/logo.png"
              alt="Coffee"
              title="Coffee"
              loading="lazy"
              width={40}
              height={40}
            />
          </ButtonAnchor>
          <div className="absolute top-[calc(100%_+_8px)] right-0 w-[200px] h-max bg-white border border-solid border-theme after:absolute after:bottom-full after:right-2 after:w-0 after:h-0 after:border-[10px] after:border-transparent after:border-solid after:border-b-theme transition-all duration-300 opacity-0 collapse group-hover:visible group-hover:opacity-100 rounded-md">
            <ul className="flex flex-col text-txt items-center">
              {[
                { label: "Tài khoản của tôi", link: "/profile" },
                { label: "Đơn mua", link: "/profile" },
                { label: "Đăng xuất", link: "/logout" },
              ].map((el, index) => (
                <li key={index} className="py-3 group/item">
                  <Button
                    className="group-hover/item:!text-theme transition-all duration-300 !capitalize !bg-transparent !border-0 !text-base !font-normal !w-max !text-txt hover:!bg-transparent !p-0"
                    onClick={() => {
                      if (el.link === "/logout") return handleLogout();
                      router.push(`${el.link}`);
                    }}
                  >
                    {el.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <ButtonAnchor
          className="!w-10 !h-10 !p-2 bg-theme border-theme hover:text-theme rounded-full relative"
          href={"/login"}
        >
          <FaUser />
        </ButtonAnchor>
      )}
    </>
  );
};

export default UserBox;
