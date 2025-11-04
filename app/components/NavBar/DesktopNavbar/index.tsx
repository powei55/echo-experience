"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DesktopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`hidden xl:flex fixed top-0 left-0 w-full z-50 px-16 transition-all duration-500 ${
        isScrolled
          ? "bg-white text-[#1c3934] shadow-md h-[90px]"
          : "bg-transparent text-white h-[110px]"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Left - Dynamic Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={isScrolled ? "/assets/logo-black.png" : "/assets/logo-2.png"}
            alt="Echo Experiences Logo"
            width={isScrolled ? 200 : 180}
            height={isScrolled ? 200 : 180}
            priority
            className="object-contain transition-all duration-500"
          />
        </Link>

        {/* Right - Navigation Links */}
        <div className="flex items-center gap-12">
          {[
            { label: "Experience", id: "experience", href: "/#experience" },
            { label: "Services", id: "services", href: "/#services" },
            { label: "About Us", id: "brand", href: "/about-us" },
            { label: "Contact Us", href: "/contact-page" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() =>
                item.id &&
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative uppercase tracking-[2px] text-[15px] font-medium hover:text-current transition-all duration-300 group"
            >
              {item.label}
              {/* Underline hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full bg-[#e6c8b7]"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
