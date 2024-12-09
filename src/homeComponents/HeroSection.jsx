// HeroSection.js
import React from 'react';
import '../styles/homeComponents/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero"  style={{
        backgroundImage: "url('/assets/images/home_hero_bg.jpg')",
      }}>
      <div className="hero-content">
        <p>Home Office furniture</p>
        <h1>Stay productive and get more work done!</h1>
        <button className="shop-button">Shop Collection →</button>
      </div>
    </section>
  );
};

export default HeroSection;
