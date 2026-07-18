function allocationAlgorithm(branches, quantity) {

    // Sort branches by highest available capacity
    branches.sort((a, b) => b.availableCapacity - a.availableCapacity);

    let remaining = quantity;

    const allocation = [];

    for (const item of branches) {

        if (remaining <= 0) break;

        const assigned = Math.min(
            remaining,
            item.availableCapacity
        );

        if (assigned <= 0) continue;

        allocation.push({

            capacity: item.capacity,

            branch: item.branch,

            quantityAssigned: assigned

        });

        remaining -= assigned;
    }

    return {

        allocation,

        remaining

    };

}

module.exports = allocationAlgorithm;