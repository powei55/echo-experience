"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c3934] text-white px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
       <FaCheckCircle className="text-green-500 w-16 h-16 mb-4" />
      </motion.div>
      <h1 className="text-3xl font-semibold mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        Thank you for booking your experience with Echo Experience. We’ve sent a confirmation to your email. Get ready for an unforgettable adventure!
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
