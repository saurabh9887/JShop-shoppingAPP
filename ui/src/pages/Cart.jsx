import React, { useEffect } from "react";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/Store/CartStore";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } =
    useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const totalPrice = getTotal();
  const discount = Math.round(totalPrice * 0.25);
  const shipping = totalPrice > 1000 ? 0 : 99;
  const grandTotal = totalPrice - discount + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-12 text-sm sm:text-base">
            Your cart is empty 😕
          </p>
        ) : (
          <>
            {/* === Cart Items === */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-5 gap-4"
                >
                  {/* Product Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md border"
                    />
                    <div className="flex flex-col">
                      <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        ₹{item.price.toLocaleString()}
                      </p>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price + Remove */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 mt-0 sm:mt-2 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* === Price Breakdown === */}
            <div className="mt-10 border-t pt-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
                Price Details
              </h2>
              <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Price ({cartItems.length} items)</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount (25%)</span>
                  <span className="text-green-600">
                    -₹{discount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Charges</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>
                    {shipping === 0 ? "Free" : `₹${shipping}`}
                  </span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-base sm:text-lg font-semibold">
                  <span>Grand Total</span>
                  <span>₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* === Checkout === */}
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 sm:gap-5">
              <button
                onClick={() => navigate("/")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg text-sm sm:text-base transition"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm sm:text-base transition"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
