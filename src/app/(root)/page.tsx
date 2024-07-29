import About from "@/components/home/about/About";
import ProductCategory from "@/components/home/productCategory/ProductCategory";
import Slider from "@/components/home/slider/Slider";
import Products from "@/components/home/products/Products";
import Image from "next/image";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa6";
import iconMenu from "@/assets/images/icon/icon-menu.png";

export default function Home() {
  return (
    <main className="in-h-screen bg-white text-black">
      <Slider />

      {/* <ProductCategory /> */}

      <Products />

      <About />

      <Link
        href="#header"
        className="w-[50px] h-[50px] rounded-full bg-themeLight flex justify-center items-center fixed bottom-5 right-5 text-lg z-50 text-white"
      >
        <FaChevronUp />
      </Link>

      <Link
        href="menu"
        className="w-[80px] h-[80px] rounded-full flex justify-center items-center fixed bottom-20 right-5 text-lg z-50 text-white"
      >
        <Image
          src={iconMenu}
          alt="Icon menu"
          fill
          sizes="10vw"
          style={{ objectFit: "contain" }}
        />
      </Link>
    </main>
  );
}
