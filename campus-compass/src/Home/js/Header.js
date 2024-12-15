import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../css/Header.css';
import logo from '../assets/images/logo.png';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Campus Compass Logo" className="logo-image" />
          <span className="logo-text">Campus Compass</span>
        </div>
        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleNav}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isNavVisible ? 'show-nav' : ''}`}>
          <ul>

          <li className={getActiveClass('/')}>
            <Link to="/">Home</Link></li>
            <li className={getActiveClass('/About')}>
            <Link to="/About">About</Link></li>
            <li className={getActiveClass('/Selection')}>
              <Link to="/Selection">Courses</Link></li>
              <li className={getActiveClass('/FAQ')}>
              <Link to="/FAQ">FAQ</Link></li>
              <li className={getActiveClass('/Contact')}>
              <Link to="/Contact">Contact Us</Link></li>
              <li className={getActiveClass('/TermsAndConditions')}>
              <Link to="/terms-and-conditions">Terms and Conditions</Link></li>

          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
