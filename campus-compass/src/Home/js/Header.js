import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { setActiveLinks } from "./setActiveLinks";
import "../css/Header.css";
import logo from "../assets/images/logo.png";
import LoginModal from "../../components/LoginModal";
import SignupModal from "../../components/SignupModal";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleNavLinkClick = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveLinks(".header-link", ".footer-link");
  }, [location]);

  // Functions to open/close modals
  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Campus Compass Logo" className="logo-image" />
          <span className="logo-text">Campus Compass</span>
        </div>

        <div className="hamburger-menu" onClick={toggleNav}>
          &#9776;
        </div>

        <nav ref={navRef} className={`nav-links ${isNavVisible ? "show-nav" : ""}`}>
          <ul>
            <li><Link to="/" className="header-link" onClick={handleNavLinkClick}>Home</Link></li>
            <li><Link to="/About" className="header-link" onClick={handleNavLinkClick}>About</Link></li>
            <li><Link to="/UniversitiesAndDegrees/Universitypage" className="header-link" onClick={handleNavLinkClick}>Courses</Link></li>
            <li><Link to="/FAQ" className="header-link" onClick={handleNavLinkClick}>FAQ</Link></li>
            <li><Link to="/Contact" className="header-link" onClick={handleNavLinkClick}>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Login & Signup Buttons */}
        <div className="auth-buttons">
          <button className="login-btn" onClick={openLogin}>Login</button>
          <button className="signup-btn" onClick={openSignup}>Sign Up</button>
        </div>

        {/* Modals */}
        {showLogin && <LoginModal onClose={closeModal} onSwitchToSignup={openSignup} />}
        {showSignup && <SignupModal onClose={closeModal} onSwitchToLogin={openLogin} />}
      </div>
    </header>
  );
}

export default Header;
