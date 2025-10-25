"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    title: "Museum Visits",
    description:
      "Immerse yourself in the world of art, history, and culture at Paris’s most iconic museums.",
    image: "/assets/12.jpg",
    href: "/museums",
  },
  {
    id: 2,
    title: "Wine Tasting",
    description:
      "Savor the finest French wines and learn the secrets of winemaking with expert sommeliers.",
    image: "/assets/25.jpg",
    href: "/wine-tasting",
  },
  {
    id: 3,
    title: "Private Shopping",
    description:
      "Enjoy exclusive access to Paris’s most luxurious boutiques and shopping districts.",
    image: "/assets/13.jpg",
    href: "/private-shopping",
  },
  {
    id: 4,
    title: "Paris Highlight Experiences",
    description:
      "Discover the charm of Paris through unforgettable cultural, culinary, and scenic adventures.",
    image: "/assets/7.jpg",
    href: "/paris-experience",
  },
];

const CollectionSection = () => {
  return (
    <section
      id="experience"
      className="w-full mx-auto py-20 px-6 bg-white text-center"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Our Collection of Experiences
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Explore handpicked Parisian experiences designed to connect you with
          art, taste, culture, and timeless elegance.
        </p>
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {experiences.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="group relative flex flex-col items-center text-center rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-gray-50"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>
            </div>

            {/* Text */}
            <div className="p-6 transition-all duration-500 group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold capitalize mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;

