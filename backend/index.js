require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 2001;
const path = require("path");

// Database connection
const db = require("./server/config/db");
db();

// Seed admin user
const { seedAdmin } = require("./server/config/seed");
seedAdmin();

// Import routes
const router = require("./server/routes/route");

// --- Add CORS middleware here ---
app.use(
  cors({
    origin: "http://localhost:5173", // React app origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware for static uploads and parsing requests
app.use("/upload", express.static(path.join(__dirname, "server", "public", "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api", router);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});