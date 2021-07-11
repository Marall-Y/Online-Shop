import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <Row className="list">
      {products.map((item) => (
        <Col>
          <Card style={{ width: "15rem" }} className="card">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
              <Button variant="primary">Add</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
