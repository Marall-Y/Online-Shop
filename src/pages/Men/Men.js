import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import List from "../../components/List/List";
import Pagination from "../../components/UI/Pagination/Pagination";
import { paginate } from "../../utils/paginate";

import "./Men.css";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    axios
      .get(
        "https://online-shop-49336-default-rtdb.firebaseio.com/products.json"
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        setProducts(data);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const paginated = paginate(currentPage, pageSize, products);

  return (
    <Container className="men-list">
      <List products={paginated} />
      {products.length <= pageSize ? null : (
        <Pagination
          className="pagination-style"
          itemsCount={products.length}
          pageSize={pageSize}
          changePage={changePageHandler}
          currentPage={currentPage}
        />
      )}
    </Container>
  );
};

export default Men;
