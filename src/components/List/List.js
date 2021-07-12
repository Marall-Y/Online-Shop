import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import "./List.css";

const List = ({ products }) => {
  return (
    <Row className="list">
      {products.map((item) => (
        <Col key={item.id}>
          <Card style={{ width: "15rem" }} className="card">
            <Card.Img variant="top" src={item.url} />
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

export default List;
