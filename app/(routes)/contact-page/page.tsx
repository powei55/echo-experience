// "use client";

// const ContactPage = () => {
  
//   return (
//     <main className="w-full min-h-screen bg-[#f9f7f5] text-[#1c3934]">
//       {/* Header */}
//       <section className="relative h-[50vh] bg-[#1c3934] flex flex-col justify-center items-center text-center text-[#f9f7f5] px-6">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
//         <p className="text-[#c6c8b7] text-lg md:text-xl max-w-2xl">
//           We’d love to hear from you! Whether it’s a question, feedback, or
//           partnership inquiry — let’s connect.
//         </p>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-20 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row gap-12">
//         <div className="flex-1">
//           <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block font-semibold mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 className="w-full border border-[#c6c8b7] rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#1c3934] outline-none"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block font-semibold mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full border border-[#c6c8b7] rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#1c3934] outline-none"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block font-semibold mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 required
//                 className="w-full border border-[#c6c8b7] rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#1c3934] outline-none resize-none"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="bg-[#1c3934] text-[#f9f7f5] px-6 py-3 rounded-full font-semibold hover:bg-[#294f49] transition-all"
//             >
//               Send Message
//             </button>
//           </form>

//           {status && <p className="mt-4 text-sm text-[#1c3934]">{status}</p>}
//         </div>

//         {/* Google Map Embed */}
//         <div className="flex-1 h-[400px] rounded-2xl overflow-hidden shadow-lg">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.818296142325!2d2.354092015675089!3d48.85661407928716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06b7b2b9%3A0x6b69d4bfa2a6ea09!2sParis%2C%20France!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactPage;

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const ContactPage = () => {
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("sending...");

//     const form = e.currentTarget;
//     const data = new FormData(form);

//     try {
//       const response = await fetch("https://formspree.io/f/xdkpabyg", {
//         method: "POST",
//         body: data,
//         headers: { Accept: "application/json" },
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         form.reset();
//       } else {
//         setStatus("Oops! Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setStatus("Network error. Please try again later.");
//     }
//   };

//   return (
//     <main className="bg-[#f9f7f5] text-[#1c3934] min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/7.jpg')] bg-cover bg-center">
//         <div className="absolute inset-0 bg-[#1c3934]/70"></div>
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative text-white text-5xl md:text-6xl font-bold tracking-wide text-center"
//         >
//           Get in Touch
//         </motion.h1>
//       </section>

//       {/* Contact Info */}
//       <section className="py-20 px-6 md:px-12 lg:px-24 grid md:grid-cols-3 gap-10 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
//         >
//           <FaPhoneAlt className="text-4xl mx-auto text-[#1c3934] mb-4" />
//           <h3 className="text-lg font-semibold mb-2">Call Us</h3>
//           <p className="text-gray-700">+33 1 23 45 67 89</p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
//         >
//           <FaEnvelope className="text-4xl mx-auto text-[#1c3934] mb-4" />
//           <h3 className="text-lg font-semibold mb-2">Email Us</h3>
//           <p className="text-gray-700">info@echoexperience.com</p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
//         >
//           <FaMapMarkerAlt className="text-4xl mx-auto text-[#1c3934] mb-4" />
//           <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
//           <p className="text-gray-700">12 Rue de Rivoli, 75004 Paris, France</p>
//         </motion.div>
//       </section>

//       {/* Contact Form */}
//       <section className="bg-[#c6c8b7]/20 py-20 px-6 md:px-12 lg:px-24">
//         <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-center mb-10"
//           >
//             Send Us a Message
//           </motion.h2>

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Full Name */}
//             <div className="relative">
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 autoComplete="off"
//                 placeholder=" "
//                 className="peer w-full border-b-2 border-[#1c3934]/30 focus:border-[#1c3934] outline-none py-3 bg-transparent"
//               />
//               <label
//                 htmlFor="name"
//                 className="left-0 text-gray-500 text-base transition-all duration-300 
//                 top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
//                 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1c3934]"
//               >
//                 Full Name
//               </label>
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 autoComplete="off"
//                 placeholder=" "
//                 className="peer w-full border-b-2 border-[#1c3934]/30 focus:border-[#1c3934] outline-none py-3 bg-transparent"
//               />
//               <label
//                 htmlFor="email"
//                 className="left-0 text-gray-500 text-base transition-all duration-300 
//                 top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
//                 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1c3934]"
//               >
//                 Email Address
//               </label>
//             </div>

