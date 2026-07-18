const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });

  }
};

// Delete User
exports.deleteUser = async (req, res) => {

  try {

    await User.findByIdAndDelete(req.params.id);

    res.json({
      message: "User deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: "Delete failed",
      error: error.message,
    });

  }

};

// Update User Role
exports.updateRole = async (req, res) => {

  try {

    const user = await User.findByIdAndUpdate(

      req.params.id,

      {
        role: req.body.role,
      },

      { new: true }

    ).select("-password");

    res.json(user);

  } catch (error) {

    res.status(500).json({

      message: "Update failed",

      error: error.message,

    });

  }

};