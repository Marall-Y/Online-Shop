import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

import NavDropDown from "../UI/DropDown/NavDropDown";

import "./Header.css";

const Header = () => {
  const [counter, setCounter] = useState(1);

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    let count = 0;

    cart.forEach((item) => {
      count += item.qty;
    });

    setCounter(count);
  }, [cart, counter]);

  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Online Shop</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/products/men">
            <Nav.Link>Men</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products/women">
            <Nav.Link>Women</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <NavDropDown />
          <LinkContainer to="/cart">
            <Nav.Link>
              <i className="fa fa-shopping-cart fa-lg"></i>
              <span className="badge badge-warning" id="cartCount">
                {counter}
              </span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
