import { useState } from "react";
import api from "../services/api";
import StatusBadge from "./StatusBadge";

function ManagerOrderTable({

    orders,
    loading,
    refreshOrders

}) {

    const [updating, setUpdating] = useState(false);

    const updateStatus = async (id, status) => {

        try {

            setUpdating(true);

            await api.put(`/orders/${id}`, {
                status
            });

            refreshOrders();

        } catch (error) {

            console.error("Failed to update status", error);

        } finally {

            setUpdating(false);

        }

    };

    if (loading) {

        return <h2>Loading Orders...</h2>;

    }

    if (orders.length === 0) {

        return <h2>No Orders Assigned</h2>;

    }

    return (

        <table className="manager-table">

            <thead>

                <tr>

                    <th>Customer</th>

                    <th>Product</th>

                    <th>Quantity</th>

                    <th>Delivery Date</th>

                    <th>Status</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    orders.map(order => (

                        <tr key={order._id}>

                            <td>

                                {order.customerName}

                            </td>

                            <td>

                                {

                                    order.product

                                        ? order.product.name

                                        : "Deleted Product"

                                }

                            </td>

                            <td>

                                {order.quantity}

                            </td>

                            <td>

                                {

                                    new Date(
                                        order.deliveryDate
                                    ).toLocaleDateString()

                                }

                            </td>

                            <td>

                                <StatusBadge

                                    status={order.status}

                                />

                            </td>

                            <td>

                                {

                                    order.status === "Pending" &&

                                    <button

                                        onClick={() =>
                                            updateStatus(
                                                order._id,
                                                "Preparing"
                                            )
                                        }

                                        disabled={updating}

                                    >

                                        Start Preparing

                                    </button>

                                }

                                {

                                    order.status === "Preparing" &&

                                    <button

                                        onClick={() =>
                                            updateStatus(
                                                order._id,
                                                "Ready"
                                            )
                                        }

                                        disabled={updating}

                                    >

                                        Mark Ready

                                    </button>

                                }

                                {

                                    order.status === "Ready" &&

                                    <button

                                        onClick={() =>
                                            updateStatus(
                                                order._id,
                                                "Delivered"
                                            )
                                        }

                                        disabled={updating}

                                    >

                                        Deliver

                                    </button>

                                }

                                {

                                    order.status === "Delivered" &&

                                    <span>

                                        ✅ Completed

                                    </span>

                                }

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default ManagerOrderTable;