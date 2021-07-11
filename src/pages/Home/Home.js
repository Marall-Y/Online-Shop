import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/men" className="home-button">
        Men
      </Link>
      <Link to="/women" className="home-button">
        Women
      </Link>
    </div>
  );
};

export default Home;
