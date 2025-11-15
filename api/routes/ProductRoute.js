import express from "express";
import {
  addOrUpdateProduct,
  getAllProducts,
  getAllProductsWeb,
  getProductByKeyID,
  getProductByKeyIDWeb,
} from "../Controller/ProductController.js";
const router = express.Router();

// Create User

// Add update
router.post("/addUpdateProduct", addOrUpdateProduct);

// Get all products panel
router.post("/getAllProducts", getAllProducts);
// Get all product for website
router.get("/getAllProductsWeb", getAllProductsWeb);
// Get single product for panel
router.get("/getProductByKeyID", getProductByKeyID);
// Get single product for website
router.get("/getProductByKeyIDWeb", getProductByKeyIDWeb);

export default router;
