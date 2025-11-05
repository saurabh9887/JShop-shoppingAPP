import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Card className="overflow-hidden rounded-2xl shadow-lg border-none">
            <CardContent className="p-0">
              <img
                src="/assets/Images/aboutus2.jpg"
                alt="About JShop"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left space-y-5"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
            We Don’t Just Sell Clothes — <br />
            <span className="text-[#61894d]">We Shape Confidence.</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            At <span className="font-semibold text-[#61894d]">JShop</span>,
            fashion isn’t about trends — it’s about *you*. Our mission is to
            bring timeless design and sustainable comfort together, helping you
            express who you are without saying a word.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            From handcrafted sarees to premium jerseys, every product in our
            collection reflects passion, precision, and authenticity. Proudly
            made in India. Loved worldwide.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Join thousands of JShop customers redefining how modern India
            dresses — one outfit at a time.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="pt-4 inline-block"
          >
            <Button
              size="lg"
              className="bg-[#61894d] cursor-pointer text-white font-semibold px-8 py-6 rounded-full hover:bg-[#4e703e]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Explore Collection
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
