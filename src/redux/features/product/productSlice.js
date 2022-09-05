import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  createProductRequest,
  deleteProductRequest,
  fetchAllProductsRequest,
  updateProductRequest,
} from "../../../api/products";

const initialState = {
  productsList: [],
  total:0,
  products:[],       
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  fetchAllProductsRequest
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  (newProduct) => createProductRequest(newProduct)
);


export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
   (id) =>   deleteProductRequest(id)
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  (id, product) => updateProductRequest(id, product)
);

// export const fetchData = createAsyncThunk(
//   "products/fetchData",
//   (id) => fetchDataRequest(id)
// );


const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    //GET
    [fetchProducts.pending]: (state) => {
      state.loadings = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loadings = false;
      state.productsList = action.payload.data;
      state.total = action.payload.total;
    },
    [fetchProducts.rejected]: (state) => {
      state.loadings = false;
      state.error = "wrong... ";
    },

    //POST
    [createProduct.pending]: (state) => {
      state.loadings = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loadings = false;
      state.productsList = [...state, action.payload]
    },
    [createProduct.rejected]: (state) => {
      state.loadings = false;
      state.error = "wrong...";
    },


    //DELETE
    [deleteProduct.pending]: (state) => {
      state.loadings = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loadings = false;
      state.productsList = [...state, action.payload]
    },
    [deleteProduct.rejected]: (state) => {
      state.loadings = false;
      state.error = "wrong...";
    },

    //UPDATE
    [updateProduct.pending]: (state) => {
      state.loadings = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loadings = false;
      state.productsList = [...state, action.payload]
    },
    [updateProduct.rejected]: (state) => {
      state.loadings = false;
      state.error = "wrong...";
    }
// ,
//     [fetchData.pending]: (state) => {
//       state.loadings = true;
//     },
//     [fetchData.fulfilled]: (state, action) => {
//       state.loadings = false;
//       state.products = action.payload.data;
//       state.total = action.payload.total;
//     },
//     [fetchData.rejected]: (state) => {
//       state.loadings = false;
//       state.error = "wrong... ";
//     },
  },
});

export default productSlice.reducer;
