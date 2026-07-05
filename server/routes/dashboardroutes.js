const express = require("express");

const router = express.Router();

const {
    getTodayOrders,
    getFutureOrders
} = require("../controllers/dashboardController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Get Today's Orders
router.get(
    "/today",
    protect,
    authorizeRoles("manager", "admin"),
    getTodayOrders
);

// Get Future Orders
router.get(
    "/future",
    protect,
    authorizeRoles("manager", "admin"),
    getFutureOrders
);

module.exports = router;