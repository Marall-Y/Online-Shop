import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./redux/reducers/products/productReducer";
import { cartReducer } from "./redux/reducers/cart/cartReducer";
import { loadState, saveState } from "./utils/LocalStorage";

const reducer = combineReducers({
  productList: productsReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedLoadState = loadState("cart");

const store = createStore(
  reducer,
  { cart: persistedLoadState },
  composeEnhancer(applyMiddleware(...middleware))
);

store.subscribe(() => saveState("cart", store.getState()["cart"]));

export default store;
