import React, { useState } from 'react';
import ChatbotButton from './ChatbotButton';
import FAQChatbot from './FAQChatbot';

const ParentComponent = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(prevState => !prevState); // Toggle chat visibility
  };

  const closeChat = () => {
    setChatOpen(false); // Close the chatbot when clicked
  };

  return (
    <div>
      <ChatbotButton toggleChat={toggleChat} />

      {chatOpen && <FAQChatbot chatOpen={chatOpen} closeChat={closeChat} />}

    </div>
  );
};

export default ParentComponent;
