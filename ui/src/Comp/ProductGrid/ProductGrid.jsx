import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

export function ProductGrid() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      image: "/assets/Images/ProductGridImages/pg1.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
      image: "/assets/Images/ProductGridImages/pg2.jpg",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "$79",
      image: "/assets/Images/ProductGridImages/pg3.jpg",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: "$39",
      image: "/assets/Images/ProductGridImages/pg4.jpg",
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: "$129",
      image: "/assets/Images/ProductGridImages/pg5.jpg",
    },
    {
      id: 6,
      name: "Gaming Mouse",
      price: "$59",
      image: "/assets/Images/ProductGridImages/pg6.jpg",
    },
    {
      id: 7,
      name: "Noise Cancelling Earbuds",
      price: "$89",
      image: "/assets/Images/ProductGridImages/pg7.jpg",
    },
    {
      id: 8,
      name: "Portable Charger",
      price: "$49",
      image: "/assets/Images/ProductGridImages/pg8.jpg",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-28 py-12">
      <div className="max-w-7xl mx-auto">
        <h4 className="sm:text-3xl font-medium mb-6 text-gray-800">
          Products You Would Like to See
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
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center justify-between h-full p-3 sm:p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 sm:h-48 object-cover rounded-md mb-3"
                    />
                    <span className="text-base sm:text-lg font-semibold text-center">
                      {product.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {product.price}
                    </span>
                    <Button className="mt-3 w-full">
                      Add to Cart
                    </Button>
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
