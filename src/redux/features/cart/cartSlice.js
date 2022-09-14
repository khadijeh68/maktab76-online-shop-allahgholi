import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: localStorage.getItem("cartTotalQuantity")
    ? JSON.parse(localStorage.getItem("cartTotalQuantity"))
    : 0,
  cartTotalAmount: localStorage.getItem("cartTotalAmount")
    ? JSON.parse(localStorage.getItem("cartTotalAmount"))
    : 0,
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
          count: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.success("به تعداد کالای مورد نظر اضافه شد", {
          position: "bottom-right",
        });
      } else {
        let tempProductItem = {
          ...action.payload,
          cartQuantity: 1,
          count: 1,
        };
        state.cartItems.push(tempProductItem);
        toast.success("کالای مورد نظر به سبد خرید اضافه شد", {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrease(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.warning(" تعداد کالای مورد نظر کاهش یافت", {
          position: "bottom-right",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error("کالای مورد نظر از سبد خرید حذف شد", {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, count } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.count += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          count: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = count;
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
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("سبد خرید خالی شد", { position: "bottom-right" });
    },
    clearLocalStorage(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    userOrder(state, action) {
      state.finalCart = action.payload;
      localStorage.setItem("finalCart", JSON.stringify(state.finalCart));
    },
  },
});

export const {
  addToCart,
  getTotals,
  removeItem,
  decrease,
  clearCart,
  increase,
  clearLocalStorage,
  userOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
