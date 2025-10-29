import AboutUs from "@/Comp/AboutUs/AboutUs";
import ContactUs from "@/Comp/ContactUs";
import FAQSection from "@/Comp/FAQSection";
import Footer from "@/Comp/Footer";
import FunkySection from "@/Comp/FunckySection";
import HeroSlider from "@/Comp/HeroSection/HeroSection";
import HeaderTop from "@/Comp/Navbar/HeaderTop";
import MainNavbar from "@/Comp/Navbar/MainNavbar";
import { ProductGrid } from "@/Comp/ProductGrid/ProductGrid";
import { Testimonials } from "@/Comp/Testimonials/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <HeroSlider />
      <AboutUs />
      <ProductGrid title="New Arrivals" />
      <ProductGrid title="Today's Offers" />
      <Testimonials />
      <FAQSection />
      <ContactUs />
      <FunkySection />
    </div>
  );
};

export default Home;
