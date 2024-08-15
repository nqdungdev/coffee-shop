import productApiRequest from "@/utils/requests/product.request";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

type RootState = any; // normally inferred from state

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query<any, any>({
      query: () => {
        return `/menu/api`;

        //   productApiRequest.getProductListFiltered();
      },
    }),
    getCategories: builder.query({
      query: () => `products/categories`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
