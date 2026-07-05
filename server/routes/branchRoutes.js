const express = require("express");

const router = express.Router();

const {
  addBranch,
  getBranches,
  updateBranch,
  deleteBranch,
} = require("../controllers/branchController");

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// Public Route
router.get("/", getBranches);

// Admin Routes
router.post("/", protect, authorizeRoles("admin"), addBranch);

router.put("/:id", protect, authorizeRoles("admin"), updateBranch);

router.delete("/:id", protect, authorizeRoles("admin"), deleteBranch);

module.exports = router;