import * as actionTypes from "../../actionTypes";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    default:
      return state;
  }
};
