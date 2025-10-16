import React from "react";
import HeaderTop from "./Navbar/HeaderTop";
import MainNavbar from "./Navbar/MainNavbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <HeaderTop />
      <MainNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
