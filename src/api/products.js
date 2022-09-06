import { PRODUCTS_URL } from "../config/api";
import instance from "./http";

export const fetchAllProductsRequest = async (currentPage = 1) => {
  try {
    const response = await instance.get(
      `${PRODUCTS_URL}?_page=${currentPage}&_limit=5`
    );
    return {
      data: response.data,
      total: response.headers["x-total-count"],
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProductRequest = async (id, selectedProduct) => {
  try {
    const response = await instance.put(
      `${PRODUCTS_URL}/${id}`,
      selectedProduct
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
