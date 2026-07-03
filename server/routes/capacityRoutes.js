const express = require("express");

const router = express.Router();

const {
  addCapacity,
  getCapacities,
  updateCapacity,
  deleteCapacity,
} = require("../controllers/capacityController");

router.post("/", addCapacity);

router.get("/", getCapacities);

router.put("/:id", updateCapacity);

router.delete("/:id", deleteCapacity);

module.exports = router;