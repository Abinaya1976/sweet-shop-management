function StatusBadge({ status }) {

    let badgeClass = "";

    switch (status) {

        case "Pending":
            badgeClass = "status pending";
            break;

        case "Allocated":
            badgeClass = "status allocated";
            break;

        case "Preparing":
            badgeClass = "status preparing";
            break;

        case "Ready":
            badgeClass = "status ready";
            break;

        case "Delivered":
            badgeClass = "status delivered";
            break;

        default:
            badgeClass = "status";
    }

    return (

        <span className={badgeClass}>

            {status}

        </span>

    );

}

export default StatusBadge;