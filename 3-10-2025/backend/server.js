const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON
app.use(cors());         // Enable CORS

// Routes
app.use("/api/auth", require("./routes/authRoutes"));       // Auth routes
app.use("/api/contacts", require("./routes/contactRoutes")); // Contacts
app.use("/api/leads", require("./routes/leadRoutes"));      // Leads
app.use("/api/tasks", require("./routes/taskRoutes"));      // Tasks
app.use("/api/analytics", require("./routes/analyticsRoutes")); // Analytics

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
