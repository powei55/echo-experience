"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ParisExperienceSections } from "@/app/data/data";
import ReservationModal from "@/app/components/ReservationModal";

const ExperienceDetailsPage = () => {
  const params = useParams();
  const parisId = Number(params.parisId);
  const experience = ParisExperienceSections.find((e) => e.id === parisId);
  const [showModal, setShowModal] = useState(false);

    const [loading, setLoading] = useState(false);

  if (!experience) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f9f7f5] text-[#1c3934]">
        <p className="text-xl">Experience not found.</p>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f9f7f5] text-[#1c3934]">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={experience.img}
          alt={experience.name}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1c3934]/70 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl  font-bold text-[#f9f7f5] tracking-wider mb-4"
          >
            {experience.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[#f9f7f5]/90 max-w-3xl text-lg md:text-xl font-light italic"
          >
            {experience.description}
          </motion.p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={experience.img}
            alt={experience.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{experience.name}</h2>
          <p className="text-gray-700 leading-relaxed mb-6 italic">
            {experience.description} Experience exclusive guided tours with expert
            curators and skip-the-line access.
          </p>
          {/* <p className="text-lg font-semibold text-[#1c3934] mb-6">
            Price: {experience.price}
          </p> */}

          <>
              {/* CTA Button */}
              <button
                onClick={() => setShowModal(true)}
                className="text-white px-6 py-3 rounded-xl transition bg-[#1c3934] font-semibold hover:bg-[#294f49] cursor-pointer"
              >
                Book this experience
              </button>

              {/* Reservation Modal */}
              <ReservationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                experienceName={experience.name}
              />
            </>
        </div>
      </section>

      {/* Back Link */}
      <div className="text-center pb-16">
        <Link
          href="/paris-experience"
          className="text-[#1c3934] underline hover:text-[#294f49]"
        >
          ← Back to All Experiences
        </Link>
      </div>
    </main>
  );
};

export default ExperienceDetailsPage;
