const Branch = require("../models/Branch");

// Add Branch
const addBranch = async (req, res) => {
  try {
    const branch = await Branch.create(req.body);

    res.status(201).json({
      message: "Branch Added Successfully",
      branch,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Branches
const getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();

    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Branch
const updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Branch Updated Successfully",
      branch,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Branch
const deleteBranch = async (req, res) => {
  try {
    await Branch.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Branch Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addBranch,
  getBranches,
  updateBranch,
  deleteBranch,
};