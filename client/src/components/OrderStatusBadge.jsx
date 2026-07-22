import "../styles/orderStatus.css";

function OrderStatusBadge({ status }) {

    const getClassName = () => {

        switch (status) {

            case "Pending":
                return "status pending";

            case "Allocated":
                return "status allocated";

            case "Preparing":
                return "status preparing";

            case "Out For Delivery":
                return "status delivery";

            case "Delivered":
            case "Completed":
                return "status delivered";

            case "Cancelled":
                return "status cancelled";

            default:
                return "status";
        }

    };

    return (

        <span className={getClassName()}>

            {status}

        </span>

    );

}

export default OrderStatusBadge;