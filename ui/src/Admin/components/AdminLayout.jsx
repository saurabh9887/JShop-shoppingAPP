import React, { useState } from "react";
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col bg-white border-r shadow-sm transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h1
            className={cn(
              "font-bold text-lg text-gray-800 transition-opacity duration-300",
              collapsed && "opacity-0"
            )}
          >
            Admin Panel
          </h1>
          {/* <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Menu className="h-5 w-5" />
          </Button> */}
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          <SidebarItem
            icon="fa-solid fa-gauge"
            label="Dashboard"
            collapsed={collapsed}
            onClick={() => navigate("/admin/dashboard")}
          />
          <SidebarItem
            icon="fa-solid fa-box"
            label="Products"
            collapsed={collapsed}
            onClick={() => navigate("/admin/products")}
          />
          <SidebarItem
            icon="fa-solid fa-bag-shopping"
            label="Orders"
            collapsed={collapsed}
            onClick={() => navigate("/admin/orders")}
          />
          <SidebarItem
            icon="fa-solid fa-users"
            label="Users"
            collapsed={collapsed}
            onClick={() => navigate("/admin/users")}
          />
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full flex items-center justify-start gap-3 text-gray-700 hover:text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <Card className="flex items-center justify-between px-4 py-3 rounded-none border-b shadow-sm">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h2 className="font-semibold text-lg text-gray-800">
              Admin Dashboard
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
          </div>
        </Card>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label, collapsed, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center w-full p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition"
    >
      <i className={`${icon} text-lg w-6 text-gray-600`} />
      {!collapsed && <span className="ml-3">{label}</span>}
    </button>
  );
};

export default AdminLayout;
