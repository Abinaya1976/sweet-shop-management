import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ManagerOrderTable from "../components/ManagerOrderTable";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import "../styles/managerDashboard.css";

function ManagerDashboard() {

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
                `/orders/manager/${user.branchId}`
            );

            setOrders(response.data);

        } catch (error) {

            console.error("Failed to load manager orders", error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="manager-dashboard">

                <div className="manager-header">

                    <h1>👨‍🍳 Branch Manager Dashboard</h1>

                    <p>

                        Welcome {user?.name}

                    </p>

                </div>

                <div className="manager-summary">

                    <div className="summary-card">

                        <h3>Total Orders</h3>

                        <h2>{orders.length}</h2>

                    </div>

                    <div className="summary-card">

                        <h3>Pending</h3>

                        <h2>

                            {

                                orders.filter(
                                    order => order.status === "Pending"
                                ).length

                            }

                        </h2>

                    </div>

                    <div className="summary-card">

                        <h3>Preparing</h3>

                        <h2>

                            {

                                orders.filter(
                                    order => order.status === "Preparing"
                                ).length

                            }

                        </h2>

                    </div>

                    <div className="summary-card">

                        <h3>Delivered</h3>

                        <h2>

                            {

                                orders.filter(
                                    order => order.status === "Delivered"
                                ).length

                            }

                        </h2>

                    </div>

                </div>

                <ManagerOrderTable

                    orders={orders}

                    loading={loading}

                    refreshOrders={fetchOrders}

                />

            </div>

        </DashboardLayout>

    );

}

export default ManagerDashboard;