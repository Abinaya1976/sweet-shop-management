import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import OrderTracking from "../components/OrderTracking";
import OrderStatusBadge from "../components/OrderStatusBadge";

import api from "../services/api";

import "../styles/orderTrackingPage.css";

function OrderTrackingPage() {

    const { id } = useParams();

    const [order, setOrder] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchOrder();

    }, []);

    const fetchOrder = async () => {

        try {

            const response = await api.get(`/orders/${id}`);

            setOrder(response.data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <DashboardLayout>

                <h2>Loading...</h2>

            </DashboardLayout>

        );

    }

    if (!order) {

        return (

            <DashboardLayout>

                <h2>Order Not Found</h2>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="tracking-page">

                <h1>Order Tracking</h1>

                <div className="tracking-card">

                    <h2>{order.product?.name}</h2>

                    <OrderStatusBadge status={order.status} />

                    <p>

                        <strong>Customer :</strong> {order.customerName}

                    </p>

                    <p>

                        <strong>Quantity :</strong> {order.quantity}

                    </p>

                    <p>

                        <strong>Total :</strong>

                        ₹ {order.quantity * order.product?.price}

                    </p>

                    <p>

                        <strong>Delivery :</strong>

                        {new Date(order.deliveryDate).toLocaleDateString()}

                    </p>

                    <OrderTracking

                        status={order.status}

                    />

                </div>

            </div>

        </DashboardLayout>

    );

}

export default OrderTrackingPage;