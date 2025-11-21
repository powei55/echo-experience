"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ReservationModal from "@/app/components/ReservationModal";
import Link from "next/link";

const eventServices = [
  {
    id: 1,
    title: "Full Event Consultation",
    description:
      "From concept to execution, we guide you through every detail — ensuring your event reflects elegance, precision, and personal meaning.",
    image: "/assets/35.jpg",
  },
  {
    id: 2,
    title: "Venue Sourcing",
    description:
      "Access an exclusive network of historic châteaux, vineyards, and estates across France, handpicked to match your vision.",
    image: "/assets/36.jpg",
  },
  {
    id: 3,
    title: "Logistics Support",
    description:
      "Seamless coordination of travel, setup, and on-site experience — every movement timed to perfection.",
    image: "/assets/37.jpg",
  },
];

const EventConsultationPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <main className="bg-[#f9f7f5]/90 text-[#1c3934] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/31.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1c3934]/70"></div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-base w-full md:w-[60%] text-center px-6 italic"
        >
          Some moments deserve more than a venue — they deserve a setting worthy
          of memory. We design and execute private destination events inside
          France’s most exclusive estates, vineyards, and historic châteaux.
          Whether it’s an intimate birthday dinner, celebration of love,
          milestone achievement, brand launch, or high-profile gathering, our
          team orchestrates everything discreetly and impeccably.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="relative w-full bg-[#e6c8b8]/[0.17] text-[#1c3934] py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 tracking-wide text-center md:text-left"
          >
            Event Consultation Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {eventServices.map((service) => (
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
                    className="mt-6 inline-block w-full text-center bg-[#1c3934] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#294f49] transition-all duration-300 cursor-pointer"
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

export default EventConsultationPage;
