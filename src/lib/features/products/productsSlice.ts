import { createSlice, current } from "@reduxjs/toolkit";

const sortData = (data: any, sortBy: string) => {
  return data.sort((a: any, b: any) => {
    switch (sortBy) {
      case "asc":
        return a.new_price - b.new_price;
      case "desc":
        return b.new_price - a.new_price;
      case "new":
        return 0;
      case "best-seller":
        return 0;
      default:
        return 0;
    }
  });
};

const filterData = (products: any, filters: string[]) => {
  if (filters.length === 0) return products;
  return products?.filter((product: any) =>
    product.category_id.some((category: string) => filters.includes(category))
  );
};

const searchData = (products: any, keyword: string) => {
  console.log(keyword);
  if (keyword === "") return [];
  return products.filter((item: any) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
};

interface IState {
  products: any[];
  sortBy: string;
  filters: any[];
  filteredProducts: any[];
  searchedProducts: any[];
  cart: any[];
}

const initialState: IState = {
  products: [],
  sortBy: "",
  filters: [],
  filteredProducts: [],
  searchedProducts: [],
  cart: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.filteredProducts = sortData(state.filteredProducts, action.payload);
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
      state.filteredProducts = filterData(
        current(state.products),
        state.filters
      );
    },
    setSearches: (state, action) => {
      state.searchedProducts = searchData(
        current(state.products),
        action.payload
      );
    },
    addToCart: (state, action) => {
      state.cart.length !== 0 &&
      state.cart.find((product: any) => product._id === action.payload._id)
        ? (state.cart = state.cart.map((product: any) =>
            product._id === action.payload._id
              ? { ...product, quality: product.quality + 1 }
              : product
          ))
        : (state.cart = [...state.cart, { ...action.payload, quality: 1 }]);
    },
    removeToCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload
      );
    },
    increaseQuality: (state, action) => {
      state.cart = state.cart.map((product: any) =>
        product._id === action.payload
          ? { ...product, quality: product.quality + 1 }
          : product
      );
    },
    decreaseQuality: (state, action) => {
      state.cart = state.cart.map((product: any) =>
        product._id === action.payload && product.quality > 0
          ? { ...product, quality: product.quality - 1 }
          : product
      );
    },
  },
});

export const {
  setProducts,
  setSortBy,
  setFilters,
  setSearches,
  addToCart,
  removeToCart,
  increaseQuality,
  decreaseQuality,
} = productsSlice.actions;

export default productsSlice.reducer;
