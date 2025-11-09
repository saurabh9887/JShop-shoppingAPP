import bcrypt from "bcryptjs";
import Admin_User from "../Model/AdminModel.js";

export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Check if user already exists
    const existingUser = await Admin_User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await Admin_User.create({ email, password: hashedPassword });

    res.status(200).json({
      message: "User registered successfully",
      data: user._id,
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const userData = await Admin_User.findOne({ email });
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const result = await bcrypt.compare(password, userData.password);
    if (!result) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "User logged in successfully",
      data: userData._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
