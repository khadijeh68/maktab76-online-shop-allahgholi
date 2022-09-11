import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  list: [],
};

export const getCategory = createAsyncThunk(
  "list/getCategory",
  (categoryId) => {
    return axios
      .get(`http://localhost:3002/products?category=${categoryId}&_limit=1`)
      .then((res) => res.headers["x-total-count"]);
  }
);

export const getList = createAsyncThunk("list/getList", (id) => {
  return axios
    .get(`http://localhost:3002/products?category=${id}&_limit=10`)
    .then((res) => res.data);
});

export const firstPageSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });

    builder.addCase(getList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    });
    builder.addCase(getList.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.error.message;
    });
  },
});

export default firstPageSlice.reducer;
