import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import userAuthRoutes from "./routes/userAuth";
import adminAuthRoutes from "./routes/adminAuth";
import { MONGO_URI, PORT } from "./util/config";

const app = express();

//Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.resolve("uploads")));

//Routes
app.use("/api", userAuthRoutes);
app.use("/admin", adminAuthRoutes);

// Connect DB and Start Server
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
