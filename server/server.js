const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const branchRoutes = require("./routes/branchRoutes");
const capacityRoutes = require("./routes/capacityRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/test", testRoutes);
app.use("/api/products", productRoutes);
app.use("/api/capacities", capacityRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Sweet Shop API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});