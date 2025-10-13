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

export function ProductGrid() {
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
      name: "Mechanical Keyboard",
      price: "$129",
      image: "/assets/Images/ProductGridImages/pg6.jpg",
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: "$129",
      image: "/assets/Images/ProductGridImages/pg7.jpg",
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      price: "$129",
      image: "/assets/Images/ProductGridImages/pg7.jpg",
    },
  ];
  //  "/assets/Images/b2.jpg",
  return (
    <div className="w-full p-20 py-6">
      <h3 className="text-2xl py-6 font-bold">
        Products you would like to see
      </h3>
      <Carousel opts={{ align: "start" }} className="w-full min-w-sm">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/5"
            >
              <div className="">
                <Card className="p-0">
                  <CardContent className="flex flex-col items-center justify-between h-72 p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover  mb-3"
                    />
                    <span className="text-lg font-semibold">
                      {product.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {product.price}
                    </span>
                    <Button className="mt-2 w-full cursor-pointer">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
