import axios from 'axios';

import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_SINGLE_FROM_CART,
  FETCH_SINGLE_PRODUCT,
  CLEAR_CART,
} from './products_types';

const URL = 'https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(URL);
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (itemID) => ({
  type: ADD_TO_CART,
  payload: itemID,
});

export const removeSingleFromCart = (itemID) => ({
  type: REMOVE_SINGLE_FROM_CART,
  payload: itemID,
});

export const removeFromCart = (itemID) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id: itemID,
  },
});

export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    dispatch({ type: FETCH_SINGLE_PRODUCT, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const clearCart = () => ({
  type: CLEAR_CART,
});
