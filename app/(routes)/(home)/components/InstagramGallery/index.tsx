"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const instagramPosts = [
  { id: 1, src: "/assets/22.jpg", link: "https://www.instagram.com/p/DPTKxEXiHdm/?utm_source=ig_web_copy_link", label: "Luxury Dining" },
  { id: 2, src: "/assets/8.jpg", link: "https://www.instagram.com/reel/DNit92douPk/?utm_source=ig_web_copy_link", label: "Private Tours" },
  { id: 3, src: "/assets/24.jpg", link: "https://www.instagram.com/p/DOLEgR2CBvV/?utm_source=ig_web_copy_link", label: "Fine Wine Tasting" },
  { id: 4, src: "/assets/9.jpg", link: "https://www.instagram.com/p/DPTKxEXiHdm/?utm_source=ig_web_copy_link", label: "Cultural Moments" },
  { id: 5, src: "/assets/3.jpg", link: "https://www.instagram.com/reel/DNit92douPk/?utm_source=ig_web_copy_link", label: "Paris Nights" },
  { id: 6, src: "/assets/12.jpg", link: "https://www.instagram.com/reel/DNit92douPk/?utm_source=ig_web_copy_link", label: "Fashion & Lifestyle" },
];

const InstagramGallery = () => {
  return (
    <section id="instagram" className="bg-[#f9f7f5] py-16 w-full">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Follow Our Journey
        </h2>
        <p className="text-gray-600 text-lg">
          Explore moments from our curated experiences on{" "}
          <span className="text-[#d47b4a] font-semibold">Instagram</span>.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-6 px-6"
      >
        {instagramPosts.map((post) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative group overflow-hidden rounded-2xl w-[80%] md:w-[250px] h-[320px] shadow-md"
          >
            <Image
              src={post.src}
              alt={post.label}
              width={250}
              height={320}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
              <p className="text-white text-sm font-medium mb-2">{post.label}</p>
              <div className="flex items-center gap-2 text-white">
                <FaInstagram />
                <span className="text-sm font-semibold">View on Instagram</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default InstagramGallery;
