const Capacity = require("../models/Capacity");

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

    const branches = capacities.map(capacity => ({
        branch: capacity.branch,
        availableCapacity: capacity.dailyCapacity * days
    }));

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