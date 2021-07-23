import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import List from "../../components/List/List";
import Pagination from "../../components/UI/Pagination/Pagination";
import { paginate } from "../../utils/paginate";

import "./Women.css";

const Women = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    axios
      .get(
        "https://online-shop-49336-default-rtdb.firebaseio.com/products-women.json"
      )
      .then((response) => {
        const data = response.data;
        setWomenProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [womenProducts]);

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const paginated = paginate(currentPage, pageSize, womenProducts);

  return (
    <Container className="men-list">
      <List products={paginated} />
      <Pagination
        pageSize={pageSize}
        itemsCount={womenProducts.length}
        changePage={changePageHandler}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default Women;
