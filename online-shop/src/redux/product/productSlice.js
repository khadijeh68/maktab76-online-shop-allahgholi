import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../api/constants";

const initialState = {
  productsList: [],
  loading: false,
  error: "",
};
// ${PRODUCTS_URL}/products/?_page=1&_limit=10"
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error.message);
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
