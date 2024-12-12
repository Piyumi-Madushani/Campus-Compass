// src/components/ChatbotButton.js
import React from 'react';
import { FaComments } from 'react-icons/fa';
import '../css/ChatbotButton.css';

function ChatbotButton({ toggleChat }) {
  return (
    <button 
      className="chatbot-button" 
      onClick={toggleChat}
      aria-label="Chat with us"
    >
      <FaComments style={{ marginRight: '8px' }} /> Chat with Us
    </button>
  );
}

export default ChatbotButton;

