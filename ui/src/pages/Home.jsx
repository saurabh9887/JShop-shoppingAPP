import AboutUs from "@/Comp/AboutUs/AboutUs";
import Footer from "@/Comp/Footer";
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
    </div>
  );
};

export default Home;
