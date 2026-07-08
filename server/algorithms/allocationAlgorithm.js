const Capacity = require("../models/Capacity");
const OrderAllocation = require("../models/OrderAllocation");

const allocateOrder = async (productId, quantity, deliveryDate) => {

    const capacities = await Capacity.find({
        product: productId
    }).populate("branch");

    const today = new Date();

    const delivery = new Date(deliveryDate);

    const days = Math.max(
        1,
        Math.ceil((delivery - today) / (1000 * 60 * 60 * 24))
    );

    const branches = [];

    for (const capacity of capacities) {

        const totalCapacity = capacity.dailyCapacity * days;

        const allocations = await OrderAllocation.find({
            branch: capacity.branch._id
        });

        const alreadyAssigned = allocations.reduce(
            (sum, allocation) => sum + allocation.quantityAssigned,
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

    branches.sort(
        (a, b) => b.availableCapacity - a.availableCapacity
    );

    let remaining = quantity;

    const allocation = [];

    for (const item of branches) {

        if (remaining <= 0)
            break;

        const assigned = Math.min(
            remaining,
            item.availableCapacity
        );

        if (assigned <= 0)
            continue;

        // Update today's allocated capacity
        item.capacity.allocatedToday += assigned;

        await item.capacity.save();

        allocation.push({
            branch: item.branch,
            quantityAssigned: assigned
        });

        remaining -= assigned;
    }

    return {
        allocation,
        remaining
    };

};

module.exports = allocateOrder;