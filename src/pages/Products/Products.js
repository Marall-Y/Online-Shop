import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import List from "../../components/List/List";
import Pagination from "../../components/UI/Pagination/Pagination";
import Loading from "../../utils/Loading/Loading";
import { paginate } from "../../utils/paginate";
import { callApi } from "../../utils/callApi";

import "./Products.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    if (props.match.url === "/products/men") {
      callApi("products.json", setProducts);
    } else if (props.match.url === "/products/women") {
      callApi("products-women.json", setProducts);
    }
  }, [products, props.match.url]);

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const paginated = paginate(currentPage, pageSize, products);

  return products.length !== 0 ? (
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
  ) : (
    <div className="loading">
      <Loading />
    </div>
  );
};

export default Products;
