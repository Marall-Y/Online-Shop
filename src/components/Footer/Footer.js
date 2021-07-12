import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <h2 className="footer-heading">Sign Me Up</h2>
        <p className="footer-paragraph">
          Be the first to know more about new products
        </p>
      </div>
      <form className="signup-form">
        <input
          type="email"
          className="signup-form-input"
          placeholder="Enter Your Email"
        />
        <button type="submit" className="signup-form-btn">
          <i className="fa fa-arrow-right"></i>
        </button>
      </form>
      <p className="copyright">CodeAndCreate &copy; All Rights Reserved</p>
    </div>
  );
};

export default Footer;
