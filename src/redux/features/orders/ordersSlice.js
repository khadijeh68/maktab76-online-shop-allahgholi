import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../../api/http";
import { BASE_URL } from "../../../config/api";

const initialState = {
  ordersList: [],
  total: 0,
  loading: false,
  error: "",
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  ({ delivered, currentPage }) => {
    return instance
      .get(
        `${BASE_URL}/orders/?delivered=${delivered}&_page=${currentPage}&_limit=6`
      )
      .then((response) => {
        return {
          data: response.data,
          total: Number(response.headers["x-total-count"]),
        };
      });
  }
);

// export const createOrder = createAsyncThunk(
//   "orders/createOrder",
//   (newOrder) => {
//     return instance.post(`${BASE_URL}/orders?delivered=false`, newOrder).then((response) => {
//       return {
//         data: response.data,
//       };
//     });
//   }
// );


export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (newOrder) => {
    const res = await axios.post(`http://localhost:3002/orders`, newOrder);
    return res.data;
  }
);

export const fetchDelivered = createAsyncThunk(
  "orders/fetchDelivered",
  async (id) => {
    return axios
      .patch(`${BASE_URL}/orders/${id}`, { delivered: "true" })
      .then((res) => res.data);
  }
);

export const fetchNotDelivered = createAsyncThunk(
  "orders/fetchNotDelivered",
  () => {
    return axios
      .patch(`${BASE_URL}/orders?delivered=false`)
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
      state.ordersList = action.payload;
    },
    [fetchDelivered.rejected]: (state) => {
      state.loadings = false;
      state.error = "wrong...";
    },
    [fetchNotDelivered.pending]: (state) => {
      state.loadings = true;
    },
    [fetchNotDelivered.fulfilled]: (state, action) => {
      state.loadings = false;
      state.ordersList = action.payload;
    },
    [fetchNotDelivered.rejected]: (state) => {
      state.loadings = false;
      state.error = "wrong...";
    },
     [createOrder.pending]: (state) => {
      state.loading = true;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.ordersList = action.payload;
      localStorage.clear();
    },
    [createOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default ordersSlice.reducer;
