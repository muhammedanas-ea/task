import mongoose from "mongoose";
import env from "dotenv";
env.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};
