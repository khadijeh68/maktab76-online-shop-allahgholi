import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config/api";

const initialState = {
  loading: false,
  list: [],
  error: "",
};

export const getCategory = createAsyncThunk("list/getCategory", () => {
  return axios
    .get(`http://localhost:3002/categories`)
    .then((res) => res.headers["x-total-count"]);
});

// export const getList = createAsyncThunk("list/getList", () => {
//   return axios
//     .get(`http://localhost:3002/products`)
//     .then((res) => res.data);
// });

export const getList = createAsyncThunk(
  "list/getList",
  () => {
    return axios.get(`${BASE_URL}/products`).then((res) => res.data);
  }
);

export const getLists = createAsyncThunk("list/getLists", ( id ) => {
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

    builder.addCase(getLists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLists.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    });
    builder.addCase(getLists.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.error.message;
    });
  },
});

export default firstPageSlice.reducer;
