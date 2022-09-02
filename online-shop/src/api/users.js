import instance from "./http";
import { LOGIN_URL, REFRESH_TOKEN_URL } from "../config/api";

export const loginRequest = async (user) => {
  try {
    const response = await instance.post(LOGIN_URL, user);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const refreshTokenRequest = async () => {
    try {
      const response = await instance.post(REFRESH_TOKEN_URL);
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  };
