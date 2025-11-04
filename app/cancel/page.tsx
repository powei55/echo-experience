"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTimesCircle } from "react-icons/fa";


export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c3934] text-white px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
      <FaTimesCircle className="text-red-500 w-16 h-16 mb-4" />
      </motion.div>
      <h1 className="text-3xl font-semibold mb-4">Payment Cancelled</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        Your payment was not completed. Don’t worry — you can try again or explore more experiences with Echo Experience.
      </p>
      <Link
        href="/"
        className="bg-white text-[#1c3934] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
