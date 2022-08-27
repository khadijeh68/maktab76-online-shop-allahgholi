import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ACCESS_TOKEN,
  IS_LOGGGED_IN,
  REFRESH_TOKEN,
} from "../../../api/constants";

import { loginRequest, refreshTokenRequest } from "../../../api/users";

const initialState = {
  isLoggedIn: localStorage.getItem(IS_LOGGGED_IN)
    ? localStorage.getItem(IS_LOGGGED_IN)
    : false,
  error: "",
};

export const login = createAsyncThunk("users/login", (user) => {
  return loginRequest(user)
    .then((response) => {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      localStorage.setItem(REFRESH_TOKEN, response.refreshToken);
      localStorage.setItem(IS_LOGGGED_IN, true);
      return response;
    })
    .catch((error) => Promise.reject(error));
});

export const refreshToken = createAsyncThunk("users/refreshToken", (user) => {
  return refreshTokenRequest(user)
    .then((response) => {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      return response;
    })
    .catch((error) => Promise.reject(error));
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      console.log("fulfilled", action);

      state.isLoggedIn = true;
      state.error = "";
    },
    [login.rejected]: (state, action) => {
      console.log("rejected", action);
      state.isLoggedIn = false;
      state.error = "دسترسی ندارید";
    },

    //refresh token
    [refreshTokenRequest.fulfilled]: (state, action) => {
      console.log("fulfilled", action);

      state.isLoggedIn = true;
      state.error = "";
    },
    [refreshTokenRequest.rejected]: (state, action) => {
      console.log("rejected", action);
      state.isLoggedIn = false;
      state.error = "دسترسی ندارید";
    },
  },
});

export default usersSlice.reducer;
