"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FunkySection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 text-gray-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_25%),radial-gradient(circle_at_80%_80%,white,transparent_25%)]"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-5xl font-extrabold leading-tight drop-shadow-md">
            Join the <span className="text-[#61894d]">Squad</span> 🔥
          </h2>
          <p className="text-lg text-gray-700 max-w-md">
            Unlock early access to new jerseys, exclusive drops, and
            members-only discounts. Be part of something bigger — your football
            community awaits!
          </p>

          <Button className="bg-[#61894d] text-white font-semibold hover:bg-green-700 transition-all">
            Join Now
          </Button>
        </motion.div>

        {/* Right Floating Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative">
            <img
              src="/assets/Images/ProductImg.png"
              alt="Jersey Display"
              className="w-[280px] md:w-[360px] drop-shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out"
            />
            {/* Floating Glow Effect */}
            <div className="absolute -inset-4 bg-[#61894d]/30 blur-3xl rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-24 h-24 bg-[#61894d]/30 rounded-full blur-3xl opacity-40"
      ></motion.div>
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-10 right-10 w-24 h-24 bg-gray-300/30 rounded-full blur-3xl opacity-30"
      ></motion.div>
    </section>
  );
}
