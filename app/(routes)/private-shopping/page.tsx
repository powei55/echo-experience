"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { shoppings } from "@/app/data/data";
import CategoryNav from "@/app/components/CategoryNav";

const PrivateShopping = () => {
  return (
    <main className="w-full bg-[#f9f7f5] text-[#1c3934]">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/assets/76.jpg"
          alt="Private Shopping in Paris"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1c3934]/70 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[#f9f7f5] tracking-wider mb-4"
          >
            Private Shopping
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[#f9f7f5]/90 max-w-2xl text-lg md:text-xl font-light italic"
          >
            Enjoy exclusive access to Paris’s most luxurious boutiques and
            hidden shopping treasures.
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <CategoryNav />

      {/* Shopping Grid Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f9f7f5] to-[#c6c8b7]/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {shoppings.map((shopping, index) => (
            <Link key={shopping.id} href={`/private-shopping/${shopping.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={shopping.img}
                      alt={shopping.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c3934]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-[#f9f7f5]">
                    <h3 className="text-xl font-semibold">{shopping.name}</h3>
                  </div>
                </div>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 text-center"
                >
                  {/* <p className="text-[#1c3934]/80 font-semibold mb-3">
                    From {shopping.price}
                  </p> */}
                  <button className="px-5 py-2 bg-[#1c3934] text-[#f9f7f5] rounded-full hover:bg-[#294f49] transition cursor-pointer">
                    View Details
                  </button>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PrivateShopping;
