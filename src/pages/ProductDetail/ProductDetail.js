import React, { useEffect, useState } from "react";

import { callApi } from "../../utils/callApi";
import Loading from "../../utils/Loading/Loading";
import { ListGroup, Image, Row, Col, Button } from "react-bootstrap";

import "./ProductDetail.css";

const ProductDetail = ({ location, match }) => {
  const [product, setProduct] = useState({});

  // find product item from product list
  const findProduct = (ProductList) => {
    const productItem = ProductList.find(
      (item) => item.id === +match.params.id
    );
    productItem && setProduct(productItem);
  };

  useEffect(() => {
    // call api again on refresh page
    if (location.data) {
      findProduct(location.data);
    } else {
      //call api
      callApi("products.json", findProduct);
    }
  }, []);

  return product.title ? (
    <div className="details">
      <Row>
        <Col>
          <Image src={product.url} />
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>{product.title}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item>{product.price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Button type="button" className="btn btn-success">
            Add to cart
          </Button>
        </Col>
      </Row>
    </div>
  ) : (
    <div className="loading">
      <Loading />
    </div>
  );
};

export default ProductDetail;
