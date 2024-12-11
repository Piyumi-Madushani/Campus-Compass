import React from 'react';
import './FAQ.css'; // Link to the CSS file
import FAQChatbot from './FAQChatbot';

function FAQ() {
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

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
            <FAQ />
            <FAQChatbot />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
