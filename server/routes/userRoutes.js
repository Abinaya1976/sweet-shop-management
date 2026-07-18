const express = require("express");

const router = express.Router();

const {
  getUsers,
  deleteUser,
  updateRole,
} = require("../controllers/userController");

const auth = require("../middleware/authMiddleware");

// Get all users
router.get("/", auth, getUsers);

// Delete user
router.delete("/:id", auth, deleteUser);

// Update role
router.put("/:id", auth, updateRole);

module.exports = router;