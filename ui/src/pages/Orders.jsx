import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const orders = [
  {
    id: "ORD-1024",
    product: "Napoli 2025-26 De Bruyne Third Jersey",
    date: "Nov 3, 2025",
    status: "Delivered",
    price: "₹899",
  },
  {
    id: "ORD-1025",
    product: "Adidas X Crazyfast.1 FG Boots",
    date: "Nov 4, 2025",
    status: "Shipped",
    price: "₹12,499",
  },
  {
    id: "ORD-1026",
    product: "Nike Elite Football Socks",
    date: "Nov 5, 2025",
    status: "Processing",
    price: "₹799",
  },
];

const statusColor = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
};

export default function Orders() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>

        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    {order.product}
                  </CardTitle>
                  <Badge className={statusColor[order.status]}>
                    {order.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm text-gray-500">
                  Order ID: {order.id}
                </CardDescription>
              </CardHeader>

              <Separator />

              <CardContent className="flex items-center justify-between pt-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Ordered on {order.date}
                  </p>
                  <p className="font-medium mt-1">{order.price}</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
