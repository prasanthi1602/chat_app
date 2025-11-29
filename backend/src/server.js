import express from "express";
import dotenv from "dotenv";
import path from "path";

// Corrected import paths to match your actual file names
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";

dotenv.config();

// Create express app
const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON (optional but recommended)
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Make ready for deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

// Start server
app.listen(PORT, () => console.log("Server running on port: " + PORT));
