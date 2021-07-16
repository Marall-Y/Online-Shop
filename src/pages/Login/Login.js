import React, { useState } from "react";
import Joi from "joi-browser";

import { Input } from "../../components/UI/Input/Input";

import "./Login.css";

const Login = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const { error } = Joi.validate(account, schema, { abortEarly: false });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  const validateProperty = ({ value, name }) => {
    const obj = { [name]: value };
    const schemaNew = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaNew);

    return error ? error.details[0].message : null;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors({ errors });

    setAccount({ username: "", password: "" });
  };

  const changeFormHandler = ({ target: input }) => {
    const errorMessage = validateProperty(input);
    if (errorMessage) {
      setErrors((prevState) => ({ ...prevState, [input.name]: errorMessage }));
    } else {
      setErrors({ [input.name]: "" });
    }

    setAccount((prevState) => ({ ...prevState, [input.name]: input.value }));
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <Input
          name="username"
          onChange={changeFormHandler}
          value={account.username}
          label="Username"
          small={"Your Account Data won't be shown to anyone."}
          error={errors.username}
          type="text"
        />
        <Input
          name="password"
          onChange={changeFormHandler}
          value={account.password}
          label="Password"
          error={errors.password}
          type="password"
        />
        <button disabled={validate()} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
