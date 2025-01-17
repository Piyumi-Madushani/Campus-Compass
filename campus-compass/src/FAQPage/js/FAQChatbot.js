import React, { useState } from 'react';
import '../css/FAQChatbot.css'; // Import your CSS for styling
import axios from 'axios';

const FAQChatbot = ({ chatOpen, closeChat }) => {
  const [messages, setMessages] = useState([]); // Messages state as an array
  const [userMessage, setUserMessage] = useState(''); // User's input message

  // Function to handle sending a message
  const sendMessage = async () => {
    const trimmedMessage = userMessage.trim(); // Trim unnecessary whitespace
    if (!trimmedMessage) return; // Prevent sending empty messages

    // Update messages with the user's input
    const updatedMessages = [
      ...messages,
      { sender: 'user', text: trimmedMessage },
    ];
    setMessages(updatedMessages);

    try {
      // API call to your Django backend
      const response = await axios.post('http://127.0.0.1:8000/api/chat/', {
        message: trimmedMessage,
      });

      // Add bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: response.data.response },
      ]);
    } catch (error) {
      // Handle API errors gracefully
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Something went wrong. Please try again later.' },
      ]);
      console.error('Error sending message:', error); // Log error details
    }

    // Clear the input field after sending
    setUserMessage('');
  };

  // Handle keypress events (e.g., Enter key to send message)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Render nothing if the chat is closed
  if (!chatOpen) return null;

  return (
    <div className="chatbot">
      <div className="chatbot-window">
        {/* Close button */}
        <button className="chatbot-close" onClick={closeChat}>
          ✖
        </button>

        {/* Messages display area */}
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
            key={index}
            className={`chat-message ${msg.sender === 'user' ? 'user-card' : 'bot-card'}`}
          >
            <div className={`message-label ${msg.sender === 'user' ? 'user-label' : 'bot-label'}`}>
              {msg.sender === 'user' ? 'You' : 'Bot'}
            </div>
            <div className="message-text">{msg.text}</div>
          </div>
          ))}
        </div>


        {/* Input field and send button */}
        <div className="chatbot-input">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown} // Handle Enter key
            placeholder="Ask a question..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default FAQChatbot;
