import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router";

import { Input } from "../../components/UI/Input/Input";
import { setItem } from "../../utils/LocalStorage";
import { getItem } from "../../utils/LocalStorage";

const initialData = localStorage.getItem("users") ? getItem("users") : [];

const SignUp = () => {
  const [data, setData] = useState(initialData);
  const [account, setAccount] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [hasAccount, setHasAccount] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newData = [];
    const arr = data.filter(function (item) {
      if (newData.indexOf(item.email) == -1) {
        newData.push(item.email);
        setHasAccount(false);
        return true;
      } else {
        setHasAccount(true);
        return false;
      }
    });
    console.log(newData);

    setItem("users", arr);
  }, [data]);

  const schema = {
    username: Joi.string().required().label("Username"),
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
      })
      .label("Email"),
    password: Joi.string().required().min(5).label("Password"),
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

    setData((prevState) => {
      const newArray = [...prevState, { ...account }];
      return newArray;
    });

    setAccount({ username: "", email: "", password: "" });
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
      {hasAccount ? <Redirect to="/" /> : null}
      <h1>Create Account</h1>
      <form onSubmit={submitHandler}>
        <Input
          name="username"
          onChange={changeFormHandler}
          value={account.username}
          label="Username"
          error={errors.username}
          type="text"
          hasAccount={hasAccount}
        />
        <Input
          name="email"
          onChange={changeFormHandler}
          value={account.email}
          label="Email"
          small={"Your Email won't be shown to anyone."}
          error={errors.email}
          type="email"
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
          Create
        </button>
      </form>
    </div>
  );
};

export default SignUp;
