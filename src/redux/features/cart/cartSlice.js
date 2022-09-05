import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../config/api";

const initialState = {
  cartItems: [],
  // caerTotalQuantity: 0,
  // cartTotalAmount: 0,
};

export const getProduct = createAsyncThunk(
  "cart/getProduct",
  async () => {
    return axios.get(`${BASE_URL}/products`).then((res) => res.data);
  // try {
  // const resp = await axios.get(`${BASE_URL}/products`);
  // return resp.data;
  // } catch (error) {
  // return thunkAPI.rejectWithValue("something went wrong");
  // }
  }
  );

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
        state.cartItems = action.payload
    })
}
})    
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
