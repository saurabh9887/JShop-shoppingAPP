import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OrderSuccessPopup({ show, onHide }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <Card className="max-w-sm w-full text-center shadow-xl rounded-2xl bg-white p-6">
              <CardContent className="flex flex-col items-center space-y-4">
                <CheckCircle className="text-green-500 w-14 h-14" />
                <h2 className="text-xl font-semibold">
                  Order Placed Successfully!
                </h2>
                <p className="text-gray-500 text-sm">
                  Thank you for your purchase. You’ll receive an email
                  confirmation shortly.
                </p>
                <Button onClick={onHide} className="mt-2 w-full">
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
