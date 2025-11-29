import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/messsage.route.js";


dotenv.config();

// Create express app
const app = express();

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Start server
app.listen(PORT, () => console.log("Server running on port: " + PORT));
