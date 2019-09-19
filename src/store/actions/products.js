import axios from 'axios';
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_PENDING } from './types/types';

const URL = 'http://localhost:8080';

export function fetchProductsPending() {
  return {
    type: FETCH_PRODUCTS_PENDING
  }
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
  }
}

export function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error
  }
}

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsPending());
      const res = await axios.get(`${URL}/products`);
      if (res.data && res.status === 200) {
        console.log(res);
        dispatch(fetchProductsSuccess(res.data))
      }
    } catch (error) {
      dispatch(fetchProductsError(error));
      console.log(error);
    }
  }
}