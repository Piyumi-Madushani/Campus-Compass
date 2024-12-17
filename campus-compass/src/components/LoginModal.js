import React from "react";
import "./Modal.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";




const LoginModal = ({ onClose, onSwitchToSignup }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Log In</h2>
        <form>
          
          <input type="email" placeholder="Enter your email address" required />
          <input type="password" placeholder="Enter your password" required />
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="btn primary">Log In</button>
        </form>
        <p>
          Not a member yet?{" "}
          <a href="#" onClick={onSwitchToSignup}>Create an Account</a>
        </p>
        or
        <hr/>
       
        <button className="btn social google">
              <FaGoogle style={{ marginRight: "10px" }} /> Sign in with Google
        </button>
        <button className="btn social facebook">
              <FaFacebookF style={{ marginRight: "10px" }} />Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
