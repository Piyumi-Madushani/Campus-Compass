import React from 'react';
import Header from './Header';
import '../css/MainLayout.css';

function MainLayout() {
  return (
    <div className="scroll-container">
      <Header />
      <main className="content">
        <section>
          <h1>Welcome to Campus Compass</h1>
          <p>Your guide to finding the best universities and courses tailored to your dreams.</p>
        </section>
        <section>
          <h2>Why Choose Us?</h2>
          <p>Discover detailed insights about universities, degrees, and campus life.</p>
        </section>
      </main>
    </div>
  );
}

export default MainLayout;
