import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Layout from "./Comp/Layout";
import CategoryPage from "./pages/Categories";
import CartPage from "./pages/Cart";
import { Toaster } from "sonner";
import CheckoutPage from "./pages/Checkout";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import AdminLayout from "./Admin/components/AdminLayout";
import AdminLogin from "./Admin/Pages/AdminLogin";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import LoginDialog from "./pages/LoginPage";
import SignupDialog from "./pages/Signup";
import { useDialogStore } from "./Store/AuthStore";
import { useDialogStoreAdmin } from "./Store/AdminAuthStore";
import ProductList from "./Admin/Pages/Products/ProductsList";
// import LoginPage from "./pages/LoginPage";

const App = () => {
  const { loadUserFromStorage } = useDialogStore();
  const { user } = useDialogStoreAdmin();

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  // useEffect(() => {
  //   loadUserFromStorageAdmin();
  // }, []);

  const ProtectedAdminRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/admin/login" replace />;
    }
    return children;
  };
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
          <Route path="orders/:id" element={<OrderDetails />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
        </Route>
        {/* Admin Routes */}
        <Route path="/admin">
          <Route path="login" element={<AdminLogin />} />
          <Route
            path="dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="products"
            element={
              <ProtectedAdminRoute>
                <AdminLayout>
                  <ProductList />
                </AdminLayout>
              </ProtectedAdminRoute>
            }
          />
          {/* Example of nested admin routes */}
          {/* <Route path="products" element={<AdminProducts />} /> */}
          {/* <Route path="orders" element={<AdminOrders />} /> */}
        </Route>
        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <Toaster richColors position="top-center" /> */}
      <Toaster position="top-center" />
      <LoginDialog />
      <SignupDialog />
    </BrowserRouter>
  );
};

export default App;
