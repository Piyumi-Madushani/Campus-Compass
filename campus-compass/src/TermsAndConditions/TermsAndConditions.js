import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to <strong>Campus Compass</strong>! These terms and conditions govern your use of our website. By accessing or using our site, you agree to comply with and be bound by the terms outlined below. If you do not agree with any of these terms, please refrain from using our services.
      </p>
      
      <h2>1. Use of the Website</h2>
      <p>Campus Compass is designed to provide information about Sri Lankan universities, degree programs, and related resources...</p>

      <h2>2. Accuracy of Information</h2>
      <p>We strive to ensure the information on our website is accurate and up-to-date...</p>

      <h2>3. Intellectual Property</h2>
      <p>All content on this site, including text, images, graphics, and logos, is the intellectual property of Campus Compass...</p>

      {/* Add other sections as necessary */}
      
      <h2>10. Governing Law</h2>
      <p>These terms and conditions are governed by the laws of Sri Lanka...</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about these terms, please feel free to contact us:</p>
      <ul>
        <li>Email: <a href="mailto:info@campuscompass.lk">info@campuscompass.lk</a></li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
