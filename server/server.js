const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Sweet Shop API Running");
});

const connectDB = require("./config/db");

connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});