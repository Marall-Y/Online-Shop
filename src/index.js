import React from "react";
import reactDom from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

axios.defaults.baseURL =
  "https://online-shop-49336-default-rtdb.firebaseio.com";

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
