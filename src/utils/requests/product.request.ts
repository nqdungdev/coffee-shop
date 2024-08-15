import {
  ProductResType,
  CategoryResType,
  ProductDetailResType,
} from "@/schema/product.schema";
import http from "@/utils/http";

const productApiRequest = {
  getProductList: () => http.get("/menu"),
  getProductListFiltered: (searchParams?: string) =>
    http.get<any>(`/menu/api${searchParams ?? searchParams}`, {
      baseUrl: "",
    }),
  getProductDetail: (id: string) =>
    http.get<ProductDetailResType>(`/menu/${id}`, {
      cache: "no-store",
    }),
  getProductListRelated: () =>
    http.get<any>(`/menu/api/related`, {
      baseUrl: "",
    }),
  getCategories: () => http.get<CategoryResType>(`/category`),
};

export default productApiRequest;
