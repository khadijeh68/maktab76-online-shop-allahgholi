import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../api/http";
import axois from "axios";
import axios from "axios";


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

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (post) => {
  try {
    const response = await axios.post(`${URL}/products`, post);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
})

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
    [addProduct.pending]: (state) => {
      state.loading = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
    },

    [addProduct.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default productSlice.reducer;
