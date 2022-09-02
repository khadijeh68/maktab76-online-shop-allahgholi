import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ACCESS_TOKEN,
  IS_LOGGGED_IN,
  REFRESH_TOKEN,
<<<<<<< HEAD
} from "../../../config/constants";
=======
} from "../../../api/constants";
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f

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

<<<<<<< HEAD
export const refreshToken = createAsyncThunk("users/refreshToken", () => {
  return refreshTokenRequest()
=======
export const refreshToken = createAsyncThunk("users/refreshToken", (user) => {
  return refreshTokenRequest(user)
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
    .then((response) => {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      return response;
    })
    .catch((error) => Promise.reject(error));
});

<<<<<<< HEAD
export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers:  (builder) => {
   //login
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      return { isLoggedIn: true, error: "" };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected", action);
      return { isLoggedIn: false, error: action.error.message };
    });

     // refresh token
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      console.log("fulfilled", action);
      return { isLoggedIn: true, error: "" };
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      console.log("rejected", action);
      return { isLoggedIn: false, error: action.error.message
      };
    });
  },
});

export default usersSlice.reducer;
=======
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
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
