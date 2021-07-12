import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

import "./Login.css";

const Login = () => {
  const [account, setAccount] = useState({ username: "", password: "" });

  const userName = useRef(null);
  useEffect(() => {
    userName.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const changeFormHandler = ({ target }) => {
    setAccount((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  return (
    <Container className="form-container">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={account.username}
            onChange={changeFormHandler}
            name="username"
            ref={userName}
            type="text"
            id="username"
            className="form-control"
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            Your email will not be shown to anyone.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={account.password}
            onChange={changeFormHandler}
            name="password"
            type="password"
            id="password"
            className="form-control"
          ></input>
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </Container>
  );
};

export default Login;
