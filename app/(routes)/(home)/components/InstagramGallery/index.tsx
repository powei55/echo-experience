"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const instagramPosts = [
  { id: 1, src: "/assets/127.jpg", link: "#", label: "Luxury Dining" },
  { id: 2, src: "/assets/132.jpg", link: "#", label: "Private Tours" },
  { id: 3, src: "/assets/brand.png", link: "#", label: "Fine Wine Tasting" },
  { id: 4, src: "/assets/118.jpg", link: "#", label: "Cultural Moments" },
  { id: 5, src: "/assets/123.jpg", link: "#", label: "Paris Nights" },
];

const InstagramGallery = () => {
  return (
    <>
      {/* Desktop Layout */}
      <section className="hidden bg-[#f9f7f5] py-16 w-full xl:flex justify-center">
        <div
          className="grid grid-cols-5 w-full gap-4 justify-center items-end px-6"
        >
          {instagramPosts.map((post) => {
            // HEIGHT RULES
            let heightClass = "h-[180px]"; // default small

            if (post.id === 3) {
              heightClass = "h-[260px]"; // tallest (center)
            } else if (post.id === 2 || post.id === 4) {
              heightClass = "h-[220px]"; // medium
            } else if (post.id === 1 || post.id === 5) {
              heightClass = "h-[180px]"; // smallest
            }

            return (
              <div
                key={post.id}
                className={`relative group overflow-hidden rounded-xl ${heightClass} shadow-md`}
              >
                <Image
                  src={post.src}
                  alt={post.label}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Mobile Layout */}
   <section className="bg-[#f9f7f5] py-12 w-full xl:hidden">
  <div
    className="flex flex-row items-end gap-3 px-4 overflow-x-auto scrollbar-none">
    {instagramPosts.map((post) => (
      <div
        key={post.id}
        className="
          relative flex-shrink-0 overflow-hidden rounded-xl shadow-md w-[100px] h-[150px] sm:w-[140px] sm:h-[170px] md:w-[200px] md:h-[190px]"
      >
        <Image
          src={post.src}
          alt={post.label}
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default InstagramGallery;
