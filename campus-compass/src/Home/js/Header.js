import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/images/logo.png';

function Header() {

  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Campus Compass Logo" className="logo-image" />
          <span className="logo-text">Campus Compass</span>
        </div>
        <nav>
          <ul className="nav-links">

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
