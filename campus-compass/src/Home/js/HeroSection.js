import React from 'react';
import '../css/HeroSection.css';
import AnimatedCharacter from '../js/AnimatedCharacter';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';



function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-gif">
        <AnimatedCharacter />

        </div>
        <div className="hero-content">
          <h1>Find your dream university today</h1>
          <p>
            Navigate your educational journey with ease. Discover courses tailored to your aspirations and explore campuses that fit your lifestyle.
          </p>
          <div className="advisor-section">
            <h2>Campus Compass: Your Virtual Course Advisor</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
