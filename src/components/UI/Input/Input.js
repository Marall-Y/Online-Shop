import React from "react";

export const Input = ({
  name,
  label,
  value,
  small,
  onChange,
  error,
  type,
  hasAccount,
  emailFail,
}) => {
  return (
    <div className="form-group">
      {hasAccount ? (
        <div className="alert alert-danger">
          An account already exists with this email address.
        </div>
      ) : null}
      {emailFail ? (
        <div className="alert alert-danger">
          Incorrect Email or Password, Please try again.
        </div>
      ) : null}

      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        id={name}
        className="form-control"
      ></input>
      <small id="emailHelp" className="form-text text-muted">
        {small}
      </small>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
