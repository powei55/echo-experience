"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const experienceItems = [
  { label: "Museum Visit", href: "/museums" },
  { label: "Wine Tasting", href: "/wine-tasting" },
  { label: "Private Shopping", href: "/private-shopping" },
  { label: "Paris Highlight", href: "/paris-experience" },
];

const serviceItems = [
   { label: "Concierge Services", href: "/lifestyle-concierge" },
  { label: "Event Consultation", href: "/event-consultation" },
  { label: "Private Shopping Couture Access", href: "/shopping" },
  // { label: "Wine and Taste", href: "/wine-and-taste" },
  // { label: "Arrival and Departure", href: "/arrival-departure" },
  { label: "Echo Atelier", href: "/echo-atelier" },
];

const DesktopNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) =>
    setOpenDropdown(openDropdown === name ? null : name);

  return (
    <nav
      className={`hidden xl:flex fixed top-0 left-0 w-full z-50 px-16 transition-all duration-500 ${
        isScrolled
          ? "bg-white text-[#1c3934] shadow-md h-[85px]"
          : "bg-transparent text-white h-[110px]"
      }`}
    >
      <div className="w-full flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full relative">
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              isScrolled
                ? "scale-90 translate-y-[-4px]"
                : "scale-100 translate-y-0"
            }`}
          >
            <Image
              src={isScrolled ? "/assets/logo-black.png" : "/assets/logo-2.png"}
              alt="Echo Experiences Logo"
              width={220}
              height={220}
              priority
              className="object-contain transition-all duration-700 ease-in-out"
            />
          </div>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-12 h-full" ref={dropdownRef}>
          {/* EXPERIENCE */}
          <div className="relative">
            <div
              className="relative uppercase tracking-[2px] text-[11px] font-medium cursor-pointer flex items-center gap-1 group"
              onClick={() => toggleDropdown("experience")}
            >
              EXPERIENCES <FaChevronDown className="text-[10px]" />
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e6c8b7] transition-all duration-300 group-hover:w-full"></span>
            </div>
            {openDropdown === "experience" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 min-w-[180px] py-2 z-50">
                {experienceItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-100 text-[11px]"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SERVICES */}
          <div className="relative">
            <div
              className="relative uppercase tracking-[2px] text-[11px] font-medium cursor-pointer flex items-center gap-1 group"
              onClick={() => toggleDropdown("services")}
            >
              SERVICES <FaChevronDown className="text-[10px]" />
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e6c8b7] transition-all duration-300 group-hover:w-full"></span>
            </div>
            {openDropdown === "services" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 min-w-[200px] py-2 z-50">
              {serviceItems.map((item) => (
              <Link
                key={item.label}
                href={`/services${item.href}`}  // ✅ makes it absolute under /services
                className="block px-4 py-2 hover:bg-gray-100 text-[11px]"
                onClick={() => setOpenDropdown(null)}
              >
                {item.label}
              </Link>
            ))}
                          </div>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link
            href="/about-us"
            className="relative uppercase tracking-[2px] text-[11px] font-medium hover:text-current transition-all duration-300 group"
          >
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e6c8b7] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact-page"
            className="relative uppercase tracking-[2px] text-[11px] font-medium hover:text-current transition-all duration-300 group"
          >
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e6c8b7] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
