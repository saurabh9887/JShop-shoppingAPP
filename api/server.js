import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("I am live");
});

app.use("/api/auth", UserRoute);

app.listen(5000, () => {
  console.log("Express is listning");
});
