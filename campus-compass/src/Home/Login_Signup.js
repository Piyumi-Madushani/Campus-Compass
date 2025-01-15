import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

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
    <div className="App" style={{ backgroundColor: "#0c3e68", height: "40vh" }}>
      <button onClick={openLogin} className="btn">
        Login
      </button>
      <button onClick={openSignup} className="btn">
        Signup
      </button>

      {showLogin && <LoginModal onClose={closeModal} onSwitchToSignup={openSignup} />}
      {showSignup && <SignupModal onClose={closeModal} onSwitchToLogin={openLogin} />}
    </div>
  );
};

export default LoginSignup;
