"use client";
import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/assets/8.jpg",
    title: "Museum Visits",
    description:
      "Welcome to Echo Experiences, your gateway to Paris' finest museums.",
    museums: [
      "Louvre Museum",
      "Orsay Museum",
      "Opera Garnier",
      "Carnavalet Museum",
      // "Versailles Palace",
    ],
    link: "/museums",
  },
  {
    id: 2,
    image: "/assets/16.jpg",
    title: "Wine Tasting",
    description:
      "Savor exceptional wines and discover the art of French winemaking.",
    museums: [
      "Full-day Champagne Visit",
      "Private Parisian Wine tasting with a Sommelier",
    ],
    link: "/wine-tasting", 
  },
  {
    id: 3,
    image: "/assets/17.jpg",
    title: "Private Shopping",
    description:
      "Indulge in exclusive shopping experiences across Paris’ most iconic spots.",
    museums: [
      "Shopping at the historic La Samaritaine",
      "Shopping at Le Marais District",
      // "Antique shopping at Puces de Saint-Ouen",
      // "Shopping at La Vallée Village",
    ],
    link: "/private-shopping",
  },
  {
    id: 4,
    image: "/assets/11.jpg",
    title: "Paris Highlight Experiences",
    description:
      "Discover the magic of Paris through its culture, cuisine, and charm.",
    museums: [
      "Lunch/Dinner Seine River Boat Cruise",
      "Vintage Car Parisian Tour",
      // "Paris full day magic: Montmartre, Nôtre Dame, Louvre",
    ],
    link: "/paris-experience",
  },
];


const HomePage = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000, // slower fade
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    // fade: true,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand" as const,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button
        type="button"
        className="relative w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 focus:outline-none"
      >
        <span className="absolute inset-0 rounded-full border border-white/50 scale-0 hover:scale-110 transition-transform duration-300"></span>
      </button>
    ),
  };

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Image
        src="/assets/3.jpg"
        alt="Preload first slide"
        width={1}
        height={1}
        priority
        style={{ position: "absolute", opacity: 0 }}
      />

      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="relative h-screen w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Glass content box */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center text-white shadow-lg z-10 max-w-2xl w-[80%]">
                  <div className="flex flex-col items-center gap-8 justify-center">
                    {/* Logo + Title */}
                    <div className="flex flex-col items-center">
                      <Image
                        src="/assets/brand.png"
                        alt="Brand Logo"
                        width={160}
                        height={1600}
                        className="rounded-md object-cover mb-4"
                      />
                      <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">
                        {slide.title}
                      </h1>
                      <p className="text-base md:text-lg font-light tracking-wide opacity-90">
                       {slide.description.length > 60 && (
                            <span className="sm:hidden">
                              {slide.description.slice(0, 55)}...
                            </span>
                          )}
                          <span className="hidden sm:inline">{slide.description}</span>
                      </p>
                    </div>

                    {/* Experiences list */}
                  <div className="hidden sm:flex text-sm md:text-base font-light tracking-wider flex-wrap justify-center gap-2 text-center">
                      {slide.museums.map((museum, index) => (
                        <React.Fragment key={index}>
                          <span>{museum}</span>
                          {index < slide.museums.length - 1 && (
                            <span className="text-white/70">•</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* CTA Button */}
                   <div>
                    <Link href={slide.link}>
                      <button className="mt-4 bg-white/20 hover:bg-white/30 text-white font-medium uppercase tracking-wide py-3 px-8 rounded-full border border-white/30 transition duration-300 cursor-pointer">
                        Book Now
                      </button>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default HomePage;
