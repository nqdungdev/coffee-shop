import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Button from "../common/button/Button";

type Props = { useMenu: [boolean, Dispatch<SetStateAction<boolean>>] };

const MenuBox = ({ useMenu }: Props) => {
  const [isMenu, setIsMenu] = useMenu;

  return (
    <>
      <nav
        className={`h-screen w-full max-w-[400px] top-0 fixed z-50 overflow-y-auto text-center text-black bg-white transition-all duration-500 lg:hidden ${
          isMenu ? "left-0" : "-left-full"
        }`}
      >
        <div className="mx-0">
          <div className="mb-4 px-4 py-5 bg-theme overflow-hidden flex items-center">
            <h3 className="w-[calc(100%_-_40px)] relative bg-transparent text-white">
              DANH MỤC
            </h3>

            <Button
              className="!w-10 !h-10 !p-2 bg-black border-white border text-white cursor-pointer flex justify-center items-center hover:bg-theme transition-all duration-300"
              type="button"
              onClick={() => setIsMenu(false)}
            >
              <FaTimes />
            </Button>
          </div>
          <ul className="flex flex-col">
            {[
              { label: "Trang chủ", link: "/" },
              { label: "Cà phê", link: "coffee" },
              { label: "Thực đơn", link: "menu" },
              { label: "Về chúng tôi", link: "about-us" },
              { label: "Liên hệ", link: "contact" },
            ].map(
              (el, index) =>
                el && (
                  <li key={index} className="py-3 group">
                    <Link
                      href={el.link}
                      className="group-hover:text-theme transition-all duration-300"
                    >
                      {el.label}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </nav>
      {isMenu && (
        <div
          className={`fixed left-0 top-0 w-full h-full bg-black transition-all duration-300 ${
            isMenu ? "opacity-50" : "opacity-0"
          }`}
        ></div>
      )}
    </>
  );
};

export default MenuBox;
