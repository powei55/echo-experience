"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Museum Visits", path: "/museums" },
  { name: "Wine Tasting", path: "/wine-tasting" },
  { name: "Private Shopping", path: "/private-shopping" },
  { name: "Paris Highlights", path: "/paris-experience" },
];

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <section className="bg-[#c6c8b7]/30 py-8 px-6 flex flex-wrap justify-center gap-4 text-sm md:text-base font-semibold uppercase tracking-widest">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.path);

        return (
          <Link
            key={item.path}
            href={item.path}
            className={`px-6 py-2 rounded-full transition-all duration-300 border border-[#1c3934]
              ${
                isActive
                  ? "bg-[#1c3934] text-[#f9f7f5]"
                  : "bg-[#f9f7f5] text-[#1c3934] hover:bg-[#1c3934] hover:text-[#f9f7f5]"
              }
            `}
          >
            {item.name}
          </Link>
        );
      })}
    </section>
  );
}
