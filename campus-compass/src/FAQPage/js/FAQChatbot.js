import React, { useState } from 'react';
import '../css/FAQChatbot.css'; // Your CSS for styling the chatbot
import axios from 'axios';

const FAQChatbot = ({ chatOpen, closeChat }) => {
  const [messages, setMessages] = useState([]); // Ensure initialization as an array
  const [userMessage, setUserMessage] = useState(''); // User input message

  // Function to send message to the backend and receive a response
  const sendMessage = async () => {
    if (!userMessage.trim()) return; // Prevent sending empty messages

    // Add user message to the chat
    const newMessages = Array.isArray(messages)
      ? [...messages, { sender: 'user', text: userMessage }]
      : [{ sender: 'user', text: userMessage }];
    setMessages(newMessages);

    try {
      // Make the API call to the backend Django API
      const response = await axios.post('http://127.0.0.1:8000/api/chat/', {
        message: userMessage,
      });

      // Add bot response to the chat
      setMessages([
        ...newMessages,
        { sender: 'bot', text: response.data.response },
      ]);
    } catch (error) {
      // Handle error (e.g., if API call fails)
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Something went wrong. Please try again.' },
      ]);
    }

    // Clear the input field after sending the message
    setUserMessage('');
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Don't render the chatbot if it's closed
  if (!chatOpen) return null;

  return (
    <div className="chatbot">
      <div className="chatbot-window">
        {/* Close button */}
        <button className="chatbot-close" onClick={closeChat}>✖</button>

        {/* Messages display */}
        <div className="chatbot-messages">
          {Array.isArray(messages) &&
            messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
        </div>

        {/* Input field and Send button */}
        <div className="chatbot-input">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Ask a question..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default FAQChatbot;
