import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/assets/Images/b1.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At <span className="font-semibold text-[#61894d]">JShop</span>, we
            believe fashion should be more than just clothing — it’s a form of
            self-expression. Founded with a passion for style, comfort, and
            sustainability, we bring you a curated collection of high-quality
            apparel designed to make you feel confident every day.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            From timeless classics to modern trends, every piece in our
            collection is crafted with care and attention to detail. Our mission
            is simple — to make premium fashion accessible, effortless, and
            enjoyable for everyone.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We’re proud to be a{" "}
            <span className="font-medium">homegrown Indian brand</span>, trusted
            by thousands of customers who value quality and authenticity.
            Whether you're dressing up for a special occasion or keeping it
            casual, we’re here to help you look and feel your best — always.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Join us on our journey to redefine online shopping — one outfit at a
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
