import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { setActiveLinks } from "./setActiveLinks";
import "../css/Footer.css";

const Footer = () => {
  useEffect(() => {
    setActiveLinks(".header-link", ".footer-link");
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>
            Campus Compass helps students find the best universities and courses tailored to their aspirations.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li className="footer-item">
              <a href="/" className="footer-link">Home</a>
            </li>
            <li className="footer-item">
              <a href="/about" className="footer-link">About</a>
            </li>
            <li className="footer-item">
              <a href="/courses" className="footer-link">Courses</a>
            </li>
            <li className="footer-item">
              <a href="/faq" className="footer-link">FAQ</a>
            </li>
            <li className="footer-item">
              <a href="/contact" className="footer-link">Contact Us</a>
            </li>
            <li className="footer-item">
              <a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Campus Compass. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
