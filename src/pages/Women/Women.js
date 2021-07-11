import React, { useState } from "react";
import { Container } from "react-bootstrap";

import ProductList from "../../components/ProductList/ProductList";

import "./Women.css";

const Women = () => {
  const [products, setProducts] = useState([
    { title: "Women Shirt", Price: "$100" },
    { title: "Women Shirt", Price: "$200" },
    { title: "Women Shirt", Price: "$1300" },
    { title: "Women Shirt", Price: "$400" },
    { title: "Women Shirt", Price: "$1050" },
    { title: "Women Shirt", Price: "$1600" },
  ]);

  return (
    <Container className="women-list">
      <ProductList products={products} />
    </Container>
  );
};

export default Women;
