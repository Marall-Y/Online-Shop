import * as actionTypes from "../../actionTypes";

export const addToCart = (data) => {
  return { type: actionTypes.ADD_TO_CART, data };
};

export const removeFromCart = (data) => {
  return { type: actionTypes.REMOVE_FROM_CART, data };
};
