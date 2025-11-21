"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ReservationModal from "@/app/components/ReservationModal";

const BrandServices = [
{
id: 1,
title: "Consulting for Brands & Collaborations",
description:
"Partner with Echo Atelier to bring your brand’s vision to life through bespoke collaborations, artistic activations, and luxury experiences. From concept development to execution in exclusive Parisian venues, we curate moments that blend culture, creativity, and craftsmanship — designed to resonate with discerning audiences.",
image: "/assets/49.jpg",
},
];
const EchoAtelierPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  return (
    <main className="bg-[#f9f7f5]/90 text-[#1c3934] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/49.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1c3934]/70"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-center w-full md:w-[65%] px-6"
        >
          {/* <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            Private Shopping & Couture Access
          </h1> */}
          <p className="text-base italic leading-relaxed">
           For luxury brands and creatives seeking to craft unique experiences.
            From bespoke brand activations in Paris to private collaborations
            within exclusive venues, Echo Atelier partners with select maisons
            and visionaries to create immersive experiences that bridge art,
            culture, and lifestyle.
          </p>
        </motion.div>
      </section>

      {/* Couture Services Section */}
      <section className="relative w-full bg-[#e6c8b8]/[0.17] text-[#1c3934] py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 tracking-wide text-center md:text-left"
          >
            The Echo Atelier ( For Brand Collaboration)
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4">
            {BrandServices.map((service) => (
              <div
                key={service.id}
                className="bg-white/60 shadow-md rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                <div className="relative w-full h-52">
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
                    <p className="text-sm leading-relaxed text-gray-700 italic">
                      {service.description}
                    </p>
                  </div>
                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedService(service.title)}
                    className="mt-6 inline-block w-full md:w-1/3 text-center bg-[#1c3934] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#294f49] transition-all duration-300 cursor-pointer"
                  >
                    Request This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <div className="text-center pb-16">
                    <Link
                      href="/"
                      className="text-[#1c3934] underline hover:text-[#294f49]"
                    >
                      ← Back to Home
                    </Link>
                  </div>
        {/* One single ReservationModal rendered globally */}
      <ReservationModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        experienceName={selectedService || ""}
      />
    </main>
  );
};

export default EchoAtelierPage;
