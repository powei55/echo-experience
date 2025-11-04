import React from "react";
import HeroSection from "./components/HeroSection"; 
import CollectionSection from "./components/CollectionSection";
import ServicesSection from "./components/ServicesSection";
import BrandExperienceSection from "./components/BrandSection";
import TestimonialSection from "./components/TestimonySection";

const HomePage = () => {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <CollectionSection />
      <ServicesSection  />
      <TestimonialSection />
      <BrandExperienceSection />
    </main>
  );
};

export default HomePage;
