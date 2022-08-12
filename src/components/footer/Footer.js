/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h1>Your name</h1>
        <p>Based in Corrientes,AR</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to mark</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design by Benites Matias</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/matias-benites/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/Matiasbenites"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github github"></i>
          </a>
          <a
            href="https://www.instagram.com/matiasbenitess/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
