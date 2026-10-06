const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const customerRoutes = require("./routes/customerRouts");

dotenv.config();

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/customer", customerRoutes);

// Test
app.get("/", (req, res) => {
  res.send("salon backend is running");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});