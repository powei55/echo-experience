"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuccessModal from "@/app/components/SuccessModal";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  experienceName?: string;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  experienceName,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState(""); // ✅ add local state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzzklgdv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-lg relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
             onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-h-[75vh] overflow-y-auto pr-2"
            >
              <h2 className="text-xl font-semibold mb-2">Reservation Form</h2>

              <input
                type="hidden"
                name="Experience Name"
                value={experienceName || "General Inquiry"}
              />

              <div>
                <label className="block mb-1 font-medium">Full name *</label>
                <input
                  name="Full Name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} 
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email address *</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone number *</label>
                <input
                  name="Phone Number"
                  required
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Date of visit</label>
                <input
                  type="date"
                  name="Date of Visit"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Number of guests</label>
                <select name="Guests" className="w-full border rounded-lg p-2">
                  <option value="">Select...</option>
                  <option>Adults (18–99 years)</option>
                  <option>Youths (7–17 years)</option>
                  <option>Children (0–6 years)</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Interested in booking any of our other experiences?
                </label>
                <textarea
                  name="Other Experiences"
                  rows={3}
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Optional add-ons</label>
                <div className="space-y-2">
                  {[
                    "Professional photographer & videographer",
                    "Airport pick-up & drop-off",
                    "Personal concierge assistance",
                    "Private chauffeur services",
                    "Accommodation reservation",
                  ].map((addon) => (
                    <label key={addon} className="flex items-center gap-2">
                      <input type="checkbox" name="Add-ons" value={addon} />
                      {addon}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  How did you hear about us? *
                </label>
                <select
                  name="Referral Source"
                  required
                  className="w-full border rounded-lg p-2"
                >
                  <option value="">Select...</option>
                  <option>Web search</option>
                  <option>Referral</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>LinkedIn</option>
                  <option>Social networking</option>
                  <option>Hotel concierge</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  If Other, please specify
                </label>
                <input
                  name="Other Source"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white py-2 rounded-lg transition cursor-pointer bg-[#1c3934] font-semibold hover:bg-[#294f49]"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* ✅ Success modal now shows correct name */}
          <SuccessModal
            show={submitted}
            onClose={() => setSubmitted(false)}
            title="Merci! Your booking request has been received."
            message={`Dear ${fullName || "Dear guest"}, 

          Thank you for your interest in discovering France with Echo Experiences.

          We’ve received your request for ${
                        experienceName || "your selected experience"
                      }, and one of our concierge specialists will reach out within the next 24 hours to confirm availability and tailor your experience to your preferences.

          For immediate assistance, contact hello@echoexperiences.com or WhatsApp +33 7 60 00 55 18.`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
