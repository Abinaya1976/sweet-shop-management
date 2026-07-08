const Order = require("../models/Order");

const getTodayOrders = async (req, res) => {
    try {

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);

        tomorrow.setDate(today.getDate() + 1);

        const orders = await Order.find({
            deliveryDate: {
                $gte: today,
                $lt: tomorrow
            }
        }).populate("product");

        res.status(200).json({
            totalOrders: orders.length,
            orders
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const getFutureOrders = async (req, res) => {
    try {

        const today = new Date();
        today.setHours(23, 59, 59, 999);

        const orders = await Order.find({
            deliveryDate: {
                $gt: today
            }
        }).populate("product");

        res.status(200).json({
            totalOrders: orders.length,
            orders
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const getProductionSchedule = async (req, res) => {
    try {

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const schedule = await Order.aggregate([
            {
                $match: {
                    deliveryDate: {
                        $gte: today,
                        $lt: tomorrow
                    }
                }
            },
            {
                $group: {
                    _id: "$product",
                    totalQuantity: {
                        $sum: "$quantity"
                    }
                }
            }
        ]);

        res.status(200).json({
            totalProducts: schedule.length,
            schedule
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const Capacity = require("../models/Capacity");

const getRemainingCapacity = async (req, res) => {
    try {

        const capacities = await Capacity.find()
            .populate("branch")
            .populate("product");

        const result = capacities.map(capacity => ({
            branch: capacity.branch.branchName,
            product: capacity.product.name,
            dailyCapacity: capacity.dailyCapacity,
            remainingCapacity: capacity.dailyCapacity // We'll improve this later
        }));

        res.status(200).json(result);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const completeOrder = async (req, res) => {
    try {

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        order.status = "Completed";

        await order.save();

        res.status(200).json({
            message: "Order marked as completed",
            order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    getTodayOrders,
    getFutureOrders,
    getProductionSchedule,
    getRemainingCapacity,
    completeOrder
};