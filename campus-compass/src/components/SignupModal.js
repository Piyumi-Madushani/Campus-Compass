import React from "react";
import "./Modal.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";


const SignupModal = ({ onClose, onSwitchToLogin }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Create Account</h2>
        
        <button className="btn social google">
             <FaGoogle style={{ marginRight: "10px" }} /> Sign in with Google
        </button>
        <button className="btn social facebook">
             <FaFacebookF style={{ marginRight: "10px" }} /> Sign in with Facebook
        </button>
        <p className="popupptext2">or</p>
        <hr />
        <form>
          
          <input type="email" placeholder="Enter your email" required />
          
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" className="btn primary">Create Account</button>
        </form>
     
        <p>
            <span className="popupptext1">Already a member?</span>{" "}
            <a href="#" onClick={onSwitchToLogin}>Log In</a>
        </p>


      </div>
    </div>
  );
};

export default SignupModal;
