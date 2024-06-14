import React from "react";
import Products from "@/app/(root)/menu/components/products/Products";
import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";

type Props = {};

const Menu = (props: Props) => {
  return (
    <main className="bg-white text-black pt-[165px]">
      <Breadcrumbs />

      <Products />
    </main>
  );
};

export default Menu;
