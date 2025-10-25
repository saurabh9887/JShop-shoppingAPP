import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Layout from "./Comp/Layout";
import CategoryPage from "./pages/Categories";
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
          {/* <Route path="login" element={<LoginPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
