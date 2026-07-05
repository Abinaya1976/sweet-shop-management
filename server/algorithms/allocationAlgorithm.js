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

    // Calculate maximum production until delivery
    const totalCapacity = capacity.dailyCapacity * days;

    // Find all allocations for this branch
    const allocations = await OrderAllocation.find({
        branch: capacity.branch._id
    });

    // Sum assigned quantities
    const alreadyAssigned = allocations.reduce(
        (sum, allocation) => sum + allocation.quantityAssigned,
        0
    );

    // Remaining capacity
    const availableCapacity = Math.max(
        totalCapacity - alreadyAssigned,
        0
    );

    branches.push({
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
            item.availableCapacity,
            remaining
        );

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