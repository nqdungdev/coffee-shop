import ProductList from "@/app/(root)/menu/_components/productList/ProductList";
import ProductsFilter from "@/app/(root)/menu/_components/productsFilter/ProductsFilter";
import ProductNav from "@/app/(root)/menu/_components/productNav/ProductNav";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="grid grid-cols-4 lg:gap-4">
      <div className="order-2 col-span-4 lg:col-span-3">
        <h1 className="text-[30px] mb-5 text-left text-black font-bold">
          Sản Phẩm
        </h1>

        <div className="mt-3 relative min-h-[200px]">
          <ProductNav />

          <ProductList />
        </div>
      </div>

      <div className="order-1 col-span-4 lg:col-span-1">
        <ProductsFilter />
      </div>
    </div>
  );
};

export default Menu;
