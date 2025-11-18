"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { museums } from "@/app/data/data";
import ReservationModal from "@/app/components/ReservationModal";


const MuseumDetailsPage = () => {
  const params = useParams();
  const museumId = Number(params.museumId);
  const museum = museums.find((m) => m.id === museumId);
  const [showModal, setShowModal] = useState(false);

  if (!museum) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f9f7f5] text-[#1c3934]">
        <p className="text-xl">Museum not found.</p>
      </main>
    );
  }

  // =====================================================
  // Unique Louvre Museum Page
  // =====================================================
  if (museum.name.toLowerCase().includes("louvre")) {
    return (
      <main className="w-full bg-[#f9f7f5] text-[#1c3934]">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src={museum.img}
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
              The Louvre Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-[#f9f7f5]/90 max-w-2xl text-lg md:text-xl font-light italic"
            >
              Step into the world’s greatest museum through two private journeys crafted for the art connoisseur.
            </motion.p>
          </div>
        </section>

        {/* Details Section (Louvre Experiences) */}
        <section className="py-24 px-6 md:px-16 lg:px-32 space-y-24">
          {/* Experience 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
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
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                Make your first visit to the Louvre a memorable one. Walk through the walls
                of this 800+ year-old monument and marvel at its most famous masterpieces.
                Your private art historian leads you from the medieval Louvre to ancient
                Egypt, through classical Greek sculptures like Venus de Milo and the Winged
                Victory of Samothrace, to the Mona Lisa herself. This is elegant storytelling
                — not a checklist — shaped by your curiosity.
              </p>
              <p className="text-gray-700 mb-6 italic">
                End your visit with lunch or dinner and a glass of champagne overlooking the iconic pyramid
                of the Louvre.
              </p>

              <ul className="space-y-2 text-gray-800 mb-6 italic">
                <li>• Private licensed art historian</li>
                <li>• Skip-the-line access</li>
                <li>• Hotel pickup to the Louvre</li>
                <li>• Lunch or dinner with a glass of champagne at the magnificent Café Marly</li>
              </ul>

              <p className="text-sm text-gray-600 mb-4 italic">
                <strong>Why it’s special:</strong> Seamless navigation, expert storytelling,
                and time to appreciate the icons rather than rush through them.
              </p>
              <p className="text-sm text-gray-600 mb-2 italic">
                <strong>Duration:</strong> 2.5 hours
              </p>
              <p className="text-sm text-gray-600 mb-2 italic">
                <strong>Cost:</strong> From €890 for two guests
              </p>
              <p className="text-sm text-gray-600 mb-8 italic">
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
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row-reverse gap-12 "
          >
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="relative w-full h-[320px] md:h-auto md:flex-1 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/121.jpg"
                  alt="The Louvre After Hours"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
                {/* Extra Images */}
            <div className="hidden md:grid md:grid-cols-3 gap-3 mt-4">
 
              <div className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/120.jpg"
                  alt="Gallery image 2"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/123.jpg"
                  alt="Gallery image 3"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/122.jpg"
                  alt="Gallery image 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1c3934]">
                The Louvre After Hours: A Night Among the Masters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                When the crowds have gone and the lights dim, the Louvre becomes something
                extraordinary — still, echoing, and utterly yours. This private after-hours
                experience grants exclusive access to the museum’s permanent collection,
                tailored to your taste, delivered by a senior curator and your personal Echo
                Experiences concierge.
              </p>
              <p className="text-gray-700 mb-6 italic">
                Begin with a glass of champagne overlooking the iconic pyramid before
                stepping into the quiet halls. Wander among the masters or enjoy an intimate
                dinner with a private chef after your visit — arranged upon request.
              </p>

              <ul className="space-y-2 text-gray-800 mb-6 italic">
                <li>• Private access after closing hours</li>
                <li>• Senior curator-led tour</li>
                <li>• Echo Experiences concierge</li>
                <li>• Optional private dinner experience</li>
              </ul>

              <p className="text-sm text-gray-600 mb-4 italic">
                <strong>Why it’s special:</strong> Intimacy with art — the world pauses just
                for you.
              </p>
              <p className="text-sm text-gray-600 mb-2 italic">
                <strong>Duration:</strong> 3 hours
              </p>
              <p className="text-sm text-gray-600 mb-2 italic">
                <strong>Guests:</strong> Up to 10 max (more on request)
              </p>
              <p className="text-sm text-gray-600 mb-8 italic">
                <strong>Cost:</strong> From €55,000 — availability upon request.
              </p>
                <>
              {/* CTA Button */}
              <button
                onClick={() => setShowModal(true)}
                className=" text-white px-6 py-3 rounded-xl  transition bg-[#1c3934] font-semibold hover:bg-[#294f49] cursor-pointer"
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
           
          </motion.div>
        </section>

        <div className="text-center py-16">
          <Link href="/museums" className="text-[#1c3934] underline hover:text-[#294f49]">
            ← Back to All Museums
          </Link>
        </div>
      </main>
    );
  }

  // =====================================================
  // General Page for All Other Museums (Dynamic)
  // =====================================================
  const details = museum.details;

  return (
    <main className="w-full bg-[#f9f7f5] text-[#1c3934]">
      {/* Hero */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={museum.img}
          alt={museum.name}
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
            {museum.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[#f9f7f5]/90 max-w-2xl text-lg md:text-xl font-light italic"
          >
            {museum.description}
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
     {/* Main Image */}
    <div className="relative w-full h-[320px] md:h-auto md:flex-1 rounded-3xl overflow-hidden shadow-lg">
      <Image
        src={museum?.img || ""}
        alt={museum?.name || ""}
        fill
        priority
        className="object-cover"
      />
    </div>

  {/* Extra Images */}
  {museum.extraImages && (
    <div className="hidden md:grid md:grid-cols-3 gap-3 mt-4">
      {museum.extraImages.map((src, i) => (
        <div
          key={i}
          className="relative h-[150px] md:h-[180px] rounded-2xl overflow-hidden shadow-md"
        >
          <Image
            src={src}
            alt={`${museum.name} image ${i + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )}
  </div>

    {/* Right - Description */}
    <div className="flex-1">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1c3934]">
        {details?.title}
      </h2>

      {details?.fullDescription?.map((paragraph, index) => (
        <p key={index} className="text-gray-700 leading-relaxed mb-6 italic">
          {paragraph}
        </p>
      ))}

      <ul className="space-y-2 text-gray-800 mb-6 italic">
        {details?.highlights?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="text-sm text-gray-600 mb-2 italic">
        <strong>Duration:</strong> {details?.duration}
      </p>
      <p className="text-sm text-gray-600 mb-2 italic">
        <strong>Cost:</strong> {details?.cost}
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
          experienceName={museum.name}
        />
      </>
    </div>
  </motion.div>
   </section>


      <div className="text-center pb-16">
        <Link
          href="/museums"
          className="text-[#1c3934] underline hover:text-[#294f49]"
        >
          ← Back to All Museums
        </Link>
      </div>
    </main>
  );
};

export default MuseumDetailsPage;
