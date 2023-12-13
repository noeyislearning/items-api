import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
dotenv.config();

// Import routes
import itemRoutes from "./routes/itemRoutes.js";

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // 60 requests
});
app.use(limiter);

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MONGO_DB: Connected Successfully!");
});

// Routes
app.use("/api/v1/", itemRoutes);


// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER: Listening on port ${PORT}`);
});
