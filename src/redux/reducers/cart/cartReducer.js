import { setItem } from "../../../utils/LocalStorage";
import * as actionTypes from "../../actionTypes";

export const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.data.id ? true : false
      );

      const newCart = {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.data.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload.data, qty: 1 }],
      };

      setItem("cart", newCart);
      return { ...newCart };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.data.id),
      };
    case actionTypes.ADJUST_CART_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.data.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
