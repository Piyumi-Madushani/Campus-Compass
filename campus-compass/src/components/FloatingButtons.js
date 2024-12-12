import React, { useState } from 'react';
import ScrollToTopButton from '../Home/js/ScrollToTopButton';
import ChatbotButton from '../FAQPage/js/ChatbotButton';
import FAQChatbot from '../FAQPage/js/FAQChatbot';
import './FloatingButtons.css';

function FloatingButtons() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen((prev) => !prev);
  const closeChat = () => setChatOpen(false);

  return (
    <>
      <ScrollToTopButton />
      <ChatbotButton toggleChat={toggleChat} />
      <FAQChatbot chatOpen={chatOpen} closeChat={closeChat} />
    </>
  );
}

export default FloatingButtons;
