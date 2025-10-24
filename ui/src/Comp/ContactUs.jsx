"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactUs() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/Images/b1.jpg')", // <-- your background image here
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-[90%] md:w-[70%] lg:w-[50%]">
        <Card className="backdrop-blur-md bg-white/80 border-none shadow-xl rounded-2xl p-8">
          <CardContent className="space-y-5">
            <h3 className="text-3xl font-bold text-gray-900 text-center">
              Contact Us
            </h3>
            <p className="text-gray-700 text-center mb-6">
              We'd love to hear from you. Fill out the form and we'll get back
              to you soon!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  className="focus-visible:ring-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  className="focus-visible:ring-black"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                className="focus-visible:ring-black"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="focus-visible:ring-black"
              />
            </div>

            <div className="pt-4">
              <Button className="w-full bg-black text-white hover:bg-gray-900">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
