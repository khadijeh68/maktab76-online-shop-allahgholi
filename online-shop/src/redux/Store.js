import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/product/productSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});
