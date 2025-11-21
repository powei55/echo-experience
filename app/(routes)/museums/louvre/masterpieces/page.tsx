"use client";
import React from 'react'
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { museums } from "@/app/data/data";
import ReservationModal from "@/app/components/ReservationModal";

export default function MasterPieces() {
    const museum = museums.find((m) =>
    m.name.toLowerCase().includes("louvre")
  );

  const [showModal, setShowModal] = useState(false);

  if (!museum) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f9f7f5]">
        <p className="text-xl text-[#1c3934]">Louvre museum data not found.</p>
      </main>
    );
  }
  return (
    <main>
         <section className="relative h-[60vh] w-full">
          <Image
            src="/assets/82.jpg"
            alt={museum.name}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1c3934]/70 flex flex-col justify-center items-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[25px] md:text-3xl font-bold text-[#f9f7f5] tracking-wider mb-4"
            >
              Private Visit of the Louvre: Masterpieces & Marvels
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-[#f9f7f5]/90 max-w-2xl text-lg md:text-xl font-light italic"
            >
              Make your first visit to the Louvre a memorable one. Walk through the walls
                of this 800+ year-old monument and marvel at its most famous masterpieces.
            </motion.p>
          </div>
        </section>
          <section className="py-24 px-6 md:px-16 lg:px-32 space-y-24">
           <div
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="relative w-full h-[320px] md:h-auto md:flex-1 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/82.jpg"
                  alt="The Louvre After Hours"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
                {/* Extra Images */}
            <div className="hidden md:grid md:grid-cols-3 gap-3 mt-4">
 
              <div className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/64.jpg"
                  alt="Gallery image 2"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/61.jpg"
                  alt="Gallery image 3"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/95.jpg"
                  alt="Gallery image 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1c3934]">
                Private Visit of the Louvre: Masterpieces & Marvels
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Make your first visit to the Louvre a memorable one. Walk through the walls
                of this 800+ year-old monument and marvel at its most famous masterpieces.
                Your private art historian leads you from the medieval Louvre to ancient
                Egypt, through classical Greek sculptures like Venus de Milo and the Winged
                Victory of Samothrace, to the Mona Lisa herself. This is elegant storytelling
                — not a checklist — shaped by your curiosity.
              </p>
              <p className="text-gray-700 mb-6">
                End your visit with lunch or dinner and a glass of champagne overlooking the iconic pyramid
                of the Louvre.
              </p>

              <ul className="space-y-2 text-gray-800 mb-6">
                <li>• Private licensed art historian</li>
                <li>• Skip-the-line access</li>
                <li>• Hotel pickup to the Louvre</li>
                <li>• Lunch or dinner with a glass of champagne at the magnificent Café Marly</li>
              </ul>

              <p className="text-sm text-gray-600 mb-4">
                <strong>Why it’s special:</strong> Seamless navigation, expert storytelling,
                and time to appreciate the icons rather than rush through them.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Duration:</strong> 2.5 hours
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Cost:</strong> From €890 for two guests
              </p>
              <p className="text-sm text-gray-600 mb-8">
                <strong>Availability:</strong> Year-round, limited private slots weekly.
              </p>
            <>
              {/* CTA Button */}
              <button
                onClick={() => setShowModal(true)}
                className="text-white px-6 py-3 rounded-xl transition bg-[#1c3934] font-semibold hover:bg-[#294f49] cursor-pointer"
              >
                Request this experience
              </button>

              {/* Reservation Modal */}
              <ReservationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                experienceName={museum.name}
              />
            </>
            </div>
          </div>
          </section>
             <div className="text-center pb-16">
          <Link href="/museums/louvre/after-hours" className="text-[#1c3934] underline hover:text-[#294f49]">
             Veiw The Louvre After Hours Experience
          </Link>
        </div>
         <div className="text-center pb-16">
                 <Link href="/museums" className="text-[#1c3934] underline hover:text-[#294f49]">
                   ←  Back to All Experiences
                 </Link>
               </div>
    </main>
  )
}
