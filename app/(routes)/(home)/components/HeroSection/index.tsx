"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import Link from "next/link";
import { FaPause, FaPlay } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/assets/137.jpg",
    title: "UNCOVER THE MAGIC IN EVERY MOMENT",
    description:
      " Transforming travel into timeless memories.",
    museums: [""],
    link: "/museums",
  },
  {
  id: 2,
  image: "/assets/108.jpg",
  title: "LOUVRE AFTER-HOURS PRIVATE ACCESS",
  description:
    "When the crowds have gone and the lights dim, the Louvre becomes something  extraordinary, still, echoing and utterly yours.",
  museums: [
    "Senior Curator-Led Louvre Tour",
    "Optional Private Dinner Experience"
  ],
  highlights: [
    "Private access to the Louvre after closing hours",
    "Champagne welcome overlooking the glass pyramid",
    "Tailored exploration of the permanent collection",
    "Senior curator and Echo Experiences concierge service",
    "Optional intimate post-tour dinner with a private chef",
    "A rare moment of silence and intimacy with the world’s greatest masterpieces"
  ],
  link: "/museums/louvre/after-hours"
},
  {
    id: 4,
    image: "/assets/99.jpg",
    title: "PRIVATE SHOPPING",
    description:
      "",
    museums: [
      "Shopping at the historic La Samaritaine",
      "Shopping at Le Marais District",
    ],
    link: "/private-shopping",
  },
  {
  id: 6,
  image: "/assets/140.jpeg",
  title: "MONTMARTRE PRIVATE WALK & WINE EXPERIENCE",
  description:
    "A 3-hour private walking tour of Montmartre that traces the hill’s artistic past, visits the last active vineyard in Paris, and finishes with a sommelier-led cheese & wine tasting at the Sacré-Cœur summit.",
  museums: [
    "Clos Montmartre Vineyard Visit",
    "Sommelier-led Cheese & Wine Tasting"
  ],
  highlights: [
    "Guided ascent with stories of Picasso, Modigliani, Renoir and other artists",
    "Explore Le Bateau-Lavoir, Le Passe-Muraille and Dalida Square",
    "Visit Clos Montmartre — Paris’s last active vineyard",
    "Stroll Rue de l’Abreuvoir and Place du Tertre (artists painting en plein air)",
    "Panoramic views from Sacré-Cœur and private sommelier tasting of 4 wines with light pairings",
    "Optional chauffeur service for hotel pick-up/drop-off and personalized wine upgrades"
  ],
  link: "/paris-experience/1"
}
];

const HomePage = () => {
  const sliderRef = useRef<Slider>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 0, // smoother fade transition
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  fade: true,
  pauseOnHover: false,
  arrows: false,
  // cssEase: "linear",
  lazyLoad: "ondemand" as const,
  appendDots: (dots) => (
    <div
      style={{
        position: "absolute",
        bottom: "18px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ul className="flex gap-[3px]">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <button
      type="button"
      className="w-6 h-6 rounded-full bg-white/40 p-0 hover:bg-white transition-all duration-300 focus:outline-none"
    />
  ),
};

 

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Preload image */}
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="relative h-screen w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Glass content box */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white  z-10">
                  <div className="flex flex-col items-center gap-8 md:gap-4 justify-center">
                    {/* Title + Description */}
                    <div className="flex flex-col items-center gap-4">
                      <h1 className="text-[25px] md:text-3xl font-bold tracking-wide mb-2">
                        {slide.title}
                      </h1>
                      <p className="text-base md:text-[19px] font-light tracking-wide opacity-90 italic text-center px-4 w-[70%]">
                        {slide.description}
                      </p>
                    </div>

                    {/* Experiences list */}
                    <div className="flex text-sm md:text-base xl:text-[19px] font-light tracking-wider flex-wrap justify-center gap-2 text-center italic">
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
                        <button className="mt-4 rounded-full hover:bg-white/30 text-white font-medium uppercase tracking-wide py-3 px-8 border border-white/30 transition duration-300 cursor-pointer">
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
    
    </main>
  );
};

export default HomePage;
