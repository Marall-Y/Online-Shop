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
        <div className="contact-details"></div>
        <div className="map"></div>
      </div>
    </div>
  );
};

export default Contact;
