"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ReservationModal from "@/app/components/ReservationModal";

const wineServices = [
  {
    id: 1,
    title: "Chef-led & Sommelier Private Tastings in Paris",
    description:
      "Experience an intimate journey through French gastronomy — guided by renowned chefs and sommeliers who bring the art of taste to life in exclusive Parisian settings.",
    image: "/assets/15.jpg",
  },
  {
    id: 2,
    title: "Vineyard Visits & Exclusive Winemaker Access",
    description:
      "Travel through Bordeaux, Champagne, Loire Valley, and Corsica to meet celebrated winemakers, explore centuries-old vineyards, and savor France’s most exquisite vintages.",
    image: "/assets/80.jpg",
  },
];

const WineExperiencePage = () => {
     const [selectedService, setSelectedService] = useState<string | null>(null);
  return (
    <main className="bg-[#f9f7f5]/90 text-[#1c3934] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/105.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1c3934]/70"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-center w-full md:w-[65%] px-6"
        >
          {/* <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            Wine, Taste & The French Table
          </h1> */}
          <p className="text-base italic leading-relaxed">
            The art of savoring France — one glass, one bite, one story at a
            time.
            <br />
            Our private culinary and wine experiences are designed for
            connoisseurs and the simply curious alike. Whether it’s a
            gastronomic masterclass in Paris or a sensory pairing inspired by
            French art, each encounter celebrates the culture of French taste
            with grace and authenticity.
          </p>
        </motion.div>
      </section>

      {/* Wine Services Section */}
      <section className="relative w-full bg-[#e6c8b8]/[0.17] text-[#1c3934] py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 tracking-wide text-center md:text-left"
          >
            Our Wine & Culinary Experiences
          </motion.h2>

          {/* Two Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {wineServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/60 shadow-md rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                  <button
                    onClick={() => setSelectedService(service.title)}
                    className="mt-6 inline-block w-full text-center bg-[#1c3934] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#294f49] transition-all duration-300 cursor-pointer"
                  >
                    Request This Service
                  </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        <ReservationModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        experienceName={selectedService || ""}
      />
    </main>
  );
};

export default WineExperiencePage;
