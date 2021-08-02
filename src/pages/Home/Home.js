import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/products/men" className="home-button">
        Men
      </Link>
      <Link to="/products/women" className="home-button">
        Women
      </Link>
    </div>
  );
};

export default Home;
