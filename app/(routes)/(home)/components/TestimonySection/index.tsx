"use client";

import Slider, { Settings } from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Travel Enthusiast, USA",
    text: "Echo Experiences made our Paris trip unforgettable. Every moment felt curated — from the museum tours to the evening wine tasting on the Seine. Truly world-class service.",
    image: "/assets/10.jpg",
  },
  {
    id: 2,
    name: "Léa Fontaine",
    role: "Art Collector, France",
    text: "The private Louvre tour was absolutely magical. I discovered hidden gems even as a Parisian. Their attention to detail and hospitality is beyond compare.",
    image: "/assets/11.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Entrepreneur, Singapore",
    text: "From the vintage car ride to the personalized shopping tour, Echo Experiences delivered excellence at every step. Paris has never felt more alive.",
    image: "/assets/8.jpg",
  },
];

const TestimonialSection = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    cssEase: "ease-in-out",
  };

  return (
    <section id="testimony" className="bg-gradient-to-b from-[#f9f7f5] to-[#e6c8b7] py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Discover how travelers from around the world experienced Paris through our eyes —
            where luxury meets authenticity.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="relative bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-10 text-center mx-6 overflow-visible">
                <div className="mb-4">
                  <p className="text-gray-700 italic mb-6 leading-relaxed text-base md:text-lg">
                    “{t.text}”
                  </p>
                  <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
