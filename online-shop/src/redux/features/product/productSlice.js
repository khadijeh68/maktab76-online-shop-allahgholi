import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../api/http";
import axois from "axios";
import axios from "axios";

const initialState = {
  productsList: [],
  total: [],
  products:[],
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

export const header = createAsyncThunk("products/header", async () => {
  const res = axois({ url: `${URL}/products/?_page=1&_limit=1` }).then(
    (response) => {
      return response.headers["x-total-count"];
    }
  );
  return res;
});

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (item) => {
    const body = {
      name: item.name,
      image: item.image,
      category: item.category,
      description: item.description,
    };
    const res = await axios.post(`${URL}/products`, body);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (item) => {
    const res = await axios.delete(`${URL}/products/${item.id}`);
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (item) => {
    const res = await axios.put(`${URL}/products/${item.id}`, item);
    return res.data;
  }
);

export const fetchData = createAsyncThunk(
  "products/fetchData",
  async () => {
    const res = axois({
      url: `${URL}/products`,

    }).then((response) => {
      return response.data;
    });
    return res;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.productsList = [];
      state.error = action.error.message;
    });
    builder.addCase(header.fulfilled, (state, action) => {
      state.loading = false;
      state.total = action.payload;
      state.error = "";
    });

    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList.push(action.payload);
      state.error = "";
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.productsList = [];
      state.error = action.error.message;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList = state.productsList.filter(
        (product) => product.id !== action.payload.id
      );
      state.error = "";
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.productsList = [];
      state.error = action.error.message;
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList = state.productsList.map((product) => {
        product.image = action.payload.image;
        product.name = action.payload.name;
        product.category = action.payload.category;
        product.description = action.payload.description;
      });
      state.error = "";
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.productsList = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
