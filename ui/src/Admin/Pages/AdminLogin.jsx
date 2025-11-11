import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import bgImage from "/assets/Images/b2.jpg";
import { useDialogStoreAdmin } from "@/Store/AdminAuthStore";
import { LoginAdminAPI } from "../AdminServices/AdminAuth/AdminAuthAPI";

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const { user, authSuccess } = useDialogStoreAdmin();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    const params = {
      email: form.email,
      password: form.password,
    };

    try {
      const res = await LoginAdminAPI(params);
      if (res.status === 200) {
        authSuccess(res.data);
        toast.success("Login successful", {
          style: {
            background: "#61894d", // slate-800
            color: "white", // amber-400
            alignContent: "right",
            fontSize: "15px",
          },
        });

        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex h-screen items-center justify-center bg-gray-50 px-4 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 " />

      {/* Card */}
      <Card className="relative w-full max-w-md shadow-lg border border-gray-200 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Admin Login
          </CardTitle>
          <p className="text-sm text-gray-500">
            Enter your credentials to access dashboard
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@site.com"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                className="focus-visible:ring-[#61894d]/60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                disabled={loading}
                className="focus-visible:ring-[#61894d]/60"
              />
            </div>

            <Button
              type="button"
              onClick={handleLogin}
              className="w-full font-semibold mt-2 bg-[#61894d] hover:bg-[#527941] text-white transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
