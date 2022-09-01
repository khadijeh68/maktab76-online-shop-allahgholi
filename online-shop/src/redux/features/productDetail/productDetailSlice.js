import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../config/api";

const initialState = {
  loadings: false,
  product: [],
};
export const getDetails = createAsyncThunk(
  "product/getDetails",
  async (id) => {
    return await fetch(`${BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error.message);
  }
);


export const productDetailSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getDetails.pending]: (state) => {
      state.loadings = true;
    },
    [getDetails.fulfilled]: (state, action) => {
      state.loadings = false;
      state.product = action.payload;
    },
    [getDetails.rejected]: (state) => {
      state.loadings = false;
      state.error = "wrong...";
    },
  },
});

export default productDetailSlice.reducer;
