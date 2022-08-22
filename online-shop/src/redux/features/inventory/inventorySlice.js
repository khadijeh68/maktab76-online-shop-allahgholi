import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../api/http";
import axois from "axios";

const initialState = {
  inventoriesList: [],
  loading: false,
  error: "",
};

export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async (page) => {
    const res = axois({ url: `${URL}/inventory/?_page=${page}&_limit=5` }).then((response) => {
      return response.data;
    });
    return res;
  }
);

const inventoriesSlice = createSlice({
  name: "inventory",
  initialState,
  extraReducers: {
    [fetchInventory.pending]: (state) => {
      state.loading = true;
    },
    [fetchInventory.fulfilled]: (state, action) => {
      state.loading = false;
      state.inventoriesList = action.payload;
    },

    [fetchInventory.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
  },
});

export default inventoriesSlice.reducer;
