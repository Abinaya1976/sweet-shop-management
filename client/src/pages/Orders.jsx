import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { orderAPI } from "../services/api";

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {

        try {

            const res = await orderAPI.getAll();

            setOrders(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <DashboardLayout>

            <h1>Orders</h1>

            <table className="product-table">

                <thead>

                    <tr>

                        <th>Customer</th>

                        <th>Product</th>

                        <th>Quantity</th>

                        <th>Status</th>

                        <th>Delivery Date</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        orders.map(order => (

                            <tr key={order._id}>

                                <td>{order.customerName}</td>

                                <td>
                                    {
                                        typeof order.product === "object"
                                        ? order.product.name
                                        : order.product
                                    }
                                </td>

                                <td>{order.quantity}</td>

                                <td>{order.status}</td>

                                <td>
                                    {
                                        new Date(
                                            order.deliveryDate
                                        ).toLocaleDateString()
                                    }
                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </DashboardLayout>

    );

}

export default Orders;