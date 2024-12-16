import React, { useState, useRef, useEffect } from "react";
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

  // FAQs data
  const faqs = [
    {
    category:"General Information",
    answer: <Apply />,
  },
  {category: "Admissions & Applications",
    answer:<Admissions_Applications />, 
  },
  {category:"Courses & Programs",
    answer: <Courses_degree />, 
  },
  {category:"Financial Aid",
    answer: <Finance />, 
  },
  {category:"International Opportunities",
    answer: <International />,
  },
  {category:"Facilities",
    answer: <Facilities />,
  },
  {category:"Miscellaneous",
    answer: <Miscellaneouss />,
  },
  
];

  const [selectedCategory, setSelectedCategory] = useState("General Information");
 // const [sidebarVisible, setSidebarVisible] = useState(false);
 // const sideRef = useRef(null);


  return (
    <div className="faq-page">
    <div className="faq-sidebar">
      <h3>PAGE CONTENT</h3>
      {categories.map((cat) => (
        <p
          key={cat}
          className={`faq-category ${cat === selectedCategory ? "active" : ""}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </p>
      ))}
    </div>

    <div className="faq-content">
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
