import BreadcrumbWithCustomSeparator from "@/Comp/BreadCrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, User } from "lucide-react";
import { ProductGrid } from "@/Comp/ProductGrid/ProductGrid";
import CounterComp from "@/Comp/CounterComp";
import FunkySection from "@/Comp/FunckySection";
import { useCartStore } from "@/Store/CartStore";
import { toast } from "sonner";

const FreeReturnSlab = () => {
  return (
    <div className="flex justify-between px-5 py-2 bg-[#61894d] text-white">
      <div className="left flex gap-6">
        <div className="flex gap-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span className="text-sm">+91 9370185533</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <span className="text-sm">saurabh@business.com</span>
        </div>
      </div>
      <div className="right flex gap-3 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-facebook-icon lucide-facebook"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram-icon lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-linkedin-icon lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-youtube-icon lucide-youtube"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      </div>
    </div>
  );
};

function ProductDetailsTabs() {
  const { addToCart } = useCartStore();
  return (
    <Card className="w-full bg-white shadow-sm">
      <CardHeader className="border-b p-0">
        <Tabs defaultValue="description" className="w-full">
          {/* Tabs Header */}
          <TabsList className="flex justify-between w-full bg-transparent border-b rounded-none">
            <TabsTrigger
              value="description"
              className="flex-1 text-center py-3 data-[state=active]:text-black text-gray-500 font-medium"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="sizeChart"
              className="flex-1 text-center py-3 data-[state=active]:text-black text-gray-500 font-medium"
            >
              Size Chart
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="flex-1 text-center py-3 data-[state=active]:text-black text-gray-500 font-medium"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              className="flex-1 text-center py-3 data-[state=active]:text-black text-gray-500 font-medium"
            >
              Additional Information
            </TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <CardContent className="p-6">
            <TabsContent value="description" className="mt-0">
              <CardContent className="p-6 space-y-4 text-gray-700">
                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900">
                  Napoli 2025–26 Third Jersey
                </h2>

                {/* Stock Info */}
                <p className="font-semibold flex items-center gap-2 text-gray-800">
                  Limited Stock Available ⏱️
                </p>

                {/* Product Details */}
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">Catalog Name:</span> Napoli
                    2025–26 de bruyne Third Jersey
                  </p>
                  <p>
                    <span className="font-semibold">Pattern:</span> Embroidery /
                    Sublimation Printed
                  </p>
                  <p>
                    <span className="font-semibold">Sleeve Length:</span> Short
                    Sleeves
                  </p>
                  <p>
                    <span className="font-semibold">Net Quantity (N):</span> 1
                  </p>
                  <p>
                    <span className="font-semibold">Sizes:</span> S, M, L, XL,
                    XXL
                  </p>
                </div>

                {/* Size Info */}
                <div className="bg-gray-50 rounded-lg p-4 border mt-4">
                  <p className="font-medium text-gray-800 mb-1">
                    📏 Size Details:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>M (Chest Size: 38 in, Length Size: 27 in)</li>
                    <li>L (Chest Size: 40 in, Length Size: 28 in)</li>
                    <li>XL (Chest Size: 42 in, Length Size: 29 in)</li>
                  </ul>
                </div>

                {/* Delivery Info */}
                <div className="space-y-1 mt-4">
                  <p>
                    <span className="font-semibold">Dispatch:</span> 2 Days
                  </p>
                  <p>
                    <span className="font-semibold">Delivery:</span> 7–12 Days
                  </p>
                  <p>
                    <span className="font-semibold">Return:</span> within 7 days
                    after delivery
                  </p>
                </div>

                {/* Product Story */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    De bruyne Napoli 2025–26 Third Jersey
                  </h3>
                  <p>
                    Elevate your support for Napoli with the exclusive 2025–26
                    De bruyne third jersey, a tribute to one of football’s most
                    electrifying talents, Kevin De bruyne.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4">
                    Design
                  </h4>
                  <p>
                    This jersey is an authentic reproduction of the one Napoli
                    players wore during the 2025–26 season. Featuring the club’s
                    black color scheme with blue accents.
                  </p>
                  <p>
                    This jersey is crafted from high-performance materials and
                    offers unparalleled comfort, breathability, and durability.
                    It is engineered to withstand match-day action and everyday
                    wear demands.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mt-4">
                    De Bruyne
                  </h4>
                  <p>
                    Kevin De Bruyne is known for his vision, creativity, and
                    pinpoint accuracy, making him one of the best midfielders in
                    the world. This jersey celebrates his contribution to Napoli
                    and his role in driving the team’s success.
                  </p>

                  <p>
                    Join the journey of Napoli and Kevin De Bruyne as they aim
                    for glory in the 2025–26 season with the exclusive home
                    jersey. Order now and be part of the excitement as Napoli
                    continues to make history on the pitch.
                  </p>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="sizeChart" className="mt-0">
              <CardContent className="p-6 space-y-5 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900">Size Chart</h2>
                <p className="text-gray-600">
                  Find your perfect fit using the detailed size guide below.
                  Measurements are in inches.
                </p>

                {/* Size Table */}
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                    <thead className="bg-gray-100 text-gray-800">
                      <tr>
                        <th className="py-3 px-4 text-left font-semibold border-b">
                          Size
                        </th>
                        <th className="py-3 px-4 text-left font-semibold border-b">
                          Chest (in)
                        </th>
                        <th className="py-3 px-4 text-left font-semibold border-b">
                          Length (in)
                        </th>
                        <th className="py-3 px-4 text-left font-semibold border-b">
                          Fit Suggestion
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b font-medium text-gray-900">
                          S
                        </td>
                        <td className="py-2 px-4 border-b">36</td>
                        <td className="py-2 px-4 border-b">26</td>
                        <td className="py-2 px-4 border-b">Slim Fit</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b font-medium text-gray-900">
                          M
                        </td>
                        <td className="py-2 px-4 border-b">38</td>
                        <td className="py-2 px-4 border-b">27</td>
                        <td className="py-2 px-4 border-b">Regular Fit</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b font-medium text-gray-900">
                          L
                        </td>
                        <td className="py-2 px-4 border-b">40</td>
                        <td className="py-2 px-4 border-b">28</td>
                        <td className="py-2 px-4 border-b">Relaxed Fit</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b font-medium text-gray-900">
                          XL
                        </td>
                        <td className="py-2 px-4 border-b">42</td>
                        <td className="py-2 px-4 border-b">29</td>
                        <td className="py-2 px-4 border-b">Relaxed Fit</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b font-medium text-gray-900">
                          XXL
                        </td>
                        <td className="py-2 px-4 border-b">44</td>
                        <td className="py-2 px-4 border-b">30</td>
                        <td className="py-2 px-4 border-b">Oversized Fit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Fit Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    💡 <span className="font-semibold">Tip:</span> For a looser
                    fit, choose one size larger than your usual.
                  </p>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <CardContent className="p-6 space-y-8 text-gray-700">
                {/* Header */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Customer Reviews
                  </h2>
                  <p className="text-gray-600">
                    See what others are saying about this product.
                  </p>
                </div>

                {/* Rating Summary */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-5 rounded-lg border space-y-4 md:space-y-0">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-bold text-yellow-500">
                      4.6
                    </span>
                    <div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={
                              i < 4
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        Based on 128 reviews
                      </p>
                    </div>
                  </div>

                  <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
                    Write a Review
                  </button>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {/* Review 1 */}
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <User className="w-5 h-5 text-gray-600" />
                      <p className="font-semibold text-gray-900">
                        Rahul Sharma
                      </p>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < 5
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      Great quality! The fabric feels premium and the fit is
                      perfect for football practice.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Reviewed on Oct 12, 2025
                    </p>
                  </div>

                  {/* Review 2 */}
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <User className="w-5 h-5 text-gray-600" />
                      <p className="font-semibold text-gray-900">Aman Verma</p>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      Delivery took a bit longer than expected, but the product
                      is authentic and worth it.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Reviewed on Oct 5, 2025
                    </p>
                  </div>

                  {/* Review 3 */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <User className="w-5 h-5 text-gray-600" />
                      <p className="font-semibold text-gray-900">Kunal Patil</p>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < 5
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">
                      Amazing detailing and comfort! Looks just like the
                      official Napoli kit.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Reviewed on Sept 29, 2025
                    </p>
                  </div>
                </div>

                {/* Review Form Placeholder */}
                <div className="bg-gray-50 rounded-lg p-5 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Want to share your experience?
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    You can add your review and help others make better
                    decisions.
                  </p>
                  <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
                    Add Your Review
                  </button>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="additional" className="mt-0">
              <CardContent className="p-6 space-y-6 text-gray-700">
                <h2 className="text-2xl font-bold text-gray-900">
                  Additional Information
                </h2>
                <p className="text-gray-600">
                  Learn more about the fabric, care instructions, and origin of
                  your Napoli 2025–26 Third Jersey.
                </p>

                {/* Key Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p>
                      <span className="font-semibold text-gray-900">
                        Material:
                      </span>{" "}
                      100% Premium Polyester
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">
                        Fit Type:
                      </span>{" "}
                      Athletic Fit
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">
                        Neck Type:
                      </span>{" "}
                      Round Neck
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">
                        Sleeve Type:
                      </span>{" "}
                      Short Sleeves
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p>
                      <span className="font-semibold text-gray-900">
                        Fabric Type:
                      </span>{" "}
                      Breathable & Quick-Dry Mesh
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">
                        Occasion:
                      </span>{" "}
                      Sports / Casual Wear
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">
                        Country of Origin:
                      </span>{" "}
                      India
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">
                        Package Contents:
                      </span>{" "}
                      1 x Jersey
                    </p>
                  </div>
                </div>

                {/* Wash & Care Instructions */}
                <div className="bg-gray-50 rounded-lg p-5 border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Wash & Care Instructions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Machine wash cold with similar colors.</li>
                    <li>Do not bleach or tumble dry.</li>
                    <li>Line dry in shade.</li>
                    <li>Iron on low temperature, if needed.</li>
                    <li>Do not dry clean.</li>
                  </ul>
                </div>

                {/* Sustainability or Extra Info */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    🌱 <span className="font-semibold">Eco Note:</span> This
                    jersey is made with eco-friendly dyes and sustainable
                    manufacturing practices to reduce environmental impact.
                  </p>
                </div>
              </CardContent>
            </TabsContent>
          </CardContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
}

function BottomFooterSection() {
  return (
    <div className="w-full h-40 flex justify-between py-8">
      <div className="flex flex-col">
        <span className="text-xl text-black">All over India delivery</span>
        <span className="text-sm text-gray-400 font-bold">
          All States Covered
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl text-black">Secure Payment</span>
        <span className="text-sm text-gray-400 font-bold">
          Pay with secure payment methods
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl text-black">7-day Return Policy</span>
        <span className="text-sm text-gray-400 font-bold">
          Products can be returned within 7 days.
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl text-black">24/7 Support</span>
        <span className="text-sm text-gray-400 font-bold">
          We'll respond to you within 24 hours
        </span>
      </div>
    </div>
  );
}

const SingleProduct = () => {
  // Store all images here

  // Track the currently displayed main image

  const { cartItems, addToCart } = useCartStore();
  const [count, setCount] = useState(0);

  console.log(cartItems);

  const [product, setProduct] = useState({
    id: 101,
    name: "Ohh kevin debruyn",
    description:
      "A luxurious handwoven silk saree featuring rich crimson hues and a golden zari border, perfect for festive and traditional occasions.",
    price: 2899,
    category: "Sarees",
    images: ["/assets/Images/ProductImg.png", "/assets/Images/ProductImg2.png"],
    stock: 12,
    rating: 4.7,
    reviews: 126,
    discount: 10, // percentage
    tags: ["ethnic", "silk", "traditional", "women"],

    // ✅ these below fields make it cart-suitable
    quantity: count,
    addedAt: new Date().toISOString(), // optional, helps for tracking
  });
  const [mainImage, setMainImage] = useState(product.images[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleAddToCart = () => {
    debugger;
    if (count === 0) {
      toast.warning("Please add atleast one product to the cart!", {
        style: {
          background: "#c9364a", // slate-800
          color: "white", // amber-400
          alignContent: "center",
          fontSize: "15px",
        },
      });
      return;
    } else if (count === 1) {
      if (
        cartItems.length !== 0 &&
        cartItems.filter((item) => item.id === product.id)
      ) {
        return;
      }
      toast.success("Product successfully added to the cart", {
        style: {
          background: "#61894d", // slate-800
          color: "white", // amber-400
          alignContent: "center",
          fontSize: "15px",
        },
      });
    }
    addToCart(product);

    // toast("Event has been created", {
    //   description: "Sunday, December 03, 2023 at 9:00 AM",
    //   action: {
    //     label: "Undo",
    //     onClick: () => console.log("Undo"),
    //   },
    // });
  };

  return (
    <div className="w-full px-20 py-16">
      {/* <FreeReturnSlab /> */}
      <div className="flex justify-between">
        <div>
          <BreadcrumbWithCustomSeparator />
        </div>
        <div className="flex gap-2 ">
          Share
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-10 w-full my-5">
        {/* Image */}
        <div className="flex-1">
          <div className="w-full">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300"
            />
          </div>

          <div className="flex gap-4 mt-4 items-center justify-center">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${
                  mainImage === img
                    ? "border-[#61894d] scale-105"
                    : "border-gray-300 hover:scale-105 hover:border-[#61894d]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1">
          {/* New Arriaval, and discount */}
          <div className="flex items-start gap-3 ">
            <span className="text-white bg-red-600 py-1 px-2 text-sm rounded-2xl">
              -25%
            </span>
            <span className="text-white bg-green-600 py-1 px-2 text-sm rounded-2xl">
              New Arrival
            </span>
          </div>

          {/* Product Name */}
          <div className="text-4xl font-medium py-5 ">
            Napoli 2025-26 De Bruyne Third Jersey
          </div>

          {/* Discounted Price */}
          <div className="text-3xl font-medium py-3 ">₹399.00</div>

          {/* Original Price, and availability of product */}
          <div className="flex justify-between">
            <span className="text-gray-600 line-through text-2xl">₹899</span>
            <span className="text-green-600">Available in stock</span>
          </div>

          {/* Size Chart */}

          <div className="my-8 flex gap-3 flex-col">
            <span className="text-gray-700 ">Size</span>
            {/* Sizes */}
            <div className="flex gap-8">
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                S
              </span>
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                M
              </span>
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                L
              </span>
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                XL
              </span>
              <span className="border border-green-600 py-1 px-6 text-sm cursor-pointer hover:bg-green-600 hover:text-white">
                XXL
              </span>
            </div>
          </div>

          {/* Counter */}
          <CounterComp count={count} setCount={setCount} />

          {/* Add to Cart and buy now buttons */}
          <div className="flex gap-8 p-2">
            <button
              onClick={handleAddToCart}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all cursor-pointer flex-1"
            >
              Add to cart
            </button>

            <button className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-4 px-6 rounded-lg transition-all cursor-pointer flex-1 border-2 border-green-700">
              Buy now
            </button>

            {/* <button className="">Add to cart</button>
            <button>Buy Now</button> */}
          </div>

          <div className="mt-6">
            <span className="text-sm">
              Categories: Jersey, Embroidery Jersey, Season Jerseys
            </span>
          </div>
        </div>
      </div>

      {/* Additional infomation section */}

      <div>
        <ProductDetailsTabs />
      </div>

      {/* You might also like section */}

      <div>
        <ProductGrid title="You might also like" />
      </div>

      <div className="my-4">
        <FunkySection />
      </div>

      <hr />
      <div>
        <BottomFooterSection />
      </div>
      <hr />
    </div>
  );
};

export default SingleProduct;
