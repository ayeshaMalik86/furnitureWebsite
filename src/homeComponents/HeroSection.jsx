import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/homeComponents/HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopButtonClick = () => {
    navigate('/shop'); 
  };

  return (
    <section className="hero"  style={{
        backgroundImage: "url('/assets/images/home_hero_bg.jpg')",
      }}>
      <div className="hero-content">
        <p>Home Office furniture</p>
        <h1>Stay productive and get more work done!</h1>
        <button className="shop-button" onClick={handleShopButtonClick}>
          Shop Collection →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
