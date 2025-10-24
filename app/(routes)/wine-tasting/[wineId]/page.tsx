"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { wines } from "@/app/data/data";

const WineDetailsPage = () => {
  const params = useParams();
  const wineId = Number(params.wineId);
  const wine = wines.find((w) => w.id === wineId);

  if (!wine) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f9f7f5] text-[#1c3934]">
        <p className="text-xl">wine details not found.</p>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f9f7f5] text-[#1c3934]">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={wine.img}
          alt={wine.name}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1c3934]/70 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[#f9f7f5] tracking-wider mb-4"
          >
            {wine.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[#f9f7f5]/90 max-w-2xl text-lg md:text-xl font-light"
          >
            {wine.description}
          </motion.p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={wine.img}
            alt={wine.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{wine.name}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {wine.description} Experience exclusive guided tours with expert
            curators and skip-the-line access.
          </p>
          <p className="text-lg font-semibold text-[#1c3934] mb-6">
            Price: {wine.price}
          </p>

          <button className="px-6 py-3 bg-[#1c3934] text-[#f9f7f5] rounded-full hover:bg-[#294f49] transition">
            Book This Experience
          </button>
        </div>
      </section>

      {/* Back Link */}
      <div className="text-center pb-16">
        <Link
          href="/private-shopping"
          className="text-[#1c3934] underline hover:text-[#294f49]"
        >
          ← Back to All Experiences
        </Link>
      </div>
    </main>
  );
};

export default WineDetailsPage;
