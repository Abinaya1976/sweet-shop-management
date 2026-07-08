const Branch = require("../models/Branch");
const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");

const getDashboardStats = async (req, res) => {
    try {

        const totalBranches = await Branch.countDocuments();

        const totalProducts = await Product.countDocuments();

        const totalOrders = await Order.countDocuments();

        const pendingOrders = await Order.countDocuments({
            status: "Pending"
        });

        const completedOrders = await Order.countDocuments({
            status: "Completed"
        });

        const totalCustomers = await User.countDocuments({
            role: "customer"
        });

        res.status(200).json({
            totalBranches,
            totalProducts,
            totalOrders,
            pendingOrders,
            completedOrders,
            totalCustomers
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    getDashboardStats
};