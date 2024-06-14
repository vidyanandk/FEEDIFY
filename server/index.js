const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose"); // Fix the mongoose import
const cookieParser = require("cookie-parser");
const app = express();

// Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DATABASE IS CONNECTED"))
  .catch((err) => console.log("DATABASE NOT CONNECTED", err));

// Middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173", // Update the origin URL as needed
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/", require("./routes/authRoutes"));

const port = process.env.PORT || 8000; // Use the PORT from .env if available
app.listen(port, () => console.log(`Server is running on port ${port}...`));
