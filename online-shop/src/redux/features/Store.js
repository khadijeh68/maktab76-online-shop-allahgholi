import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./inventory/inventorySlice";
import ordersSlice from "./orders/ordersSlice";
import productSlice from "./product/productSlice";
import categorySlice from "./category/categorySlice"
import usersSlice from "./user/usersSlice";


export const store = configureStore({
  reducer: {
    products: productSlice,
    orders: ordersSlice,
    inventory: inventorySlice,
    categories: categorySlice,
    users: usersSlice
  },
});
