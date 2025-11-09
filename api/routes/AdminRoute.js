import express from "express";
import { loginAdmin, registerAdmin } from "../Controller/AdminController.js";

const router = express.Router();

// Create User
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

export default router;
