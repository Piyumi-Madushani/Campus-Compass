import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-description">
        Welcome to <strong>Campus Compass!</strong> We’re here to help you explore degree programs and universities in Sri Lanka. 
        If you have any questions, feedback, or suggestions, feel free to get in touch with us.
      </p>
      
      <div className="contact-section">
        <h2>General Inquiries</h2>
        <p>Email: <a href="mailto:info@campuscompass.lk">info@campuscompass.lk</a></p>
        <p>Phone: +94 71 123 4567</p>
        <p>WhatsApp: +94 71 765 4321</p>
      </div>
      
      <div className="contact-section">
        <h2>Office Address</h2>
        <address>
          <p>Campus Compass</p>
          <p>123 University Avenue,</p>
          <p>Colombo 07, Sri Lanka.</p>
        </address>
      </div>
      
      <div className="contact-section">
        <h2>Social Media</h2>
        <ul className="social-links">
          <li><a href="https://facebook.com/campuscompass" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com/campuscompass.lk" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com/company/campuscompass" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      
      <div className="contact-section">
        <h2>Feedback and Suggestions</h2>
        <p>We value your feedback! Let us know how we can improve our platform to serve you better. 
           <a href="#feedback-form">Submit your feedback here.</a>
        </p>
      </div>
      
      <div className="contact-form-section">
        <h2>Contact Form</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
