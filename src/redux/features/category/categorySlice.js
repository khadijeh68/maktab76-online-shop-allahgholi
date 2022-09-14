import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axois from "axios";
import { BASE_URL } from "../../../config/api";

const initialState = {
  categoryList: [],
  loading: false,
  error: "",
};

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  async () => {
    const res = axois({ url: `${BASE_URL}/categories` }).then(
      (response) => {
        return response.data;
      }
    );
    return res;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [fetchCategory.pending]: (state) => {
      state.loading = true;
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.categoryList = action.payload;
    },

    [fetchCategory.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default categorySlice.reducer;
