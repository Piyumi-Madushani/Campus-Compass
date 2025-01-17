import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './AboutPage/About';
import Contact from './ContactUs/Contact';
import FAQ from './FAQPage/js/FAQ';
import Footer from './Home/js/Footer';
import Header from './Home/js/Header';
import Home from './Home/js/Home';
//import Selection from './Selection';
import TermsAndConditions from './TermsAndConditions/TermsAndConditions';
import FloatingButtons from './components/FloatingButtons';
//import AnimatedCharacter from './Home/js/AnimatedCharacter';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import Universitypage from './UniversitiesAndDegrees/Universitypage';



const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <ScrollToTopOnRouteChange />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/selection" element={<Selection />} /> */}
            <Route path="/UniversitiesAndDegrees/Universitypage" element={<Universitypage />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path = "/FAQ" element ={<FAQ/>}/>
          </Routes>
          <FloatingButtons/>
        </main>
        <Footer />
      </div>

    </Router>
  );
};

export default App;