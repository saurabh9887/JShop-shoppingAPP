import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ShoppingBag, Users, Package } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#61894d]">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 text-sm">
            Monitor your store’s performance and recent activity
          </p>
        </div>
        <Button className="font-medium bg-[#61894d] hover:bg-[#557a45] text-white">
          Download Report
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Sales"
          value="₹84,230"
          icon={<BarChart3 className="h-5 w-5 text-[#61894d]" />}
          growth="+12.3% this month"
        />
        <StatCard
          title="Orders"
          value="1,204"
          icon={<ShoppingBag className="h-5 w-5 text-[#61894d]" />}
          growth="+5.1% this week"
        />
        <StatCard
          title="Products"
          value="342"
          icon={<Package className="h-5 w-5 text-[#61894d]" />}
          growth="Stable"
        />
        <StatCard
          title="Customers"
          value="832"
          icon={<Users className="h-5 w-5 text-[#61894d]" />}
          growth="+8 new today"
        />
      </div>

      {/* Charts & Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-[#61894d]">Sales Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-gray-400 text-sm border border-dashed rounded-md">
              Chart placeholder (Integrate Recharts here)
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-[#61894d]">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-gray-600 border-b">
                  <tr>
                    <th className="py-2">Order ID</th>
                    <th className="py-2">Customer</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <OrderRow
                    id="#ORD1023"
                    customer="Ravi Sharma"
                    amount="₹3,499"
                    status="Delivered"
                  />
                  <OrderRow
                    id="#ORD1024"
                    customer="Ananya Patel"
                    amount="₹2,150"
                    status="Pending"
                  />
                  <OrderRow
                    id="#ORD1025"
                    customer="Arjun Verma"
                    amount="₹4,780"
                    status="Cancelled"
                  />
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

// Components
const StatCard = ({ title, value, icon, growth }) => (
  <Card className="border-gray-200 hover:border-[#61894d] transition">
    <CardContent className="flex items-center justify-between p-4">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-semibold text-gray-800">{value}</h3>
        <p className="text-xs text-gray-400">{growth}</p>
      </div>
      <div className="bg-[#e8f0e5] p-3 rounded-full">{icon}</div>
    </CardContent>
  </Card>
);

const OrderRow = ({ id, customer, amount, status }) => {
  const color =
    status === "Delivered"
      ? "text-[#61894d]"
      : status === "Pending"
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-2">{id}</td>
      <td className="py-2">{customer}</td>
      <td className="py-2">{amount}</td>
      <td className={`py-2 text-right font-medium ${color}`}>{status}</td>
    </tr>
  );
};
