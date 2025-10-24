"use client";

import React from "react";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <nav className="hidden xl:flex justify-between items-center py-6 px-10 text-white bg-transparent absolute top-0 left-0 w-full z-50">
      {/* Left - Logo or Title */}
      <div className="text-lg tracking-widest font-semibold uppercase">
        <Link href="/">echo experiences</Link>
      </div>

      {/* Right - Nav Links */}
      <div className="flex items-center gap-8">
       <Link
            href="/#experience"
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-300 tracking-widest text-sm"
          >
            EXPERIENCE
          </Link>

          <Link
            href="/#gallery"
            onClick={() => {
              document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="uppercase hover:text-gray-300 tracking-widest text-sm"
          >
            GALLERY
          </Link>

          <Link
            href="/#testimony"
            onClick={() => {
              document.getElementById("testimony")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="uppercase hover:text-gray-300 tracking-widest text-sm"
          >
            TESTIMONY
          </Link>

          <Link
            href="/#brand"
            onClick={() => {
              document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="uppercase hover:text-gray-300 tracking-widest text-sm"
          >
            BRAND
          </Link>

          <Link
            href="/#instagram"
            onClick={() => {
              document.getElementById("instagram")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="uppercase hover:text-gray-300 tracking-widest text-sm"
          >
            INSTAGRAM GALLERY
          </Link>

      </div>
    </nav>
  );
};

export default DesktopNavbar;
