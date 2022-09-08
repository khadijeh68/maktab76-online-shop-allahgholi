import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../config/api";

const initialState = {
  cartItems: [],
  quantity: 4,
  total: 0,
  isLoading: true,
  // caerTotalQuantity: 0,
  // cartTotalAmount: 0,
};

export const getProduct = createAsyncThunk("cart/getProduct", async () => {
  return axios.get(`${BASE_URL}/products`).then((res) => res.data);
  // try {
  // const resp = await axios.get(`${BASE_URL}/products`);
  // return resp.data;
  // } catch (error) {
  // return thunkAPI.rejectWithValue("something went wrong");
  // }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // clearCart: (state) => {
    //   state.cartItems = [];
    // },
    // removeItem: (state, action) => {
    //   const itemId = action.payload;
    //   console.log(itemId);
    //   state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    // },
    // increase: (state, action) => {
    //   const items = state.cartItems.find((item) => item.id === action.payload);
    //   console.log(items);
    //   items.quantity = items.quantity + 1;
    // },
    // decrease: (state, action) => {
    //   const items = state.cartItems.find((item) => item.id === action.payload.id);
    //   items.quantity = items.quantity - 1;
    // },
    // calculateTotals: (state) => {
    //   let quantity = 0;
    //   let total = 0;
    //   state.cartItems.forEach((item) => {
    //     quantity += item.quantity;
    //     total += item.quantity * item.price;
    //   });
    //   state.quantity = quantity;
    //   state.total = total;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
//   reducers: {
//     addToCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (itemIndex >= 0) {
//         state.cartItems[itemIndex].cartQuantity += 1;
//         toast.info(`تعداد کالای ${state.cartItems[itemIndex].name} افزایش یافت`, {
//           position: "bottom-left",
//         });
//       } else {
//         const tempProduct = { ...action.payload, cartQuantity: 1 };
//         state.cartItems.push(tempProduct);
//         toast.success(`به سبد خرید اضافه شد${action.payload.name}`, {
//           position: "bottom-left",
//         });
//       }
//       localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

//     },
//   },
// });
// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;
