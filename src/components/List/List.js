import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./List.css";

const List = ({ products }) => {
  return (
    <Container>
      <Row className="row justify-content-md-center">
        {products.map((item) => (
          <LinkContainer
            key={item.id}
            to={{
              pathname: `/${item.id}`,
              data: products,
            }}
          >
            <Col className=" d-flex justify-content-center">
              <Card className="card text-center" style={{ width: "15rem" }}>
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button variant="primary">Add</Button>
                </Card.Body>
              </Card>
            </Col>
          </LinkContainer>
        ))}
      </Row>
    </Container>
  );
};

export default List;
