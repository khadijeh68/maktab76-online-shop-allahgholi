import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("به تعداد کالای مورد نظر اضافه شد", {
          position: "bottom-right",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("کالای مورد نظر به سبد خرید اضافه شد", {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    removeItem(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.cartItems = nextCartItems;
          toast.error("کالای مورد نظر از سبد خرید حذف شد", {
            position: "bottom-right",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
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
});

export const { addToCart, getTotals, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
