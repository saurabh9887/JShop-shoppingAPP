import Footer from "@/Comp/Footer";
import HeroSlider from "@/Comp/HeroSection/HeroSection";
import HeaderTop from "@/Comp/Navbar/HeaderTop";
import MainNavbar from "@/Comp/Navbar/MainNavbar";
import { ProductGrid } from "@/Comp/ProductGrid/ProductGrid";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <HeaderTop />
      <MainNavbar />
      <HeroSlider />
      <ProductGrid />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Home;
