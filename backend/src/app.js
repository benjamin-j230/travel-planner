require("dotenv").config();

const express = require("express");
const cors = require("cors");

// MongoDB Connection
const connectDB = require("./config/db");

// Routes
const aiRoutes = require("./routes/ai.routes");
const mapsRoutes = require("./routes/maps.routes");
const reviewRoutes = require("./routes/review.routes");

const app = express();

// ==============================
// Connect to MongoDB
// ==============================
connectDB();

// ==============================
// Middleware
// ==============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==============================
// Health Check Route
// ==============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Travel App Backend is running",
  });
});

// ==============================
// Feature Routes
// ==============================
app.use("/api/ai", aiRoutes);
app.use("/api/maps", mapsRoutes);
app.use("/api/reviews", reviewRoutes);

// ==============================
// 404 Handler
// ==============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ==============================
// Global Error Handler
// ==============================
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ==============================
// Start Server
// ==============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});