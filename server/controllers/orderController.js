const Order = require("../models/Order");
const OrderAllocation = require("../models/OrderAllocation");
const allocateOrder = require("../services/allocationService");
// ==========================
// Create Order
// ==========================
const createOrder = async (req, res) => {
  try {

    // Save the customer order
    const order = await Order.create(req.body);

    // Run the allocation algorithm
    const result = await allocateOrder(
      order.product,
      order.quantity,
      order.deliveryDate
    );

    // Save allocations
    for (const item of result.allocation) {
      await OrderAllocation.create({
        order: order._id,
        branch: item.branch._id,
        quantityAssigned: item.quantityAssigned,
      });
    }

    // Update order status
    if (result.remaining === 0) {
      order.status = "Allocated";
    } else {
      order.status = "Pending";
    }

    await order.save();

    res.status(201).json({
      message: "Order Created Successfully",
      order,
      allocation: result.allocation,
      remainingQuantity: result.remaining,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get All Orders
// ==========================
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("product");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// ==========================
// Get Orders For Manager Branch
// ==========================

const getOrdersByBranch = async (req, res) => {

    try {

        const { branchId } = req.params;

        const allocations = await OrderAllocation.find({
            branch: branchId
        })
        .populate({
            path: "order",
            populate: {
                path: "product"
            }
        });

        const orders = allocations.map(item => item.order);

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// ==========================
// Get Orders By Customer
// ==========================

const getOrdersByCustomer = async (req, res) => {

    try {

        const { customerName } = req.params;

        const orders = await Order.find({

            customerName

        }).populate("product");

        res.status(200).json(orders);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};

// ==========================
// Get Order By ID
// ==========================
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("product");

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Update Order Status
// ==========================
const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order Updated Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Delete Order
// ==========================
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Order Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrdersByBranch,
  getOrdersByCustomer,
  getOrderById,
  updateOrder,
  deleteOrder,
};