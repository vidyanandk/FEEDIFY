const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose"); 
const cookieParser = require("cookie-parser");
const app = express();

// Database connection
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DATABASE IS CONNECTED"))
  .catch((err) => console.log("DATABASE NOT CONNECTED", err));

// Middleware
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173", // Ensure this URL matches exactly
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/", require("./routes/authRoutes"));

const port = process.env.PORT || 8000; // Use the PORT from .env if available
app.listen(port, () => console.log(`Server is running on port ${port}...`));
