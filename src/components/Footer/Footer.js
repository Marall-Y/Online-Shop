import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-text">
        <h2 class="footer-heading">Sign Me Up</h2>
        <p class="footer-paragraph">
          Be the first to know more about new products
        </p>
      </div>
      <form class="signup-form">
        <input
          type="email"
          class="signup-form-input"
          placeholder="Enter Your Email"
        />
        <button type="submit" class="signup-form-btn">
          <i class="fa fa-arrow-right"></i>
        </button>
      </form>
      <p class="copyright">CodeAndCreate &copy; All Rights Reserved</p>
    </div>
  );
};

export default Footer;
