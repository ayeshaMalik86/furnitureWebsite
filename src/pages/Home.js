import React from "react";
import HeroSection from "../homeComponents/HeroSection";
import Categories from "../homeComponents/Categories";
import Carousel from "../homeComponents/Carousel";


const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Categories/>
      <Carousel/>

    </main>
  );
};

export default HomePage;
