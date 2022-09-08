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
  ({id, product}) => updateProductRequest(id, product)
);

// export const fetchData = createAsyncThunk(
//   "products/fetchData",
//   (id) => fetchDataRequest(id)
// );


const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    //GET
    builder.addCase(fetchProducts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return { ...state, loading: false, productsList: action.payload.data,total:action.payload.total };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return { productsList: [], loading: false, error: action.payload };
    });

    //POST
    builder.addCase(createProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });


    //DELETE
    builder.addCase(deleteProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });

    //UPDATE
    builder.addCase(updateProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      return { productsList: [], loading: false, error: action.payload };
    });
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
