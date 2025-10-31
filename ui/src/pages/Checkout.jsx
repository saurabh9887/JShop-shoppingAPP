import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Wallet, IndianRupee, QrCode } from "lucide-react";
import { razorpay_Test_APIkey } from "@/Comp/BaseURL";

const CheckoutPage = () => {
  const amount = 999; // Example ₹999
  const currency = "INR";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: razorpay_Test_APIkey, // Replace with your Razorpay test key
      amount: amount * 100,
      currency,
      name: "JSHOP",
      description: "Order Payment",
      image: "/assets/logo.png",
      handler: (response) => {
        alert(
          `✅ Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Alpha",
        email: "alpha@example.com",
        contact: "9999999999",
      },
      theme: { color: "#16a34a" },
      method: { upi: true, wallet: true, card: true },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* LEFT: Billing + Payment Methods */}
        <div className="flex flex-col justify-between">
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                Billing Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 col-span-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 col-span-2"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 col-span-2"
                />
                <textarea
                  placeholder="Address"
                  rows="3"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 col-span-2"
                />
              </div>
            </CardContent>
          </Card>

          <Separator className="my-4" />

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Payment Methods
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center justify-center border border-gray-200 rounded-xl p-3 hover:border-green-500 hover:bg-green-50 transition">
                <QrCode className="h-6 w-6 text-green-600 mb-1" />
                <span className="text-sm text-gray-700">UPI</span>
              </div>
              <div className="flex flex-col items-center justify-center border border-gray-200 rounded-xl p-3 hover:border-green-500 hover:bg-green-50 transition">
                <Wallet className="h-6 w-6 text-green-600 mb-1" />
                <span className="text-sm text-gray-700">Wallet</span>
              </div>
              <div className="flex flex-col items-center justify-center border border-gray-200 rounded-xl p-3 hover:border-green-500 hover:bg-green-50 transition">
                <CreditCard className="h-6 w-6 text-green-600 mb-1" />
                <span className="text-sm text-gray-700">Card</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Order Summary + Pay Now */}
        <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 text-center">
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Product Name</span>
                <span>₹{amount}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-gray-900 text-lg">
                <span>Total</span>
                <span>₹{amount}</span>
              </div>
            </div>

            <Button
              onClick={handlePayment}
              className="w-full mt-8 py-6 text-base font-medium rounded-xl bg-green-600 hover:bg-green-700 transition text-white shadow-md"
            >
              <IndianRupee className="mr-2 h-5 w-5" /> Pay ₹{amount}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-3">
              Secure payments powered by Razorpay
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutPage;
