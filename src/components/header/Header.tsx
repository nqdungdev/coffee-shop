import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import PayBox from "./PayBox";
import MenuBox from "./MenuBox";
import UserBox from "./UserBox";
import HeaderCategories from "./HeaderCategories";
import { cookies } from "next/headers";

type Props = {};

const Header = (props: Props) => {
  const categories = [
    { label: "Trang chủ", link: "/" },
    { label: "Thực đơn", link: "menu" },
    { label: "Về chúng tôi", link: "about-us" },
    { label: "Liên hệ", link: "contact" },
  ];
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");

  return (
    <header id="header" className="fixed z-50 lg:absolute top-0 left-0 w-full">
      <div className="p-3 bg-white lg:bg-transparent h-[100px]">
        <div className="container h-full">
          <div className="grid grid-cols-12 h-full">
            <nav className="hidden lg:block col-span-5 text-left px-3">
              <div className="mt-3 flex gap-2">
                {[
                  {
                    label: "Facebook",
                    image: "/uploads/source/icon/group-1.png",
                    link: "https://www.facebook.com/",
                  },
                  {
                    label: "Twitter",
                    image: "/uploads/source/icon/twitter-1.png",
                    link: "https://twitter.com/home",
                  },
                  {
                    label: "Youtube",
                    image: "/uploads/source/icon/youtube-1.png",
                    link: "https://www.youtube.com/",
                  },
                  {
                    label: "Instagram",
                    image: "/uploads/source/icon/instagram-1.png",
                    link: "https://www.instagram.com/",
                  },
                  {
                    label: "Pinterest",
                    image: "/uploads/source/icon/pinterest.png",
                    link: "https://www.pinterest.com/",
                  },
                ].map((el, index) => (
                  <Link key={index} href={el.link} target="_blank">
                    <Image
                      src={el.image}
                      alt={el.label}
                      title={el.label}
                      loading="lazy"
                      width={32}
                      height={32}
                      style={{ objectFit: "contain" }}
                    />
                  </Link>
                ))}
              </div>
            </nav>

            <div className="col-span-5 flex items-center lg:hidden">
              <MenuBox categories={categories} />
            </div>

            <div className="col-span-2 text-center flex items-center justify-center px-3 relative w-full h-full">
              <Link href="/" title="Coffee">
                <Image
                  src="/uploads/source/logo/logo.png"
                  alt="Coffee"
                  title="Coffee"
                  loading="lazy"
                  width={76}
                  height={76}
                />
              </Link>
            </div>

            <div className="col-span-5 text-left justify-end gap-4 px-3 hidden lg:flex">
              {[
                {
                  title: "Hệ thống",
                  content: "Cửa hàng",
                  icon: "/uploads/source/icon/icon-store.png",
                  link: "branch",
                },
                {
                  title: "Hotline hỗ trợ",
                  content: "0123 456 789",
                  icon: "/uploads/source/icon/support.svg",
                  link: "tel:0123 456 789",
                },
              ].map(
                (el, index) =>
                  el && (
                    <div
                      key={index}
                      className="relative flex items-center gap-1"
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xl bg-white/80 w-full h-full"></div>
                      <div className="relative w-8 h-8">
                        <Image
                          src={el.icon}
                          alt={el.title}
                          title={el.title}
                          loading="lazy"
                          width={32}
                          height={32}
                        />
                      </div>

                      <div className="relative">
                        <p className="text-theme mb-1 text-base leading-4">
                          {el.title}
                        </p>
                        <h3 className="text-xl leading-5">
                          <Link
                            className="text-headerItem text-xl font-bold"
                            href={el.link}
                          >
                            {el.content}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  )
              )}
            </div>

            <div className="lg:hidden col-span-5 flex justify-end items-center gap-3">
              <SearchBox />

              <PayBox />

              <UserBox accessToken={accessToken?.value ?? ""} />
            </div>
          </div>
        </div>
      </div>

      <nav className="container lg:justify-between lg:items-center hidden lg:flex">
        <HeaderCategories categories={categories} />

        <div className="flex items-center gap-5">
          <SearchBox />

          <PayBox />

          <UserBox accessToken={accessToken?.value ?? ""} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
