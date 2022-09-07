import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../api/http";
import axois from "axios";
import { BASE_URL } from "../../../config/api";

const initialState = {
  inventoriesList: [],
  total:0,
  mount:'',
  loading: false,
  error: "",
};

export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async (page) => {
    const res = axois({ url: `${BASE_URL}/inventory/?_page=${page}&_limit=5` }).then((response) => {
      return {
        data: response.data,
        total: Number(response.headers["x-total-count"]),
      }
    });
    return res;
  }
);

export const updateInventory = createAsyncThunk(
  "inventory/updateInventory",
   () => {
    const res = axois({ url: `${BASE_URL}/inventory` }).then((response) => {
      return response.data;
    });
    return res;
  }
);

export const headerInventory = createAsyncThunk(
  "inventory/headerInventory",
  async () => {
    const res = axois({ url: `${BASE_URL}/inventory/?_page=1&_limit=1` }).then(
      (response) => {
        return response.headers['x-total-count'];
      }
    );
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
      state.inventoriesList = action.payload.data;
      state.total = action.payload.total;
    },

    [fetchInventory.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
    // [headerInventory.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.total = action.payload;
    // },
    // [headerInventory.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.inventoriesList = action.payload;
    // },

    // [headerInventory.rejected]: (state, action) => {
    //   console.log(action);
    //   state.loading = false;
    //   state.error = "wrong...";
    // },
    // [headerInventory.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.total = action.payload;
    // },
  },
});

export default inventoriesSlice.reducer;
