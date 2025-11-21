"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavLinks: React.FC<Props> = ({ isOpen, onClose }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-nav"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 40, damping: 12 }}
          className="fixed top-0 right-0 w-2/4 h-screen bg-[#f9f7f5] bg-opacity-90 text-black flex flex-col items-center justify-center gap-6 z-40 xl:hidden"
        >
          {/* EXPERIENCE DROPDOWN */}
          <div className="w-full flex flex-col items-center gap-2">
            <button
              onClick={() => toggleMenu("experience")}
              className="flex items-center gap-1 uppercase tracking-widest text-[11px] hover:text-gray-400"
            >
              EXPERIENCES
              < FaChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${
                  openMenu === "experience" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openMenu === "experience" && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2 text-[11px] text-gray-600"
                >
                  <Link href="/museums" onClick={onClose} className="hover:text-black">
                    Museum Visit
                  </Link>
                  <Link href="/wine-tasting" onClick={onClose} className="hover:text-black">
                    Wine Tasting
                  </Link>
                  <Link href="/private-shopping" onClick={onClose} className="hover:text-black">
                    Private Shopping
                  </Link>
                  <Link href="/paris-experience" onClick={onClose} className="hover:text-black">
                    Paris Highlight
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SERVICES DROPDOWN */}
          <div className="w-full flex flex-col items-center gap-2">
            <button
              onClick={() => toggleMenu("services")}
              className="flex items-center gap-1 uppercase tracking-widest text-[11px] hover:text-gray-400"
            >
              SERVICES
              < FaChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${
                  openMenu === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openMenu === "services" && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2 text-[11px] text-gray-600"
                >
                  <Link href="/services/lifestyle-concierge" onClick={onClose} className="hover:text-black">
                    Concierge Services
                  </Link>
                   <Link href="/services/event-consultation" onClick={onClose} className="hover:text-black">
                    Event Consultation
                  </Link>
                  <Link href="/services/shopping" onClick={onClose} className="hover:text-black">
                   Private Shopping
                   <br /> Couture Access
                  </Link>
                  {/* <Link href="services/wine-and-taste" onClick={onClose} className="hover:text-black">
                    Wine & Taste
                  </Link>
                  <Link href="services/arrival-departure" onClick={onClose} className="hover:text-black">
                    Arrival & Departure
                  </Link> */}
                  <Link href="/services/echo-atelier" onClick={onClose} className="hover:text-black">
                    Echo Atelier
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* OTHER LINKS */}
          <Link href="/about-us" onClick={onClose} className="uppercase hover:text-gray-400 tracking-widest text-[11px]">
            ABOUT-US
          </Link>

          <Link href="/contact-page" onClick={onClose} className="uppercase hover:text-gray-400 tracking-widest text-[11px]">
            CONTACT-US
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavLinks;

