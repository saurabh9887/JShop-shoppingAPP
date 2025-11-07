import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { products } from "@/Data/Products";

export function ProductGrid({ title }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const navigate = useNavigate();

  return (
    <section className="w-full sm:px-6  lg:px-28 py-12">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-3xl md:text-4xl mb-6 text-center font-bold text-gray-800 dark:text-white">
          <Typewriter
            words={[title]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h4>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem
                key={product.id}
                className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                onClick={() => navigate("/shop/4")}
              >
                <Card
                  key={index}
                  className="overflow-hidden min-h-[550px] hover:shadow-xl transition-all duration-300 dark:bg-gray-800"
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
                    {product.category && (
                      <p className="text-xs text-gray-500">
                        {product.category}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {product.desc}
                    </p>

                    {product.rating && (
                      <p className="text-yellow-500 text-sm mb-2">
                        ⭐ {product.rating}/5
                      </p>
                    )}

                    <div className="flex justify-between items-center">
                      <p className="font-bold text-lg text-gray-900 dark:text-gray-200">
                        ₹{product.price}
                      </p>
                      <Button
                        onClick={() => navigate(`/shop/4`)}
                        variant="default"
                        className="bg-gray-900 dark:bg-white dark:text-gray-900 hover:opacity-90"
                      >
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
