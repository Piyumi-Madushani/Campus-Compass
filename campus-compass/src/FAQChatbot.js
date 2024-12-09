import React, { useState } from 'react';
import './FAQChatbot.css'; // Link to the CSS file

function FAQChatbot() {
  const faqs = [
    {
      question: "What is Campus Compass?",
      answer: "Campus Compass is an online platform designed to help students select suitable university course modules."
    },
    {
      question: "How can I access the platform?",
      answer: "You can access Campus Compass online. Explore features like module recommendations by signing up."
    },
    {
      question: "Can I get personalized course recommendations?",
      answer: "Yes! Create an account to receive module suggestions based on your interests and qualifications."
    },
    {
      question: "How do I contact support?",
      answer: "Visit the Contact page for support or to provide feedback."
    }
  ];

  const [chatOpen, setChatOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleToggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    const userMessage = { sender: 'user', text: userInput };
    const botMessage = {
      sender: 'bot',
      text:
        faqs.find((faq) =>
          faq.question.toLowerCase().includes(userInput.toLowerCase())
        )?.answer || "Sorry, I couldn't find an answer to that question."
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setUserInput('');
  };

  return (
    <div className="chatbot">
      <button className="chatbot-toggle" onClick={handleToggleChat}>
        {chatOpen ? "Close Chat" : "Chat with Us"}
      </button>

      {chatOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.sender}`}
              >
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
          </div>
        </div>
      )}
    </div>
  );
}

export default FAQChatbot;
