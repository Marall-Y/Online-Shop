import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Online Shop</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/men">
            <Nav.Link>Men</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/women">
            <Nav.Link>Women</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>
              <i className="fa fa-user fa-lg"></i>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>
              <i className="fa fa-shopping-cart fa-lg"></i>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
