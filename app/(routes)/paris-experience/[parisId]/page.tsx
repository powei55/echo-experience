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

  if (!experience) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f9f7f5] text-[#1c3934]">
        <p className="text-xl">Experience not found.</p>
      </main>
    );
  }

  // 👉 if experience.id === 3, render the detailed layout
  if (experience.id === 1 && experience.details) {
    const details = experience.details;
    return (
      <main className="w-full bg-[#f9f7f5] text-[#1c3934]">
        {/* Hero */}
        <section className="relative h-[60vh] w-full">
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
              className="text-3xl md:text-4xl font-bold text-[#f9f7f5] tracking-wider mb-4"
            >
              {experience.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-[#f9f7f5]/90 max-w-2xl text-lg md:text-xl font-light italic"
            >
              {experience.description}
            </motion.p>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-24 px-6 md:px-16 lg:px-32 space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col md:flex-row gap-12 md:items-stretch"
          >
            {/* Left - Images */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="relative w-full h-[320px] md:h-auto md:flex-1 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={experience.img}
                  alt={experience.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Extra images */}
              <div className="hidden md:grid md:grid-cols-3 gap-3 mt-4">
                {experience.extraImages.map((src, i) => (
                  <div
                    key={i}
                    className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`${experience.name} image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Description */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1c3934]">
                {details.title}
              </h2>

              {details.fullDescription.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-6 italic">
                  {p}
                </p>
              ))}

              <ul className="space-y-2 text-gray-800 mb-6 italic">
                {details.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-600 mb-2 italic">
                <strong>Duration:</strong> {details.duration}
              </p>
              <p className="text-sm text-gray-600 mb-2 italic">
                <strong>Cost:</strong> {details.cost}
              </p>

              <>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-white px-6 py-3 rounded-xl transition bg-[#1c3934] font-semibold hover:bg-[#294f49] cursor-pointer"
                >
                  Request this experience
                </button>

                <ReservationModal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  experienceName={experience.name}
                />
              </>
            </div>
          </motion.div>
        </section>

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
  }

  // Default layout for all others
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
            className="text-[25px] md:text-3xl font-bold text-[#f9f7f5] tracking-wider mb-4"
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

      {/* Basic Details Section */}
      <section className="py-20 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row gap-12">
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
            {experience.description}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="text-white px-6 py-3 rounded-xl transition bg-[#1c3934] font-semibold hover:bg-[#294f49] cursor-pointer"
          >
            Book this experience
          </button>

          <ReservationModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            experienceName={experience.name}
          />
        </div>
      </section>

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
