import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import productFilterReducer from "../features/products/productFilterSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    productFilters: productFilterReducer,
  },
});
