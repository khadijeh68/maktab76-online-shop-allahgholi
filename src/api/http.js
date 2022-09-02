import axios from "axios";
import { refreshToken } from "../redux/features/user/usersSlice";
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
  if (req.url === REFRESH_TOKEN_URL) {
    const token = localStorage.getItem(REFRESH_TOKEN);
    req.headers.refreshToken = token;
  } else if (req.url !== LOGIN_URL) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    req.headers.token = token;
  }
  return req;
});

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
      return Promise.reject(error);
    }
    if (!originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshToken());
        const res = await instance.request(originalRequest);
        return Promise.resolve(res);
      } catch (e) {}
    }
  }
);

export default instance;
