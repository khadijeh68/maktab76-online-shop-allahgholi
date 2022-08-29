import axios from "axios";
import { refreshToken } from "../redux/features/user/usersSlice";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

export const URL = "http://localhost:3002";

//users
export const LOGIN_URL = "http://localhost:3002/auth/login";
export const REFRESH_TOKEN_URL = "http://localhost:3002/auth/refresh-token";

let store;
export const injectStore = (_store) => {
  store = _store;
};

// axios.interceptors.request.use((req) => {
//   if (req.url === REFRESH_TOKEN_URL) {
//     const token = localStorage.getItem(REFRESH_TOKEN);
//     req.headers.refreshToken = token;
//   } else if (req.url !== LOGIN_URL) {
//     const token = localStorage.getItem(ACCESS_TOKEN);
//     req.headers.token = token;
//   }
//   return req;
// });

// axios.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     if (error.res.status !== 401) {
//       return Promise.reject(error);
//     }
//     const originalRequest = error.config;
//     if (error.res.status === 401 && originalRequest.url === REFRESH_TOKEN_URL) {
//       return Promise.reject(error);
//     }
//     if (!originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await store.dispatch(refreshToken());
//         const response = await axios.request(originalRequest);
//         return Promise.resolve(response);
//       } catch (e) {}
//     }
//   }
// );

// export default axios;
