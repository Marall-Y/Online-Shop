import axios from "axios";
import * as actionTypes from "../../actionTypes";

export const productsAction = (url) => async (dispatch) => {
  try {
    if (url === "/products/men") {
      dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
      const { data } = await axios.get("/products.json");

      dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data });
    } else {
      dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
      const { data } = await axios.get("/products-women.json");

      dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data });
    }
  } catch (err) {
    console.log(err);
  }
};
