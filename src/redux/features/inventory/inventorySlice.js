import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../api/http";
import { BASE_URL } from "../../../config/api";

const initialState = {
  inventoriesList: [],
  total: 0,
  mount: "",
  loading: false,
  error: "",
};

export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async (page) => {
    try {
      const response = await instance.get(
        `${BASE_URL}/inventory/?_page=${page}&_limit=5`
      );
      return {
        data: response.data,
        total: Number(response.headers["x-total-count"]),
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const updateInventory = createAsyncThunk(
  "inventory/updateInventory",
  async () => {
    try {
      const response = await instance.get(`${BASE_URL}/inventory`);
      return {
        data: response.data,
      };
    } catch (error) {
      return Promise.reject(error);
    }
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
      state.inventoriesList = action.payload.data;
      state.total = action.payload.total;
    },
    [fetchInventory.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
  },
});
export default inventoriesSlice.reducer;
