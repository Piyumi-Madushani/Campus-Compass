import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/images/logo.png';
import LoginSignup from '../Login_Signup';
import LoginModal from '../../components/LoginModal';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation();
  const navRef = useRef(null); // Ref for the nav element

  // Toggle navigation menu visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Detect clicks outside of the navigation menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="Campus Compass Logo" className="logo-image" />
          <span className="logo-text">Campus Compass</span>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleNav}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        {/* Navigation Links */}
        <nav
          ref={navRef} // Attach ref to the nav element
          className={`nav-links ${isNavVisible ? 'show-nav' : ''}`}
        >
          <ul>
            <li className={getActiveClass('/')}>
              <Link to="/">Home</Link>
            </li>
            <li className={getActiveClass('/About')}>
              <Link to="/About">About</Link>
            </li>
            <li className={getActiveClass('/Selection')}>
              <Link to="/Selection">Courses</Link>
            </li>
            <li className={getActiveClass('/FAQ')}>
              <Link to="/FAQ">FAQ</Link>
            </li>
            <li className={getActiveClass('/Contact')}>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li className={getActiveClass('/terms-and-conditions')}>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </nav>

        {/* Authentication Buttons */}
  <div className="auth-buttons">
  {/* Link components for Login and Sign Up */}
  <Link to="/LoginSignup" className="login-btn">
    Login
  </Link>
  <Link to="/LoginSignup" className="signup-btn">
    Sign Up
  </Link>
</div>
      </div>
    </header>
  );
}
  
export default Header;
