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

module.exports = {
    getTodayOrders,
    getFutureOrders
};