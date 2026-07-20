import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import OrderCard from "../components/OrderCard";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import "../styles/myOrders.css";

function MyOrders() {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (user) {

            fetchOrders();

        }

    }, [user]);

    const fetchOrders = async () => {

        try {

            const response = await api.get(
                `/orders/customer/${user.name}`
            );

            setOrders(response.data);

        } catch (error) {

            console.error("Failed to load orders", error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="my-orders-page">

                <div className="page-header">

                    <h1>📦 My Orders</h1>

                    <p>

                        View all your previous orders.

                    </p>

                </div>

                {

                    loading ?

                        (

                            <div className="empty-orders">

                                <h2>Loading Orders...</h2>

                            </div>

                        )

                        :

                        orders.length === 0 ?

                            (

                                <div className="empty-orders">

                                    <h2>No Orders Found</h2>

                                    <p>

                                        You haven't placed any orders yet.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="orders-grid">

                                    {

                                        orders.map(order => (

                                            <OrderCard

                                                key={order._id}

                                                order={order}

                                            />

                                        ))

                                    }

                                </div>

                            )

                }

            </div>

        </DashboardLayout>

    );

}

export default MyOrders;