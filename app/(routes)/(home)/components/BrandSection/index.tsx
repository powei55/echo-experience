"use client";

import { motion } from "framer-motion";

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
      color: "from-[#f7d9c4] to-[#e6c8b7]",
    },
    {
      title: "Wine Tasting",
      experiences: [
        "Full-day Champagne Visit",
        "Private Parisian Wine Tasting with a Sommelier",
      ],
      color: "from-[#f0e6dd] to-[#e6c8b7]",
    },
    {
      title: "Private Shopping",
      experiences: [
        "Shopping at the historic La Samaritaine",
        "Shopping at Le Marais District",
        "Antique shopping at Puces de Saint-Ouen",
        "Shopping at La Vallée Village",
      ],
      color: "from-[#e6c8b7] to-[#f6eee9]",
    },
    {
      title: "Paris Highlight Experiences",
      experiences: [
        "Lunch/Dinner Seine River Boat Cruise",
        "Vintage Car Parisian Tour",
        "Paris full day magic: Montmartre, Nôtre Dame, Louvre, Seine River Cruise",
        "Paris Île de la Cité Experience: Notre Dame, St. Chapelle, La Conciergerie, Pont Neuf",
      ],
      color: "from-[#f6eee9] to-[#e6c8b7]",
    },
  ];

  return (
    <section  id="about" className="bg-[#faf7f5] py-20">
      <div className="w-full mx-auto xl:w-[75%] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Our Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            We curate unforgettable Parisian experiences — from timeless art and fine wine
            to exclusive shopping and breathtaking highlights of the City of Light.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {category.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base font-light">
                {category.experiences.map((exp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    {exp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandExperienceSection;
