"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavLinks: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 40, damping: 12 }}
          className="fixed top-0 right-0 w-2/4 h-screen bg-[#f9f7f5] bg-opacity-90 text-black flex flex-col items-center justify-center gap-8 z-40 xl:hidden"
        >
      <Link
            href="/#experience"
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
              onClose();
            }}
            className="hover:text-gray-300 tracking-widest text-sm"
          >
            EXPERIENCE
          </Link>

          <Link
            href="/#services"
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              onClose();
            }}
            className="uppercase hover:text-gray-300 tracking-widest text-sm"
          >
            SERVICES
          </Link>

          {/* <Link
            href="/#testimony"
            onClick={() => {
              document.getElementById("testimony")?.scrollIntoView({ behavior: "smooth" });
              onClose();
            }}
            className="uppercase hover:text-gray-300 tracking-widest text-sm"
          >
            TESTIMONY
          </Link> */}

          <Link
            href="/about-us"
            className="uppercase hover:text-gray-300 tracking-widest text-sm"
          >
            ABOUT-US
          </Link>

          <Link
            href="/contact-page"
            onClick={() => {
              document.getElementById("instagram")?.scrollIntoView({ behavior: "smooth" });
              onClose();
            }}
            className="uppercase hover:text-gray-300 tracking-widest text-sm"
          >
            CONTACT-US
          </Link>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavLinks;
