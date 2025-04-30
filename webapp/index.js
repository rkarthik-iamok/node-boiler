const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

// Environment variables
const PORT = process.env.PORT || 3000;

// Express App
const app = express();

// Middleware
app.use(morgan("dev"));

// Node Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listen to the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`SERVER is running on http://localhost:${PORT}`);
});
