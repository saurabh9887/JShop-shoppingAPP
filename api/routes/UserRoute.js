import express from "express";
import { loginUser, registerUser } from "../Controller/UserController.js";

const router = express.Router();

// Create User
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
