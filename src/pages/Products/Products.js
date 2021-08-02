import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import List from "../../components/List/List";
import Pagination from "../../components/UI/Pagination/Pagination";
import Loading from "../../utils/Loading/Loading";
import { paginate } from "../../utils/paginate";
import { productsAction } from "../..//redux/actions/products/productAction";

import "./Products.css";

const Products = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, products } = productList;

  useEffect(() => {
    dispatch(productsAction(match.url));
  }, [dispatch, match.url]);

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const paginated = paginate(currentPage, pageSize, products);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Products;
