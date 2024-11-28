import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Selection from "./Selection"
import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Selection">Courses</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};




export default App;
