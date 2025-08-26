import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import userEventRoutes from "./routes/userEvent";
import userAuthRoutes from "./routes/userAuth";
import userSectionRoutes from "./routes/userSection";
import adminAuthRoutes from "./routes/adminAuth";
import adminEventRoutes from "./routes/adminEvent";
import adminSectionRoute from "./routes/adminSection";
import adminTicketRoute from "./routes/adminTicket";
import userTicketRoutes from "./routes/userTicket";
import { MONGO_URI, PORT } from "./util/config";
import './util/cron/ticketCleaner'  

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
app.use("/api", userEventRoutes);
app.use("/api", userSectionRoutes);
app.use("/api", userTicketRoutes);
app.use("/admin", adminAuthRoutes);
app.use("/admin", adminEventRoutes);
app.use("/admin", adminSectionRoute);
app.use("/admin", adminTicketRoute);

// Connect DB and Start Server
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
