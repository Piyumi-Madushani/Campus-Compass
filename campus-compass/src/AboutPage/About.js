import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">

      <h1>About Us</h1>
      <p>
        Welcome to <strong>Campus Compass</strong>, your ultimate guide to exploring higher education opportunities in Sri Lanka.
      </p>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          At <strong>Campus Compass</strong>, we are passionate about bridging the gap between students and universities.
          Whether you’re a high school graduate looking for the right degree or a lifelong learner exploring options, we are here to guide you every step of the way.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>Comprehensive Degree Listings:</strong> Discover undergraduate and postgraduate degree programs offered by Sri Lankan universities.
          </li>
          <li>
            <strong>Direct Access to Official Information:</strong> Get authentic and reliable details about degree programs directly from university web pages.
          </li>
          <li>
            <strong>Insights into Trending Degrees:</strong> Stay updated on the most in-demand courses and align with emerging career opportunities.
          </li>
        </ul>

        <h2>Why Choose Campus Compass?</h2>
        <ul>
          <li>Trusted Information sourced from official university websites.</li>
          <li>Time-Saving access to all the information you need in one place.</li>
          <li>Focus on Your Future with opportunities that align with your goals.</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          To be the go-to platform for Sri Lankan students seeking higher education opportunities and inspire a generation of well-informed, career-ready graduates.
        </p>
      </section>
    </div>
  );
}

export default About;
