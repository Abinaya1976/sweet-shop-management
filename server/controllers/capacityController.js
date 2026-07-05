const addCapacity = async (req, res) => {

    try {

        const { branch, product, dailyCapacity } = req.body;

        const existingCapacity = await Capacity.findOne({
            branch,
            product
        });

        if (existingCapacity) {
            return res.status(400).json({
                message: "Capacity already exists for this branch and product"
            });
        }

        const capacity = await Capacity.create({
            branch,
            product,
            dailyCapacity
        });

        res.status(201).json({
            message: "Capacity Added Successfully",
            capacity
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}

// Get All Capacities
const getCapacities = async (req, res) => {
  try {

    const capacities = await Capacity.find()
      .populate("branch")
      .populate("product");

    res.status(200).json(capacities);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Capacity
const updateCapacity = async (req, res) => {
  try {

    const capacity = await Capacity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Capacity Updated Successfully",
      capacity,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Capacity
const deleteCapacity = async (req, res) => {
  try {

    await Capacity.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Capacity Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addCapacity,
  getCapacities,
  updateCapacity,
  deleteCapacity,
};