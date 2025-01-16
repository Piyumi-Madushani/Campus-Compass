import React, { /*useState, useEffect */} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';

function Footer() {
  //const [isVisible, setIsVisible] = useState(false);

  // Show or hide the "Back to Top" button based on scroll position
  /*
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }; */

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
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>            
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="2x" /> </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Campus Compass. All Rights Reserved.</p>
      </div>
           
    </footer>
  );
}

export default Footer;
