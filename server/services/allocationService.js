const Capacity = require("../models/Capacity");
const OrderAllocation = require("../models/OrderAllocation");

const allocationAlgorithm = require("../algorithms/allocationAlgorithm");

const allocateOrder = async (
    productId,
    quantity,
    deliveryDate
) => {

    // Get all capacities for this product
    const capacities = await Capacity.find({

        product: productId

    }).populate("branch");

    const today = new Date();

    const delivery = new Date(deliveryDate);

    // Number of production days
    const days = Math.max(

        1,

        Math.ceil(

            (delivery - today) /

            (1000 * 60 * 60 * 24)

        )

    );

    const branches = [];

    for (const capacity of capacities) {

        const totalCapacity =

            capacity.dailyCapacity * days;

        // Already allocated quantity
        const allocations = await OrderAllocation.find({

            branch: capacity.branch._id

        });

        const alreadyAssigned = allocations.reduce(

            (sum, allocation) =>

                sum + allocation.quantityAssigned,

            0

        );

        const availableCapacity = Math.max(

            totalCapacity - alreadyAssigned,

            0

        );

        branches.push({

            capacity,

            branch: capacity.branch,

            availableCapacity

        });

    }

    // Call allocation algorithm
    const result = allocationAlgorithm(

        branches,

        quantity

    );

    // Update allocatedToday
    for (const item of result.allocation) {

        item.capacity.allocatedToday +=

            item.quantityAssigned;

        await item.capacity.save();

    }

    return {

        allocation: result.allocation,

        remaining: result.remaining

    };

};

module.exports = allocateOrder;