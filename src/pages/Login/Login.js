import React, { useState } from "react";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import Joi from "joi-browser";

import { Input } from "../../components/UI/Input/Input";
import { getItem } from "../../utils/LocalStorage";
import { loginAction } from "../../redux/actions/login/loginAction";

import "./Login.css";

const Login = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [checkAccount, setcheckAccount] = useState({});
  const [emailFail, setEmailFail] = useState(false);

  const dispatch = useDispatch();

  const schema = {
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
      })
      .label("Email"),
    password: Joi.string().required().min(5).label("Password"),
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

    const foundAccount = getItem("users").find((item) => {
      if (item.email === account.email && item.password === account.password) {
        setEmailFail(false);
        return true;
      } else {
        setEmailFail(true);
        return false;
      }
    });

    foundAccount ? setcheckAccount(foundAccount) : setcheckAccount({});

    dispatch(loginAction(foundAccount));

    setAccount({ email: "", password: "" });
  };

  return (
    <div className="form-container">
      {Object.keys(checkAccount).length === 0 ? null : <Redirect to="/" />}
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <Input
          name="email"
          onChange={changeFormHandler}
          value={account.email}
          label="Email"
          small={"Your email won't be shown to anyone."}
          error={errors.email}
          type="text"
          emailFail={emailFail}
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
