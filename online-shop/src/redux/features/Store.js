import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./inventory/inventorySlice";
import ordersSlice from "./orders/ordersSlice";
import productSlice from "./product/productSlice";
import categorySlice from "./category/categorySlice"
import usersSlice from "./user/usersSlice";
<<<<<<< HEAD
import { firstPageSlice } from "./fiestPage/firstPage";
import productDetailSlice from "./productDetail/productDetailSlice";
=======
>>>>>>> origin/develop


export const store = configureStore({
  reducer: {
    products: productSlice,
    orders: ordersSlice,
    inventory: inventorySlice,
    categories: categorySlice,
<<<<<<< HEAD
    users: usersSlice,
    list:firstPageSlice,
    product:productDetailSlice
=======
    users: usersSlice
>>>>>>> origin/develop
  },
});
