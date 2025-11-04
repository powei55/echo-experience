"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BrandExperienceSection = () => {
  const categories = [
    {
      title: "Museum Visits",
      experiences: [
        "Louvre Museum",
        "Orsay Museum",
        "Opera Garnier",
        "Carnavalet Museum",
        "Versailles Palace",
      ],
      image: "/assets/70.jpg",
    },
    {
      title: "Wine Tasting",
      experiences: [
        "Full-day Champagne Visit",
        "Private Parisian Wine Tasting with a Sommelier",
      ],
      image: "/assets/59.jpg",
    },
    {
      title: "Private Shopping",
      experiences: [
        "Shopping at the historic La Samaritaine",
        "Shopping at Le Marais District",
        "Antique shopping at Puces de Saint-Ouen",
        "Shopping at La Vallée Village",
      ],
      image: "/assets/60.jpg",
    },
    {
      title: "Paris Highlight Experiences",
      experiences: [
        "Lunch/Dinner Seine River Boat Cruise",
        "Vintage Car Parisian Tour",
        "Paris full day magic: Montmartre, Nôtre Dame, Louvre, Seine River Cruise",
        "Paris Île de la Cité Experience: Notre Dame, St. Chapelle, La Conciergerie, Pont Neuf",
      ],
      image: "/assets/58.jpg",
    },
  ];

  return (
    <section id="about" className="relative bg-[#faf7f5] py-20 overflow-hidden">
      <div className="w-full mx-auto  px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-wide">
            About Our Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed italic">
            We curate unforgettable Parisian experiences — from timeless art and fine wine
            to exclusive shopping and breathtaking highlights of the City of Light.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-md duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
              </div>

              {/* Text Overlay */}
              <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4 drop-shadow-md italic">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-sm md:text-base font-light italic">
                  {category.experiences.map((exp, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="drop-shadow-sm">{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandExperienceSection;
