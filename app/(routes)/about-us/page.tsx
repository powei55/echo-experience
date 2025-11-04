"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="bg-[#f9f7f5]/90 text-[#1c3934] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/30.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1c3934]/70"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-base xl:text-2xl w-full md:w-[60%]  tracking-wide text-center px-6 xl:mt-16 italic"
        >
          Echo Experiences curates immersive journeys for those who crave
          authenticity and refinement. From bespoke escapes to cultural
          odysseys, we design meaningful experiences that echo long after
          they’re lived.
        </motion.h1>
      </section>

      {/* Who We Are Section */}
      <section className="relative w-full bg-[#e6c8b8]/[0.17] text-[#1c3934] py-20 px-6 md:px-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={false} 
            animate={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-10 tracking-wide"
          >
            Who We Are
          </motion.h2>
          <div
            className="leading-relaxed space-y-6 text-base md:text-lg font-medium"
          >
            <p>
              At Echo Experiences, we believe that the most meaningful journeys
              are not measured in distance, but in depth — in the moments that
              move us, and the memories that continue to resonate long after
              they’re lived.
            </p>
            <p>
              We curate immersive journeys for those who seek authenticity and
              refinement — souls drawn to beauty that feels real, and encounters
              that awaken a sense of wonder. Each experience is crafted with
              intention: to connect cultures, celebrate artistry, and create
              spaces where conversation, taste, and emotion intertwine.
            </p>
            <p>
              From bespoke escapes in hidden corners of the world to intimate
              cultural odysseys that honor tradition and modernity, Echo
              transforms travel into an art form. Our experiences unfold slowly —
              through scent, sound, flavor, and story — reminding us that luxury
              lies not in excess, but in presence.
            </p>
            <p>
              Every detail, every encounter, carries an echo — of place, of
              people, of feeling. An echo that lingers. An echo that invites you
              to listen, to feel, to remember.
            </p>
            <p className="font-semibold italic text-lg">
              Echo Experiences — where every moment leaves a trace, and every
              journey continues to resonate.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
