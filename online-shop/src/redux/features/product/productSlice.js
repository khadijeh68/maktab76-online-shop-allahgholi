import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../api/http";
import axois from "axios";
import axios from "axios";

const initialState = {
  productsList: [],
  total: [],
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

export const header = createAsyncThunk(
  "products/header",
  async () => {
    const res = axois({ url: `${URL}/products/?_page=1&_limit=1` }).then(
      (response) => {
        return response.headers['x-total-count'];
      }
    );
    return res;
  }
);

export const addProduct = createAsyncThunk("products/addProduct", (item) => {
  const body = {
  
    name: item.name,
    image: item.image,
    category: item.category,
    description: item.description
  };
  return axios.post(`${URL}/products`, body).then((res) => res.data);
});

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  (id) => {
    return axios.delete(`${URL}/${id}`).then((res) => res.data);
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
    [deleteProduct.pending]: (state) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsList = state.productsList.filter((product) => product.id !== action.payload.id);
    },

    [deleteProduct.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
    [header.fulfilled]: (state, action) => {
      state.loading = false;
      state.total = action.payload;
    },
  },
});

export default productSlice.reducer;
