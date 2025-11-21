"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParisExperienceSections } from "@/app/data/data";
import CategoryNav from "@/app/components/CategoryNav";

const ParisExperienceSection = () => {
  return (
    <main className="w-full bg-[#f9f7f5] text-[#1c3934]">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/assets/76.jpg"
          alt="Paris Highlights"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1c3934]/70 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[#f9f7f5] tracking-wider mb-4"
          >
            Paris Highlight Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[#f9f7f5]/90 max-w-2xl text-lg md:text-xl font-light italic"
          >
            Explore the heart of Paris — from scenic cruises to vintage car rides. 
            These hand-picked experiences bring you closer to the city’s charm, cuisine, 
            and timeless beauty.
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
       <CategoryNav />

      {/* Experiences Grid Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f9f7f5] to-[#c6c8b7]/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {ParisExperienceSections.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all"
            >
              <Link
                href={`/paris-experience/${experience.id}`}
                className="block h-full"
              >
                {/* Image Section */}
                <div className="relative w-full h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={experience.img}
                      alt={experience.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c3934]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-[#f9f7f5]">
                    <h3 className="text-sm font-semibold leading-snug">
                      {experience.name}
                    </h3>
                  </div>
                </div>

                {/* Description Section */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 text-center"
                >
                  <p className="text-[#1c3934]/70 mb-4 text-[12px] md:text-base leading-relaxed">
                    {experience.description}
                  </p>
                  {/* <p className="text-[#1c3934]/90 font-semibold mb-3">
                    From {experience.price}
                  </p> */}
                  <span className="inline-block px-5 py-2 bg-[#1c3934] text-[13px] text-[#f9f7f5] rounded-full hover:bg-[#294f49] transition">
                    View Details
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
       <div className="text-center py-16 ">
                 <Link href="/" className="text-[#1c3934] underline hover:text-[#294f49]">
                   ←  Back to Home
                 </Link>
               </div>
    </main>
  );
};

export default ParisExperienceSection;
