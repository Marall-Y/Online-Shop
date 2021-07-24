import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-header">
        <div className="text">
          <p>
            Get in touch
            <span>Want to get in touch? Here's how you can reach us...</span>
          </p>
        </div>
        <div className="image"></div>
      </div>
      <div className="contact-footer">
        <div className="contact-details">
          <i className="fa fa-phone" />
          <h2>Contact Sales</h2>
          <p>Just pick up the phone to talk with a member of our sales team.</p>
          <p className="phone">(+98) 21 0123 4567</p>
        </div>
        <div className="map">
          <a href="https://goo.gl/maps/EqrUNkYRE997nJv18">
            <iframe
              title="iframe"
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.750112523319!2d-122.01030958530112!3d36.96802447991432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e6a7eb3e71dab%3A0x62fca0048afd378d!2sPet%20Shop%20Santa%20Cruz!5e0!3m2!1sen!2s!4v1620460087976!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
