import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";

import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };

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
          <NavDropdown
            title="Sign In"
            id="collasible-nav-dropdown"
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={showDropdown}
          >
            <LinkContainer to="/login">
              <NavDropdown.Item>
                <button className="sign-btn">Sign In</button>
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/signup">
              <NavDropdown.Item>
                <button className="account-btn">Create Account</button>
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

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
