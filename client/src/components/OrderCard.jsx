function OrderCard({ order }) {

    return (

        <div className="order-card">

            <div className="order-header">

                <h2>

                    🍬 {order.product?.name || "Product"}

                </h2>

                <span className={`status ${order.status?.toLowerCase()}`}>

                    {order.status}

                </span>

            </div>

            <div className="order-body">

                <p>

                    <strong>Order ID:</strong>

                    {order._id}

                </p>

                <p>

                    <strong>Customer:</strong>

                    {order.customerName}

                </p>

                <p>

                    <strong>Quantity:</strong>

                    {order.quantity}

                </p>

                <p>

                    <strong>Delivery Date:</strong>

                    {

                        new Date(
                            order.deliveryDate
                        ).toLocaleDateString()

                    }

                </p>

            </div>

        </div>

    );

}

export default OrderCard;