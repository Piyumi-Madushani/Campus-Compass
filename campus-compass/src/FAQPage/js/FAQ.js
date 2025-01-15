<<<<<<< HEAD
import React from 'react';
import FAQChatbot from './FAQChatbot';
import  '../css/FAQ.css'; // Link to the CSS file


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
            
          </div>
        ))}
      </div>
      <div className="faq-chatbot-button">
    <FAQChatbot />
</div>
    </div>
  );
}

export default FAQ;
=======
import React, { useState, useEffect } from "react";
import FAQChatbot from "./FAQChatbot";
import Apply from "./Apply";
import "../css/FAQ.css"; // Link to the CSS file
import Courses_degree from "./Courses_degree";
import Admissions_Applications from "./Admissions_Applications";
import Finance from "./Finance";
import Facilities from "./Facilities";
import International from "./International";
import Miscellaneouss from "./Miscellaneouss";

const FAQPage = () => {
  // Categories for sidebar
  const categories = [
    "General Information",
    "Admissions & Applications",
    "Courses & Programs",
    "Financial Aid",
    "International Opportunities",
    "Facilities",
    "Miscellaneous",
  ];

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position
  const [selectedCategory, setSelectedCategory] = useState("General Information");



  // Detect screen size and set initial sidebar visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setSidebarVisible(true); // Show sidebar on large screens
      } else {
        setSidebarVisible(false); // Hide sidebar on small screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Detect scroll position and set button background to transparent if scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true); // If scrolled down, make button transparent
      } else {
        setIsScrolled(false); // If at the top, revert the button background
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // FAQs data
  const faqs = [
    { category: "General Information", answer: <Apply /> },
    { category: "Admissions & Applications", answer: <Admissions_Applications /> },
    { category: "Courses & Programs", answer: <Courses_degree /> },
    { category: "Financial Aid", answer: <Finance /> },
    { category: "International Opportunities", answer: <International /> },
    { category: "Facilities", answer: <Facilities /> },
    { category: "Miscellaneous", answer: <Miscellaneouss /> },
  ];

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="faq-page">
      {/* Sidebar */}
      <div className={`faq-sidebar ${sidebarVisible ? "visible" : "hidden"}`}>
        <h3>PAGE CONTENT</h3>
        {categories.map((cat) => (
          <p
            key={cat}
            className={`faq-category ${cat === selectedCategory ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              setSidebarVisible(false); // Auto-close sidebar on category selection
            }}
          >
            {cat}
          </p>
        ))}
      </div>

      {/* Main Content */}
      <div className="faq-content">
        {/* Menu Button: Only show when the sidebar is not visible */}
        {!sidebarVisible && (
          <button
            className={`menu-button ${isScrolled ? "scrolled" : ""}`}
            onClick={toggleSidebar}
          >
            ☰ Menu
          </button>
        )}

        {faqs
          .filter((faq) => faq.category === selectedCategory)
          .map((faq, index) => (
            <div key={index} className="faq-item">
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}

        {/* Chatbot Button */}
        <div className="faq-chatbot-button">
          <FAQChatbot />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
>>>>>>> origin/main
