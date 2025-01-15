import React, { useState } from 'react';
<<<<<<< HEAD
import '../css/FAQChatbot.css';

function FAQChatbot({ chatOpen, closeChat }) {
  const faqs = [
    { question: "What is Campus Compass?", answer: "Campus Compass is an online platform designed to help students select suitable university course modules." },
    { question: "How can I access the platform?", answer: "You can access Campus Compass online. Explore features like module recommendations by signing up." },
    { question: "Can I get personalized course recommendations?", answer: "Yes! Create an account to receive module suggestions based on your interests and qualifications." },
    { question: "How do I contact support?", answer: "Visit the Contact page for support or to provide feedback." }
  ];

  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    const userMessage = { sender: 'user', text: userInput };
    const botMessage = {
      sender: 'bot',
      text: faqs.find((faq) =>
        faq.question.toLowerCase().includes(userInput.toLowerCase())
      )?.answer || "Sorry, I couldn't find an answer to that question."
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setUserInput('');
  };

=======
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

  // Don't render the chatbot if it's closed
>>>>>>> origin/main
  if (!chatOpen) return null;

  return (
    <div className="chatbot">
      <div className="chatbot-window">
<<<<<<< HEAD
        <button className="chatbot-close" onClick={closeChat}>✖</button>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Ask a question..."
          />
          <button onClick={handleSendMessage}>Send</button>
=======
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
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/main

export default FAQChatbot;
