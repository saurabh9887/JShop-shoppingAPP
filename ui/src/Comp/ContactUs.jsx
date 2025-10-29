"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section id="contact-us" className="relative w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Info */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Let’s Connect 💬</h2>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Have questions, feedback, or just want to say hi? Our team at{" "}
            <span className="text-[#61894d] font-semibold">JShop</span> would
            love to hear from you. Fill out the form or reach out using the
            details below.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              📍 <span className="font-medium">Address:</span> Pune,
              Maharashtra, India
            </p>
            <p>
              📧 <span className="font-medium">Email:</span> support@jshop.in
            </p>
            <p>
              📞 <span className="font-medium">Phone:</span> +91 98765 43210
            </p>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          className="flex-1 bg-white shadow-md rounded-2xl p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61894d]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61894d]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#61894d]"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#61894d] text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Floating Decoration */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-24 h-24 bg-[#61894d]/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-10 right-10 w-24 h-24 bg-gray-300/30 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
};

export default ContactUs;
