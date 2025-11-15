import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const AddProductDialog = ({ show, onHide, onSubmit, modelRequestData }) => {
  const [form, setForm] = useState({
    productID: "",
    productKeyID: "",
    name: "",
    originalPrice: "",
    discountedPrice: "",
    discount: "",
    size: "",
    counter: "",
    inStock: false,
    tags: "",
    categories: "",
    images: "",
    description: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const payload = {
      ...form,
      originalPrice: Number(form.originalPrice),
      discountedPrice: Number(form.discountedPrice),
      discount: Number(form.discount),
      counter: Number(form.counter),
      inStock: Boolean(form.inStock),
      tags: form.tags.split(",").map((t) => t.trim()),
      categories: form.categories.split(",").map((c) => c.trim()),
      images: form.images.split(",").map((i) => i.trim()),
    };

    if (onSubmit) onSubmit(payload);
  };

  return (
    <Dialog open={show} onOpenChange={onHide}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {modelRequestData.Action === null ? "Add " : "Update "}
            Product
          </DialogTitle>
          <DialogDescription>
            Fill in all fields to{" "}
            {modelRequestData.Action === null ? "Add " : "Update "}
            product entry.
          </DialogDescription>
        </DialogHeader>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Name */}
          <div className="space-y-1">
            <Label>
              Name <span className="text-red-600">*</span>
            </Label>
            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Premium Hoodie"
            />
          </div>

          {/* Size */}
          <div className="space-y-1">
            <Label>Size</Label>
            <Input
              value={form.size}
              onChange={(e) => handleChange("size", e.target.value)}
              placeholder="L / M / XL"
            />
          </div>

          {/* Original Price */}
          <div className="space-y-1">
            <Label>
              Original Price (₹) <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Original Price (₹)"
              value={form.originalPrice}
              onChange={(e) => handleChange("originalPrice", e.target.value)}
            />
          </div>

          {/* Discounted Price */}
          {/* <div className="space-y-1">
            <Label>Discounted Price (₹)</Label>
            <Input
              type="text"
              placeholder="Discounted Price (₹)"
              value={form.discountedPrice}
              onChange={(e) => handleChange("discountedPrice", e.target.value)}
            />
          </div> */}

          {/* Discount */}
          <div className="space-y-1">
            <Label>Discount (%)</Label>
            <Input
              type="text"
              placeholder="Discount (%)"
              value={form.discount}
              onChange={(e) => handleChange("discount", e.target.value)}
            />
          </div>

          {/* Counter */}
          <div className="space-y-1">
            <Label>
              Stock Count <span className="text-red-600">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Stock Count"
              value={form.counter}
              onChange={(e) => handleChange("counter", e.target.value)}
            />
          </div>

          {/* Tags */}
          <div className="space-y-1">
            <Label>Tags (comma separated)</Label>
            <Input
              value={form.tags}
              onChange={(e) => handleChange("tags", e.target.value)}
              placeholder="New arrival, Winter"
            />
          </div>

          {/* Categories */}
          <div className="space-y-1">
            <Label>Categories (comma separated)</Label>
            <Input
              value={form.categories}
              onChange={(e) => handleChange("categories", e.target.value)}
              placeholder="Clothing, Winterwear"
            />
          </div>

          {/* Avg Rating */}
          <div className="grid gap-2">
            <Label>Average Rating</Label>
            <Input
              type="number"
              step="0.1"
              value={form.avgRating}
              onChange={(e) => updateField("avgRating", e.target.value)}
              placeholder="4.3"
            />
          </div>

          {/* Images */}
          <div className="space-y-1 md:col-span-2">
            <Label>Images (comma separated URLs)</Label>
            <Input
              value={form.images}
              onChange={(e) => handleChange("images", e.target.value)}
              placeholder="url1.jpg, url2.jpg"
            />
          </div>

          {/* Description */}
          <div className="space-y-1 md:col-span-2">
            <Label>Description</Label>
            <Textarea
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Product description..."
            />
          </div>

          {/* In Stock */}
          <div className="flex items-center gap-2 md:col-span-2">
            <Checkbox
              checked={form.inStock}
              onCheckedChange={(val) => handleChange("inStock", val)}
            />
            <Label>
              In Stock <span className="text-red-600">*</span>
            </Label>
          </div>
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button onClick={handleSubmit}>
            {modelRequestData.Action === null ? "Add " : "Update "} Product
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;