//             {/* Message */}
//             <div className="relative md:col-span-2">
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 required
//                 placeholder=" "
//                 className="peer w-full border-b-2 border-[#1c3934]/30 focus:border-[#1c3934] outline-none py-3 bg-transparent resize-none"
//               ></textarea>
//               <label
//                 htmlFor="message"
//                 className="left-0 text-gray-500 text-base transition-all duration-300 
//                 top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
//                 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1c3934]"
//               >
//                 Your Message
//               </label>
//             </div>

//             {/* Submit Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="cursor-pointer md:col-span-1 mt-4 bg-[#1c3934] text-[#f9f7f5] py-3 font-semibold hover:bg-[#294f49] transition"
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </div>
//       </section>

//       {/* ✅ Popup Confirmation Modal */}
//       {status === "Message sent successfully!" && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4"
//           >
//             <h3 className="text-2xl font-semibold text-[#1c3934] mb-3">Merci!</h3>
//             <p className="text-gray-700 leading-relaxed mb-5">
//               Thank you for reaching out to <strong>Echo Experiences</strong>.
//               <br />
//               Our concierge team will contact you within 24 hours to confirm your request.
//               <br />
//               <br />
//               For immediate assistance, please contact us at{" "}
//               <a
//                 href="mailto:hello@echoexperiences.com"
//                 className="text-[#1c3934] font-medium"
//               >
//                 hello@echoexperiences.com
//               </a>{" "}
//               or via WhatsApp at{" "}
//               <a
//                 href="https://wa.me/33760005518"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-[#1c3934] font-medium"
//               >
//                 +33 7 60 00 55 18
//               </a>.
//             </p>
//             <button
//               onClick={() => setStatus("")}
//               className="mt-2 px-6 py-2 rounded-full bg-[#1c3934] text-white hover:bg-[#294f49] transition-all"
//             >
//               Close
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default ContactPage;

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SuccessModal from "@/app/components/SuccessModal";


const ContactPage = () => {
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending...");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xzzklgdv", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowModal(true);
        setStatus("");
        form.reset();
      }
 else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <main className="bg-[#f9f7f5] text-[#1c3934] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/assets/7.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#1c3934]/70"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-5xl md:text-6xl font-bold tracking-wide text-center"
        >
          Get in Touch
        </motion.h1>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 md:px-12 lg:px-24 grid md:grid-cols-3 gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
        >
          <FaPhoneAlt className="text-4xl mx-auto text-[#1c3934] mb-4" />
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <p className="text-gray-700">+33 1 23 45 67 89</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
        >
          <FaEnvelope className="text-4xl mx-auto text-[#1c3934] mb-4" />
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <p className="text-gray-700">info@echoexperience.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition"
        >
          <FaMapMarkerAlt className="text-4xl mx-auto text-[#1c3934] mb-4" />
          <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-700">12 Rue de Rivoli, 75004 Paris, France</p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#c6c8b7]/20 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-10"
          >
            Send Us a Message
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="off"
                placeholder=" "
                className="peer w-full border-b-2 border-[#1c3934]/30 focus:border-[#1c3934] outline-none py-3 bg-transparent"
              />
              <label
                htmlFor="name"
                className="left-0 text-gray-500 text-base transition-all duration-300 
                top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1c3934]"
              >
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="off"
                placeholder=" "
                className="peer w-full border-b-2 border-[#1c3934]/30 focus:border-[#1c3934] outline-none py-3 bg-transparent"
              />
              <label
                htmlFor="email"
                className="left-0 text-gray-500 text-base transition-all duration-300 
                top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1c3934]"
              >
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative md:col-span-2">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder=" "
                className="peer w-full border-b-2 border-[#1c3934]/30 focus:border-[#1c3934] outline-none py-3 bg-transparent resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="left-0 text-gray-500 text-base transition-all duration-300 
                top-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1c3934]"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="cursor-pointer md:col-span-1 mt-4 bg-[#1c3934] text-[#f9f7f5] py-3 font-semibold hover:bg-[#294f49] transition"
            >
              Send Message
            </motion.button>

            {/* Status Message */}
            {status && (
              <p className="md:col-span-2 text-center mt-4 text-sm text-gray-600">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </main>
  );
};

export default ContactPage;

