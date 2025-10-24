"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MobileNavLinks from "../MobileNavLinks";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex xl:hidden justify-between items-center py-6 px-6 text-white bg-transparent absolute top-0 left-0 w-full z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-3xl" />
          )}
        </button>

      </nav>

      <MobileNavLinks isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MobileNavbar;
