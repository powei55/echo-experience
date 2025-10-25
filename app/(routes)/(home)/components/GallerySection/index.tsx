"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const GallerySection = () => {
  const images = [
    { src: "/assets/9.jpg", label: "Visit Museum", href: "/museums" },
    { src: "/assets/19.jpg", label: "Shopping", href: "/private-shopping/1" },
    { src: "/assets/18.jpg", label: "Vintage Car Tour", href: "/paris-experience/2" },
    { src: "/assets/21.jpg", label: "Wine Tasting with a Sommelier", href: "/wine-tasting/1" },
    { src: "/assets/6.jpg", label: "Events", href: "/paris-experience/2" },
  ];

  return (
    <section id="gallery" className="py-4 bg-[#e6c8b7]">
      <div className="w-full mx-auto py-4 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Explore Our Gallery
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Tall image on the left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden lg:col-span-1"
          >
            <Link href={images[0].href}>
              <Image
                src={images[0].src}
                alt={images[0].label}
                width={800}
                height={1200}
                className="w-full h-[550px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-base font-semibold">
                  {images[0].label}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Four smaller stacked images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 col-span-1 lg:col-span-2 h-[550px]">
            {images.slice(1).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl"
              >
                <Link href={img.href}>
                  <Image
                    src={img.src}
                    alt={img.label}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-sm font-medium">{img.label}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
