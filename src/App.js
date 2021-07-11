import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Product from "./pages/Product/Product";
import Contact from "./pages/Contact/Contact";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Route path="/" component={Home} exact />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/login" component={Login} exact />
        <Route path="/product/:id?" component={Product} />
        <Route path="/women" component={Women} exact />
        <Route path="/men" component={Men} exact />
        <Route path="/contact-us" component={Contact} exact />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
