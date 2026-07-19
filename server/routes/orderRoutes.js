const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders,
  getOrdersByBranch,
  getOrdersByCustomer,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

router.post("/", createOrder);

router.get("/", getOrders);
router.get("/manager/:branchId", getOrdersByBranch);

router.get("/customer/:customerName", getOrdersByCustomer);
router.get("/:id", getOrderById);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

module.exports = router;