"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ReservationModal from "@/app/components/ReservationModal";

const conciergeServices = [
  {
    id: 1,
    title: "Hotel Reservations",
    description:
      "Enjoy privileged access to Paris’s finest hotels — from timeless palaces to hidden boutique gems — all arranged to your exact preference.",
    image: "/assets/40.jpg",
  },
  {
    id: 2,
    title: "Restaurant & Private Dining",
    description:
      "Secure a table at Michelin-starred restaurants or arrange exclusive private dining experiences curated for your taste and occasion.",
    image: "/assets/41.jpg",
  },
  {
    id: 3,
    title: "Airport Pickup & Drop-off",
    description:
      "Arrive and depart in comfort and style with punctual airport transfers and seamless travel coordination.",
    image: "/assets/34.jpg",
  },
  {
    id: 4,
    title: "Private Chauffeur Services",
    description:
      "Your driver, your schedule. Elegant chauffeured transport for shopping, events, or simply exploring Paris effortlessly.",
    image: "/assets/111.jpg",
  },
  {
    id: 5,
    title: "Personal Errand Coordination",
    description:
      "Delegate the details — from gift deliveries to personal shopping — so you can focus on living beautifully.",
    image: "/assets/43.jpg",
  },
];

const LifestyleConciergePage = () => {
    const [selectedService, setSelectedService] = useState<string | null>(null);
  return (
    <main className="bg-[#f9f7f5]/90 text-[#1c3934] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/106.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1c3934]/70"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-center w-full md:w-[65%] px-6"
        >
          {/* <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            Lifestyle Concierge
          </h1> */}
          <p className="text-base italic leading-relaxed">
            Your Parisian life, orchestrated with ease and elegance.
            <br />
            Our concierge service grants access to the city’s most sought-after
            reservations and moments of daily convenience elevated to luxury.
            Whether it’s a table at a Michelin-starred restaurant, a last-minute
            hotel suite, or a chauffeured transfer that appears before you think
            to ask — we make it happen, effortlessly.
          </p>
        </motion.div>
      </section>

      {/* Concierge Services Section */}
      <section className="relative w-full bg-[#e6c8b8]/[0.17] text-[#1c3934] py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 tracking-wide text-center md:text-left"
          >
            Our Concierge Services Include
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {conciergeServices.map((service) => (
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

export default LifestyleConciergePage;
