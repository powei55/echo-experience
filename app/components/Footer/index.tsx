"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1c3934] text-gray-100 px-6 md:px-20 py-16">
      {/* Centered Logo */}
      <div className="flex justify-center mb-12">
        <Image
          src="/assets/brand.png"
          alt="Echo Experience Logo"
          width={160}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Three Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {/* Left Column */}
        <div className="text-gray-200 flex flex-col gap-6">
          <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wider text-white">
            Elevate Your Senses, Discover Echo Experience.
          </h3>
          <p className="text-base md:text-lg text-gray-300 leading-7">
            Echo Experience curates immersive journeys for those who crave
            authenticity and refinement. From bespoke escapes to cultural
            odysseys, we design meaningful experiences that echo long after
            they’re lived. Every moment is tailored, every detail considered —
            because true luxury lies in connection.
          </p>

          <div className="flex items-center gap-5 text-3xl text-gray-400">
            <FaCcMastercard className="hover:text-white transition" />
            <FaCcVisa className="hover:text-white transition" />
            <FaCcAmex className="hover:text-white transition" />
          </div>
        </div>

        {/* Middle Column */}
        <div className="text-gray-300 flex flex-col gap-4 md:items-center">
          <h4 className="text-lg md:text-base font-semibold uppercase tracking-wider text-white mb-2">
            Explore
          </h4>
          <ul className="space-y-3 text-base md:text-base">
            <li>
              <Link href="/#brand" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-white transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="text-gray-300 flex flex-col gap-4">
          <h4 className="text-lg md:text-base font-semibold uppercase tracking-wider text-white mb-2">
            Contact
          </h4>
          <p className="text-base md:text-base">
            Echo Experience Agency
            <br />
            Maison of Bespoke Journeys
            <br />
            23 Rue des Horizons, Paris, France
          </p>
          <p className="text-base md:text-base">
            contact@echoexperience.com
            <br />
            +33 (0) 695 716 052
            <br />
            +33 (0) 642 714 490
          </p>
          <p className="text-sm italic text-gray-400">
            ps: Feel free to WhatsApp us
          </p>
          <div className="flex gap-5 mt-2 text-lg text-gray-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/echo.experiences?igsh=MW9uZnRsNTRxMmE3OA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-sm md:text-xs text-gray-400">
        <p>Designed by ZedLabs</p>
        <p>@echoexperience</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-transparent border border-gray-400 text-gray-200 p-2 rounded-full hover:bg-gray-200 hover:text-[#1c3934] transition"
        aria-label="Back to top"
      >
        <IoIosArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
