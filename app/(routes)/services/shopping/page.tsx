"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ReservationModal from "@/app/components/ReservationModal";

const coutureServices = [
  {
    id: 1,
    title: "Private Boutique Appointments",
    description:
      "Indulge in exclusive access to Paris’s most prestigious maisons and ateliers, where your personal stylist awaits to curate your look in privacy and comfort.",
    image: "/assets/44.jpg",
  },
  {
    id: 2,
    title: "La Samaritaine & Galeries Lafayette Suites",
    description:
      "Enjoy personalized shopping within the city’s iconic retail temples — with private suites, champagne service, and couture specialists dedicated to you.",
    image: "/assets/45.jpg",
  },
  {
    id: 3,
    title: "Vintage Shopping Experiences",
    description:
      "Discover hidden Parisian boutiques offering rare vintage treasures, guided by experts who understand timeless fashion as an art form.",
    image: "/assets/46.jpg",
  },
];

const PrivateShoppingPage = () => {
   const [selectedService, setSelectedService] = useState<string | null>(null);
  return (
    <main className="bg-[#f9f7f5]/90 text-[#1c3934] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/33.jpg')] bg-cover bg-center">
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
            Because fashion in Paris is more than what you wear.
            <br />
            Step into a world of exclusive retail experiences. From private access
            to La Samaritaine’s most luxurious maisons to behind-the-scenes
            appointments with Parisian designers, our team curates shopping
            moments that feel both intimate and indulgent.
          </p>
        </motion.div>
      </section>

      {/* Couture Services Section */}
      <section className="relative w-full bg-[#e6c8b8]/[0.17] text-[#1c3934] py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 tracking-wide text-center md:text-left"
          >
            Our Couture Experiences Include
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {coutureServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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
                    <p className="text-sm leading-relaxed text-gray-700">
                      {service.description}
                    </p>
                  </div>
                    <button
                    onClick={() => setSelectedService(service.title)}
                    className="mt-6 inline-block w-full text-center bg-[#1c3934] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#294f49] transition-all duration-300 cursor-pointer"
                  >
                    Request This Service
                  </button>
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

export default PrivateShoppingPage;
