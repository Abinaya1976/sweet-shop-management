const express = require("express");

const router = express.Router();

const {
    getTodayOrders,
    getFutureOrders,
    getProductionSchedule,
    getRemainingCapacity,
    completeOrder
} = require("../controllers/dashboardController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Get Today's Orders
router.put(
    "/complete/:id",
    protect,
    authorizeRoles("manager", "admin"),
    completeOrder
);

// Get Future Orders
router.get(
    "/future",
    protect,
    authorizeRoles("manager", "admin"),
    getFutureOrders
);

module.exports = router;