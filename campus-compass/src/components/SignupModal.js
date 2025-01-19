import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";  // Import useLocation to track the current location
import "./Modal.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignupModal = ({ onClose, onSwitchToLogin }) => {
  const [name, setName] = useState("");  // New state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();  // Get the current location (URL)

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:3001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Account created successfully!");
        setName(""); // Clear name
        setEmail(""); // Clear email
        setPassword(""); // Clear password

        // Close the modal after successful signup
        onClose();

        // Redirect to the previous page after successful signup
        navigate(location.pathname);  // Redirect to the exact page the user was on
      } else {
        setError(data.message || "Failed to create account");
      }
    } catch (err) {
      setError("An error occurred while creating your account");
    }
  };

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

        <form onSubmit={handleSignup}>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}  // Bind name field
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
