import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productID: {
      type: String,
      required: true,
      unique: true,
    },
    productKeyID: {
      type: String,
      default: null, // null if new product
    },
    discount: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      default: [],
    },
    name: {
      type: String,
      required: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "",
    },
    counter: {
      type: Number,
      default: 0,
    },
    categories: {
      type: [String],
      default: [],
    },
    images: {
      type: [String],
      default: [],
    },
    avgRating: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
