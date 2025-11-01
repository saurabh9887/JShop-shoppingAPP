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
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                onClick={() => navigate("shop/4")}
              >
                <Card
                  className="h-full hover:shadow-2xl cursor-pointer transition-shadow duration-300"
                  style={{ padding: "0" }}
                >
                  <CardContent
                    style={{ padding: "0" }}
                    className="flex flex-col items-center justify-between h-full "
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ borderRadius: "5px 5px 0px 0px" }}
                      className="w-full h-40 sm:h-48 object-cover mb-3"
                    />
                    <span className="text-base sm:text-lg font-semibold text-center px-3">
                      {product.name}
                    </span>
                    <span className="text-sm text-gray-600 py-4">
                      {product.price}
                    </span>
                    {/* <Button className="mt-3 w-full">Add to Cart</Button> */}
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
