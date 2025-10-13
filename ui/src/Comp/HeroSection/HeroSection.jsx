import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    image: "/assets/Images/b1.jpg",
    heading: "Build Your Dream Website",
    subheading: "Empower your business with modern web design.",
    cta: "Get Started",
  },
  {
    image: "/assets/Images/b2.jpg",
    heading: "Grow Your Online Presence",
    subheading: "Reach more customers with smart digital solutions.",
    cta: "Learn More",
  },
  {
    image: "/assets/Images/b3.jpg",
    heading: "Design. Develop. Deliver.",
    subheading: "We craft experiences that inspire.",
    cta: "Contact Us",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 text-white max-w-2xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.subheading}</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all cursor-pointer">
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
