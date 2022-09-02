<<<<<<< HEAD
import instance from "./http";
import { LOGIN_URL, REFRESH_TOKEN_URL } from "../config/api";

export const loginRequest = async (user) => {
  try {
    const response = await instance.post(LOGIN_URL, user);
=======
import axios from "axios";
import { LOGIN_URL, REFRESH_TOKEN_URL } from "./http";

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(LOGIN_URL, user);
>>>>>>> origin/develop
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const refreshTokenRequest = async () => {
    try {
<<<<<<< HEAD
      const response = await instance.post(REFRESH_TOKEN_URL);
=======
      const response = await axios.post(REFRESH_TOKEN_URL);
>>>>>>> origin/develop
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  };
