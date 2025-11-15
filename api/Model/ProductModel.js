import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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
    },
    inStock: {
      type: Boolean,
      default: false,
      required: true,
    },
    size: {
      type: String,
      default: "",
    },
    counter: {
      type: Number,
      default: 0,
      required: true,
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
