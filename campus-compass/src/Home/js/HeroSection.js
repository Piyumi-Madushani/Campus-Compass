import React from 'react';
import '../css/HeroSection.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-gif">

        <DotLottieReact
      src="https://lottie.host/d0451c87-5c50-40c3-9b26-e6f6aba62401/C5nbmTja8j.lottie"
      loop
      autoplay
    />

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
