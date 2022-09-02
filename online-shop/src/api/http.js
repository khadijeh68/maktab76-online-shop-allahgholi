import axios from "axios";
import { refreshToken } from "../redux/features/user/usersSlice";
<<<<<<< HEAD
import { BASE_URL, LOGIN_URL, REFRESH_TOKEN_URL } from "../config/api";
import { REFRESH_TOKEN,ACCESS_TOKEN } from "../config/constants";


let store;
export const injectStore = (_store) => {
  store = _store;
};

export const instance = axios.create({
  baseURL: BASE_URL,
});

instance.defaults.baseURL = BASE_URL;

instance.interceptors.request.use((req) => {
=======
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

export const URL = "http://localhost:3002";

//users
export const LOGIN_URL = "http://localhost:3002/auth/login";
export const REFRESH_TOKEN_URL = "http://localhost:3002/auth/refresh-token";

let store;
export const injectStore = (_store) => {
  store = store;
};

axios.interceptors.request.use((req) => {
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
  if (req.url === REFRESH_TOKEN_URL) {
    const token = localStorage.getItem(REFRESH_TOKEN);
    req.headers.refreshToken = token;
  } else if (req.url !== LOGIN_URL) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    req.headers.token = token;
  }
  return req;
});

<<<<<<< HEAD
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    if (
      error.res.status === 401 && 
      originalRequest.url === REFRESH_TOKEN_URL)
       {
=======
axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.res.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    if (error.res.status === 401 && originalRequest.url === REFRESH_TOKEN_URL) {
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
      return Promise.reject(error);
    }
    if (!originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshToken());
<<<<<<< HEAD
        const res = await instance.request(originalRequest);
        return Promise.resolve(res);
=======
        const response = await axios.request(originalRequest);
        return Promise.resolve(response);
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
      } catch (e) {}
    }
  }
);

<<<<<<< HEAD
export default instance;
=======
export default axios;
>>>>>>> d3b8961588e4bcd2943b997d70bb10c310e2e16f
