import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Home/js/Header'; 
import Footer from './Home/js/Footer'; 
import Home from './Home/js/Home';
import Selection from './Selection';
import About from './AboutPage/About';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import Contact from './ContactUs/Contact';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Selection" element={<Selection />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>
  );
};

export default App;
