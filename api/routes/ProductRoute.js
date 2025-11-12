import express from "express";
import {
  addOrUpdateProduct,
  getAllProductsWeb,
  getProductByKeyID,
} from "../Controller/ProductController.js";
const router = express.Router();

// Create User

router.post("/addUpdateProduct", addOrUpdateProduct);
router.get("/getAllProductsWeb", getAllProductsWeb);
router.get("/getProductByKeyIDWeb", getProductByKeyID);

export default router;
