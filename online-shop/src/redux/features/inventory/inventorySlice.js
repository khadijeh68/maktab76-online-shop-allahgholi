import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../api/http";
import axois from "axios";

const initialState = {
  inventoriesList: [],
  total:[],
  mount:'',
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

export const updateInventory = createAsyncThunk(
  "inventory/updateInventory",
   () => {
    const res = axois({ url: `${URL}/inventory` }).then((response) => {
      return response.data;
    });
    return res;
  }
);

export const headerInventory = createAsyncThunk(
  "inventory/headerInventory",
  async () => {
    const res = axois({ url: `${URL}/inventory/?_page=1&_limit=1` }).then(
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
      state.inventoriesList = action.payload;
    },

    [fetchInventory.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
    [headerInventory.fulfilled]: (state, action) => {
      state.loading = false;
      state.total = action.payload;
    },
    [headerInventory.fulfilled]: (state, action) => {
      state.loading = false;
      state.inventoriesList = action.payload;
    },

    [headerInventory.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "wrong...";
    },
    [headerInventory.fulfilled]: (state, action) => {
      state.loading = false;
      state.total = action.payload;
    },
  },
});

export default inventoriesSlice.reducer;
