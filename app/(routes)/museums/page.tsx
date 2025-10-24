"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { museums } from "@/app/data/data";

const MuseumVisitsPage = () => {
  return (
    <main className="w-full bg-[#f9f7f5] text-[#1c3934]">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/assets/9.jpg"
          alt="Museum Visits"
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
            Museum Visits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[#f9f7f5]/90 max-w-2xl text-lg md:text-xl font-light"
          >
            Experience the timeless elegance and art of Paris with our curated museum tours.
          </motion.p>
        </div>
      </section>

      {/* Museum Grid Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#f9f7f5] to-[#c6c8b7]/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {museums.map((museum, index) => (
            <Link href={`/museums/${museum.id}`} key={museum.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={museum.img}
                      alt={museum.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c3934]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-[#f9f7f5]">
                    <h3 className="text-xl font-semibold">{museum.name}</h3>
                  </div>
                </div>

                {/* Description + Details */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 text-center"
                >
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {museum.description}
                  </p>
                  <p className="text-[#1c3934]/80 font-semibold mb-3">
                    From {museum.price}
                  </p>
                  <button className="px-5 py-2 bg-[#1c3934] text-[#f9f7f5] rounded-full hover:bg-[#294f49] transition">
                    View Details
                  </button>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MuseumVisitsPage;
