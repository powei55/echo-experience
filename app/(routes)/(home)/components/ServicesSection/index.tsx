"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Event Consultation",
    description:
      "Designing and executing unforgettable destination events in France’s most exclusive estates, vineyards, and châteaux.",
    image: "/assets/31.jpg",
    href: "/services/event-consultation",
  },
  {
    id: 2,
    title: "Lifestyle Concierge",
    description:
      "Your Parisian life, orchestrated with ease and elegance — from fine dining to last-minute luxury arrangements.",
    image: "/assets/32.jpg",
    href: "/services/lifestyle-concierge",
  },
  {
    id: 3,
    title: "Private Shopping & Couture Access",
    description:
      "Exclusive access to Parisian designers, couture ateliers, and luxury maisons curated for your personal style.",
    image: "/assets/73.jpg",
    href: "/services/shopping",
  },
  {
    id: 4,
    title: "Wine, Taste & the French Table",
    description:
      "Private culinary and wine journeys celebrating the art of French gastronomy and refined taste.",
    image: "/assets/24.jpg",
    href: "/services/wine-and-taste",
  },
  {
    id: 5,
    title: "Arrival & Departure Services",
    description:
      "Seamless luxury travel coordination from airport VIP assistance to private chauffeur transfers.",
    image: "/assets/39.jpg",
    href: "/services/arrival-departure",
  },
  {
    id: 6,
    title: "The Echo Atelier",
    description:
      "Creative consulting for luxury brands — crafting bespoke activations and collaborations across Paris.",
    image: "/assets/38.jpg",
    href: "/services/echo-atelier",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full mx-auto py-20 px-6 bg-[#f9f7f5]">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-700 leading-relaxed italic">
          Explore our portfolio of bespoke luxury services, crafted to offer
          refined experiences with Parisian sophistication.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Link
            href={service.href}
            key={service.id}
            className="group relative flex flex-col overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 rounded-xl"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={800}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-grow p-6 text-left transition-all duration-500 group-hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
