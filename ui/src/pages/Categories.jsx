import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { ProductGrid } from "@/Comp/ProductGrid/ProductGrid";
import FunkySection from "@/Comp/FunckySection";
import FAQSection from "@/Comp/FAQSection";
import { useNavigate, useParams } from "react-router-dom";
import { FootballCatList, SareeCatList } from "@/Data/Products";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { cat } = useParams();
  const [catList, setCatList] = useState([]);
  const [PageTitle, setPageTitle] = useState("");
  const [PageDescription, setPageDescription] = useState("");

  useEffect(() => {
    if (cat === "sarees") {
      setCatList(SareeCatList);
      setPageTitle("Sarees");
      setPageDescription(
        "Discover our exclusive range of sarees crafted for elegance, comfort, and tradition."
      );
    } else if (cat === "football-jerseys") {
      setCatList(FootballCatList);
      setPageTitle("Football Jerseys");
      setPageDescription(
        "Premium football jerseys with high-quality fabric, breathable design, and team-accurate details."
      );
    }
  }, [cat]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
        {/* Banner Section */}
        <div className="max-w-6xl mx-auto text-center px-4 mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {PageTitle}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {PageDescription}
          </p>
        </div>

        {/* Filter + Sort Bar */}
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <Select>
            <SelectTrigger className="w-[200px] dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Price: Low to High</SelectItem>
              <SelectItem value="high">Price: High to Low</SelectItem>
              <SelectItem value="new">Newest</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[200px] dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="discount">Discount</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {catList.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 dark:bg-gray-800"
              style={{ paddingTop: "0" }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {product.desc}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-gray-900 dark:text-gray-200">
                    ₹{product.price}
                  </p>
                  <Button
                    onClick={() => navigate("/shop/4")} //Send product from here
                    variant="default"
                    className="bg-gray-900 dark:bg-white dark:text-gray-900 hover:opacity-90"
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <ProductGrid title="Similar Products" />
      <FAQSection />
      <FunkySection />
    </>
  );
};

export default CategoryPage;
