export type Product = {
  _id: string;
  category_id: (string | null)[];
  name: string;
  old_price: string;
  new_price: string;
  image: string;
  size: "M" | "L" | "XL";
  best_seller: boolean;
  description: string;
};

export type ProductResType = any;

export type ProductDetailResType = {
  msg: string;
  data: Product;
};
export type CategoryResType = any;
