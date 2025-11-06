import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const orders = [
  {
    id: "ORD-1024",
    product: "Napoli 2025-26 De Bruyne Third Jersey",
    image: "/assets/Images/ProductImg.png",
    date: "Nov 3, 2025",
    status: "Delivered",
    price: "₹899",
    quantity: 1,
    payment: "Paid via UPI",
    address: "221B Baker Street, London",
    estimatedDelivery: "Nov 5, 2025",
  },
  {
    id: "ORD-1025",
    product: "Adidas X Crazyfast.1 FG Boots",
    image: "/assets/Images/BootsImg.png",
    date: "Nov 4, 2025",
    status: "Shipped",
    price: "₹12,499",
    quantity: 1,
    payment: "Paid via Credit Card",
    address: "45/9 MG Road, Mumbai",
    estimatedDelivery: "Nov 8, 2025",
  },
];

const statusColor = {
  Delivered: "bg-green-100 text-green-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-yellow-100 text-yellow-700",
};

const statusProgress = {
  Processing: 40,
  Shipped: 75,
  Delivered: 100,
};

export default function OrderDetails() {
  const { id } = useParams();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-600">
        <p className="text-lg mb-4">Order not found</p>
        <Link to="/orders">
          <Button variant="outline">Go Back</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/orders"
          className="inline-flex items-center text-sm mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Orders
        </Link>

        <Card className="border border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold">
                {order.product}
              </CardTitle>
              <Badge className={statusColor[order.status]}>
                {order.status}
              </Badge>
            </div>
            <p className="text-sm text-gray-500 mt-1">Order ID: {order.id}</p>
          </CardHeader>

          <Separator />

          <CardContent className="pt-6 space-y-6">
            {/* Product Info */}
            <div className="flex gap-6">
              <img
                src={order.image}
                alt={order.product}
                className="w-28 h-28 rounded-lg object-cover border"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-lg font-medium">{order.product}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {order.quantity}
                  </p>
                </div>
                <p className="font-semibold text-lg">{order.price}</p>
              </div>
            </div>

            <Separator />

            {/* Order Status */}
            <div>
              <h3 className="font-semibold mb-2">Delivery Status</h3>
              <Progress value={statusProgress[order.status]} className="h-2" />
              <p className="text-sm text-gray-500 mt-2">
                Estimated Delivery: {order.estimatedDelivery}
              </p>
            </div>

            <Separator />

            {/* Shipping & Payment Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <p className="text-gray-600 text-sm">{order.address}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Payment Info</h3>
                <p className="text-gray-600 text-sm">{order.payment}</p>
              </div>
            </div>

            <Separator />

            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
