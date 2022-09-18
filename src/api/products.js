import { PRODUCTS_URL } from "../config/api";
import instance from "./http";
import axios from "axios"
export const fetchAllProductsRequest = async (currentPage = 1) => {
  try {
    const response = await instance.get(
      `${PRODUCTS_URL}?_page=${currentPage}&_limit=5`
    );
    return {
      data: response.data,
      total: Number(response.headers["x-total-count"]),
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProductRequest = async ({id, newProduct}) => {
  try {
    const response = await instance.patch(
      `${PRODUCTS_URL}/${id}`,
      newProduct
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createProductRequest = async (newProduct) => {
  try {
    const response = await instance.post(`${PRODUCTS_URL}`, newProduct);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProductRequest = async (id) => {
  try {
    const response = await instance.delete(`${PRODUCTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};


export const getfirstPage = async (id) => {
  try {
    const response = await axios.get(`${PRODUCTS_URL}?category=${id}&_page=1&_limit=6`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);

  }
}