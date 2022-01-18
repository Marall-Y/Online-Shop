import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { callApi } from "../../utils/callApi";
import Loading from "../../utils/Loading/Loading";
import { ListGroup, Image, Row, Col, Button } from "react-bootstrap";
import { addToCart } from "../../redux/actions/cart/cartAction";

import "./ProductDetail.css";

const ProductDetail = ({ location, match }) => {
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  // find product item from product list
  const findProduct = (products) => {
    if (Array.isArray(products)) {
      const productItem = products.find((item) => item.id === +match.params.id);
      productItem && setProduct(productItem);
    } else {
      setProduct(products);
    }
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
          <Image className="product-image" src={product.url} />
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>{product.title}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item style={{ fontWeight: "bold" }}>
              ${product.price}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Button
            onClick={() => dispatch(addToCart(product))}
            type="button"
            className="btn btn-success"
          >
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
