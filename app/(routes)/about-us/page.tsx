"use client";

import React from "react";
import { motion } from "framer-motion";
import InstagramGallery from "../(home)/components/InstagramGallery";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="bg-[#f9f7f5]/90 text-[#1c3934] min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center bg-[url('/assets/30.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1c3934]/70"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-base md:text-xl xl:text-2xl leading-relaxed max-w-3xl text-center px-6 italic"
        >
          Echo Experiences curates immersive journeys for those who crave
          authenticity and refinement. From bespoke escapes to cultural
          odysseys, we design meaningful experiences that echo long after
          they’re lived.
        </motion.h1>
      </section>

      {/* WHO WE ARE */}
      <section className="relative w-full bg-[#e6c8b8]/[0.17] text-[#1c3934] py-24 px-6 md:px-20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-12 tracking-wide"
          >
            About Echo Experiences
          </motion.h2>

          <div className="leading-[1.8] space-y-8 text-base md:text-lg font-medium">
            <p>
              Echo Experiences is our way of showing travellers a France that feels personal,
              elegant, and quietly unforgettable. We create private journeys for people who value
              privacy, authenticity, and experiences shaped around their rhythm.
            </p>

            <p>
              What we offer are thoughtful experiences that reflect imagination. That means
              handpicked partners, seamless logistics, and moments that feel natural
              rather than staged.
            </p>

            <p>
              Whether it’s a discreet after-hours visit to the Louvre, a private tasting inside a
              family-run Champagne house, or a day exploring Paris through art, fashion, or
              gastronomy — everything we design is intentional and tailored.
            </p>

            <p>
              We handle the details: restaurants, private chauffeurs, airport assistance, personal
              errands, so you can focus entirely on enjoying your time. The goal is always the same: an
              experience that feels smooth, personal, and worth remembering.
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <InstagramGallery />

      {/* HOW WE STARTED */}
      <section className="relative w-full bg-[#e6c8b8]/[0.17] text-[#1c3934] py-24 px-6 md:px-20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide">
            How Echo Experiences Started
          </h2>

          <div className="leading-[1.8] space-y-8 text-base md:text-lg font-medium">
            <p>
              Our founder, Nkay Sylon, moved to France in 2015 — studied in Grenoble, lived in Nice,
              and eventually settled in Paris. Along the way, she fell in love with the culture, the
              food, the art, and the way life here invites you to slow down.
            </p>

            <p>
            What started as small, private Côte d’Azur experiences eventually grew into a full
            immersion in luxury hospitality, leading her to become a licensed guide with the French
            Ministry of Culture.
            </p>

            <p>
              Over the years, she realized that unique concierge experiences aren’t about excess,
             they are about care, intention, and the feeling of being genuinely heard and catered to.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-8 tracking-wide">
              What We Want You to Feel
            </h2>

            <p>If you choose to explore France with us, you will receive:</p>

            <ul className="list-disc px-8 space-y-3">
              <li>A team that listens first and plans second.</li>
              <li>Experiences that feel curated, not commercial.</li>
              <li>Access to places and people you wouldn’t find on your own.</li>
              <li>Support with every detail, from your arrival to your last meal.</li>
              <li>A journey that feels effortless from start to finish.</li>
            </ul>

            <div className="mt-8 italic font-medium text-lg">
              <p>« Paris, ce lieu où l’on s’aime, où l’on rêve, où l’on se réinvente. »</p>
              <p className="font-bold">
                “Paris, the place where we love, dream, and reinvent ourselves.” — Paul Valéry
              </p>
            </div>
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
    <section className="relative w-full h-screen">
      <Image
        src="/assets/100.jpg"  
        alt="Echo Experiences"
        fill
        priority
        className="object-cover object-center"
      />
   </section>
    </main>
  );
};

export default AboutPage;
