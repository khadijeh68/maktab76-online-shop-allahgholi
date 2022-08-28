import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../api/http";
import axois from "axios";


const initialState = {
  ordersList: [],
  total:[],
  loading: false,
  error: "",
};

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async ({delivered,currentPage}) => {
  const res = axois({ url: `${URL}/orders/?delivered=${delivered}&_page=${currentPage}&_limit=5` }).then((response) => {    
    return(response.data)
  
  });
  return res;
});

export const headerOrder = createAsyncThunk(
  "orders/headerOrder",
  async () => {
    const res = axois({ url: `${URL}/orders/?_page=1&_limit=1` }).then(
      (response) => {
        return response.headers['x-total-count'];
      }
    );
    return res;
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
      state.ordersList = action.payload;
    },

    [fetchOrders.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
    [headerOrder.fulfilled]: (state, action) => {
      state.loading = false;
      state.total = action.payload;
    },
  },
});

export default ordersSlice.reducer;
