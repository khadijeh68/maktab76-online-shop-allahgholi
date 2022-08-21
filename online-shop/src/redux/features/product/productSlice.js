import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../api/http";
import axois from "axios";

const initialState = {
  productsList: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page) => {
    const res = axois({ url: `${URL}/products/?_page=${page}&_limit=5` }).then(
      (response) => {
        return response.data;
      }
    );
    return res;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },

    [fetchProducts.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default productSlice.reducer;
