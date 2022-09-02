import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axois from "axios";
import { BASE_URL } from "../../../config/api";

const initialState = {
  ordersList: [],
  total: 0,
  loading: false,
  error: "",
};

<<<<<<< HEAD
export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
   ({ delivered, currentPage }) => {
   return axois.get(`${BASE_URL}/orders/?delivered=${delivered}&_page=${currentPage}&_limit=5`)
    .then((response) => {
      return {
        data: response.data,
        total: response.headers["x-total-count"],
      };
    });
  }
);
=======
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async ({delivered,currentPage}) => {
  const res = axois({ url: `${URL}/orders/?delivered=${delivered}&_page=${currentPage}&_limit=5` }).then((response) => {
    return (response.data);
    // res.header('x-total-count')
  });
  return res;
});
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f

export const fetchDelivered = createAsyncThunk(
  "orders/fetchDelivered",
  (id) => {
    return axios
      .patch(`${BASE_URL}/orders/${id}`, { delivered: true })
      .then((res) => res.data);
  }
);
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.loading = true;
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.ordersList = action.payload.data;
      state.total = action.payload.total;
    },
    [fetchOrders.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
    [fetchDelivered.pending]: (state) => {
      state.loadings = true;
    },
    [fetchDelivered.fulfilled]: (state, action) => {
      state.loadings = false;
      state.orders = action.payload;
    },
    [fetchDelivered.rejected]: (state) => {
      state.loadings = false;
      state.error = "wrong...";
    },
  },
});

export default ordersSlice.reducer;
