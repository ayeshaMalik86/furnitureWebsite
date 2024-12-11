import React, { useState } from "react";
import "../styles/homeComponents/Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      text: "Huge Saving on Sofas & Dining Sets",
      p: "Save up to 60% off on selected items",
      class: "slide-1",
      background: "url('/assets/images/carousel-image01.jpg')",
    },
    {
      id: 2,
      text: "Unbeatable Comfort, Unbelievable Prices on Sofas!",
      p: "Get 60% Off Your Favorites!",
      class: "slide-2",
      background: "url('/assets/images/carousel-image02.jpg')",
    },
    {
      id: 3,
      text: "Upgrade Your Lounge – Save Big on Sofas Now",
      p: "Up to 60% Off – Your Dream Sofa Awaits!",
      class: "slide-3",
      background: "url('/assets/images/carousel-image03.jpg')",
    },
  ];

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 800); 
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 800); 
  };

  return (
    <div className="carousel">
      <div
        className={`carousel-inner ${slides[currentSlide].class}`}
        style={{ backgroundImage: slides[currentSlide].background }}
      >
        <div
          className={`carousel-text ${isAnimating ? "slide-up" : ""}`}
          key={currentSlide} 
        >
          <h1>{slides[currentSlide].text}</h1>
          <p>{slides[currentSlide].p}</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
