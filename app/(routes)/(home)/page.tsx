import React from "react";
import HeroSection from "./components/HeroSection"; 
import CollectionSection from "./components/CollectionSection";
import GallerySection from "./components/GallerySection";
import BrandExperienceSection from "./components/BrandSection";
import TestimonialSection from "./components/TestimonySection";
import InstagramGallery from "./components/InstagramGallery";

const HomePage = () => {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <CollectionSection />
      <GallerySection />
      <TestimonialSection />
      <BrandExperienceSection />
      <InstagramGallery />
    </main>
  );
};

export default HomePage;
