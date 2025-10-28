"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Link from "next/link";
import { FaPause, FaPlay } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/assets/8.jpg",
    title: "Museum Visits",
    description:
      "Welcome to Echo Experiences, your gateway to Paris' finest museums.",
    museums: ["Louvre Museum", "Orsay Museum", "Opera Garnier", "Carnavalet Museum"],
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
    ],
    link: "/paris-experience",
  },
];

const HomePage = () => {
  const sliderRef = useRef<Slider>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
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

  const togglePlay = () => {
    if (isPlaying) {
      sliderRef.current?.slickPause();
    } else {
      sliderRef.current?.slickPlay();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Preload image */}
      <Image
        src="/assets/3.jpg"
        alt="Preload first slide"
        width={1}
        height={1}
        priority
        style={{ position: "absolute", opacity: 0 }}
      />

      <Slider ref={sliderRef} {...settings}>
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
                <div className="bg-black/70 backdrop-blur-md border border-white/20 p-10 text-center text-white shadow-lg z-10 w-full">
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
                        <span className="hidden sm:inline">
                          {slide.description}
                        </span>
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
                        <button className="mt-4 bg-black/70 hover:bg-white/30 text-white font-medium uppercase tracking-wide py-3 px-8 border border-white/30 transition duration-300 cursor-pointer">
                          DISCOVER
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

      {/* Play/Pause button — bottom center */}
      <button
        onClick={togglePlay}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition"
      >
        {isPlaying ? (
          <FaPause className="text-lg" />
        ) : (
          <FaPlay className="text-lg" />
        )}
      </button>
    </main>
  );
};

export default HomePage;
