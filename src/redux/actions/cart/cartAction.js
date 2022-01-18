import * as actionTypes from "../../actionTypes";

export const addToCart = (data) => {
  return { type: actionTypes.ADD_TO_CART, payload: { data } };
};

export const removeFromCart = (data) => {
  return { type: actionTypes.REMOVE_FROM_CART, payload: { data } };
};

export const adjustCartQty = (data, qty) => {
  return { type: actionTypes.ADJUST_CART_QTY, payload: { data, qty } };
};

export const loadCurrentItem = (data) => {
  return { type: actionTypes.LOAD_CURRENT_ITEM, payload: { data } };
};
