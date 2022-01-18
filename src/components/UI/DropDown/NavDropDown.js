import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./NavDropDown.css";

const NavDropDown = () => {
  const [show, setShow] = useState(false);

  const { user } = useSelector((state) => state.login);

  // Navbar Dropdown
  const showDropdown = (e) => {
    setShow(!show);
  };

  return (
    <div>
      {!user.username ? (
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
          <LinkContainer to="signUp">
            <NavDropdown.Item>
              <button className="account-btn">Create Account</button>
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      ) : (
        <NavDropdown
          title={user.username}
          id="collasible-nav-dropdown"
          show={show}
          onMouseEnter={showDropdown}
          onMouseLeave={showDropdown}
        >
          <NavDropdown.Item class="navItem">
            <i class="fa fa-user-circle" />
            <span className="navSpan"> Welcome {user.username}</span>
          </NavDropdown.Item>
          <LinkContainer to="/account">
            <div className="navItemDown">
              <NavDropdown.Item>My Orders</NavDropdown.Item>
            </div>
          </LinkContainer>
          <LinkContainer to="signUp">
            <div>
              <NavDropdown.Item>Sign Out</NavDropdown.Item>
            </div>
          </LinkContainer>
        </NavDropdown>
      )}
    </div>
  );
};

export default NavDropDown;
