import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../context/AuthContext";
import {
    productAPI,
    orderAPI,
    branchAPI,
    capacityAPI
} from "../services/api";

function Dashboard() {

    const { user } = useAuth();

    const [products, setProducts] = useState([]);

    const [orders, setOrders] = useState([]);

    const [branches, setBranches] = useState([]);

    const [capacities, setCapacities] = useState([]);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const productRes = await productAPI.getAll();

            const orderRes = await orderAPI.getAll();

            const branchRes = await branchAPI.getAll();

            const capacityRes = await capacityAPI.getAll();

            setProducts(productRes.data);

            setOrders(orderRes.data);

            setBranches(branchRes.data);

            setCapacities(capacityRes.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const pendingOrders = orders.filter(

        order => order.status === "Pending"

    );

    const completedOrders = orders.filter(

        order => order.status === "Completed"

    );

    return (

        <DashboardLayout>

            <div className="welcome-card">

                <h1>

                    Welcome,

                    {" "}

                    {user?.name}

                </h1>

                <p>

                    Role :

                    {" "}

                    {user?.role}

                </p>

            </div>

            <div className="stats-grid">

                <div className="stat-card">

                    <h3>Products</h3>

                    <h1>{products.length}</h1>

                </div>

                <div className="stat-card">

                    <h3>Branches</h3>

                    <h1>{branches.length}</h1>

                </div>

                <div className="stat-card">

                    <h3>Orders</h3>

                    <h1>{orders.length}</h1>

                </div>

                <div className="stat-card">

                    <h3>Capacity</h3>

                    <h1>{capacities.length}</h1>

                </div>

            </div>

            {

                user?.role === "admin"

                &&

                <>

                    <div className="card">

                        <h2>

                            Admin Overview

                        </h2>

                        <p>

                            Pending Orders :

                            {pendingOrders.length}

                        </p>

                        <p>

                            Completed Orders :

                            {completedOrders.length}

                        </p>

                    </div>

                </>

            }

            {

                user?.role === "customer"

                &&

                <>

                    <div className="card">

                        <h2>

                            Customer Dashboard

                        </h2>

                        <p>

                            Total Orders :

                            {

                                orders.filter(

                                    order =>

                                    order.customerName === user.name

                                ).length

                            }

                        </p>

                    </div>

                </>

            }

            <div className="card">

                <h2>

                    Recent Orders

                </h2>

                <table>

                    <thead>

                        <tr>

                            <th>Customer</th>

                            <th>Product</th>

                            <th>Quantity</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            orders.slice(0,5).map(order=>(

                                <tr key={order._id}>

                                    <td>

                                        {order.customerName}

                                    </td>

                                    <td>

                                        {

                                            typeof order.product==="object"

                                            ?

                                            order.product.name

                                            :

                                            order.product

                                        }

                                    </td>

                                    <td>

                                        {order.quantity}

                                    </td>

                                    <td>

                                        {order.status}

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;