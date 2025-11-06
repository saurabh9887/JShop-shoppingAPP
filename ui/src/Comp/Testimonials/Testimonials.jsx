import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      review:
        "Absolutely love the fabric quality! The fit was perfect, and delivery was faster than expected. I’ll definitely shop again.",
      role: "Verified Buyer",
    },
    {
      name: "Neha Patel",
      review:
        "Stylish and comfortable! The colors were exactly as shown. Totally worth the price.",
      role: "Fashion Blogger",
    },
    {
      name: "Rahul Mehta",
      review:
        "The best online clothing store I’ve tried. Great collection, smooth checkout, and excellent customer support!",
      role: "Customer",
    },
    {
      name: "Isha Gupta",
      review:
        "I’m obsessed with their new arrivals! The packaging was eco-friendly too — loved that detail.",
      role: "Repeat Customer",
    },
    {
      name: "Rohan Desai",
      review:
        "Trendy designs and really comfortable material. Got compliments the first time I wore it!",
      role: "First-time Buyer",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base">
          Trusted by thousands of happy shoppers across India.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <div className="p-3 sm:p-4 flex h-full">
                  <Card className="shadow-md sm:shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col justify-between rounded-xl">
                    <CardHeader>
                      <CardTitle className="text-lg text-[#61894d]">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                        {item.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-center justify-center">
                      <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base leading-relaxed">
                        “{item.review}”
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-6">
            <CarouselPrevious className="relative static translate-y-0" />
            <CarouselNext className="relative static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
