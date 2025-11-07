import express from "express";
import { registerUser } from "../Controller/UserController.js";

const router = express.Router();

// Create User
router.post("/register", registerUser);

export default router;
