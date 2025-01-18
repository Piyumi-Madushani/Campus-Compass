import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    try {
      const response = await fetch('http://localhost:5000/Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} size="2x" /> </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="2x" /> </a>
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
        <form className="contact-form" onSubmit={handleSubmit}>
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
