import React, { useState } from "react";
import { Container } from "react-bootstrap";

import ProductList from "../../components/ProductList/ProductList";

import "./Men.css";

const Men = () => {
  const [products, setProducts] = useState([
    { title: "Men Shirt", Price: "$100" },
    { title: "Men Shirt", Price: "$200" },
    { title: "Men Shirt", Price: "$1300" },
    { title: "Men Shirt", Price: "$400" },
    { title: "Men Shirt", Price: "$1050" },
    { title: "Men Shirt", Price: "$1600" },
  ]);

  return (
    <Container className="men-list">
      <ProductList products={products} />
    </Container>
  );
};

export default Men;
