import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Layout from "./Comp/Layout";
import CategoryPage from "./pages/Categories";
import CartPage from "./pages/Cart";
import { Toaster } from "sonner";
import CheckoutPage from "./pages/Checkout";
import Orders from "./pages/Orders";
// import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all main routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop/:id" element={<SingleProduct />} />
          <Route path="category/:cat" element={<CategoryPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="orders" element={<Orders />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
      {/* <Toaster richColors position="top-center" /> */}
      <Toaster position="top-center" />
    </BrowserRouter>
  );
};

export default App;
