import React from "react";
import HeroSection from "../homeComponents/HeroSection";
import Categories from "../homeComponents/Categories";
import Carousel from "../homeComponents/Carousel";
import FeaturedProducts from "../homeComponents/FeaturedProducts";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Categories/>
      <Carousel/>
      <FeaturedProducts/>
    </main>
  );
};

export default HomePage;
