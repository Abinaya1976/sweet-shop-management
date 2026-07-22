import { Link } from "react-router-dom";
import OrderStatusBadge from "./OrderStatusBadge";
import "../styles/orderCard.css";

function OrderCard({ order }) {

    return (

        <div className="order-card">

            <div className="order-header">

                <h2>{order.product?.name}</h2>

                <OrderStatusBadge status={order.status} />

            </div>

            <div className="order-body">

                <p>
                    <strong>Customer:</strong> {order.customerName}
                </p>

                <p>
                    <strong>Quantity:</strong> {order.quantity}
                </p>

                <p>
                    <strong>Price:</strong> ₹ {order.product?.price}
                </p>

                <p>
                    <strong>Total:</strong> ₹ {order.quantity * order.product?.price}
                </p>

                <p>
                    <strong>Delivery Date:</strong>{" "}
                    {new Date(order.deliveryDate).toLocaleDateString()}
                </p>

                <p>
                    <strong>Address:</strong> {order.deliveryAddress}
                </p>

            </div>

            <div className="order-footer">

                <Link
                    to={`/tracking/${order._id}`}
                    className="tracking-btn"
                >
                    Track Order
                </Link>

            </div>

        </div>

    );

}

export default OrderCard;