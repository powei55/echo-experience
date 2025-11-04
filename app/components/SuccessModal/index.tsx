"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface SuccessModalProps {
  show: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  show,
  onClose,
  title = "Merci! Your request has been received.",
  message = `Thank you for reaching out to Echo Experiences. 
  Our concierge team is reviewing your request and will contact you within 24 hours.
  For immediate help, email hello@echoexperiences.com or WhatsApp +33 7 60 00 55 18.`,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#1c3934]">{title}</h3>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">{message}</p>
            <button
              onClick={onClose}
              className="bg-[#1c3934] text-white px-6 py-2 rounded-xl hover:bg-[#294f49] transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
