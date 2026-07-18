import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import { useCart } from "../context/CartContext";
import { orderAPI } from "../services/api";

import "../styles/checkout.css";

function Checkout() {

    const navigate = useNavigate();

    const { cart, clearCart } = useCart();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        customerName: "",

        phone: "",

        address: "",

        deliveryDate: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const total = cart.reduce(

        (sum, item) =>

            sum + item.price * item.quantity,

        0

    );

    const placeOrder = async () => {

        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        if (
            !form.customerName ||
            !form.phone ||
            !form.address ||
            !form.deliveryDate
        ) {

            alert("Please fill all fields.");

            return;

        }

        setLoading(true);

        try {

            // Create one order for each cart item
            for (const item of cart) {

                await orderAPI.create({

                    customerName: form.customerName,

                    phone: form.phone,

                    address: form.address,

                    deliveryDate: form.deliveryDate,

                    product: item._id,

                    quantity: item.quantity

                });

            }

            alert("Order placed successfully!");

            clearCart();

            navigate("/orders");

        } catch (error) {

            console.error(error);

            alert("Failed to place order.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="checkout-page">

                <h1>Checkout</h1>

                <div className="checkout-form">

                    <input
                        type="text"
                        name="customerName"
                        placeholder="Customer Name"
                        value={form.customerName}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                    />

                    <textarea
                        name="address"
                        placeholder="Delivery Address"
                        value={form.address}
                        onChange={handleChange}
                    />

                    <input
                        type="date"
                        name="deliveryDate"
                        value={form.deliveryDate}
                        onChange={handleChange}
                    />

                    <div className="order-summary">

                        <h2>Order Summary</h2>

                        {

                            cart.map(item => (

                                <div
                                    key={item._id}
                                    className="summary-item"
                                >

                                    <span>

                                        {item.name}

                                    </span>

                                    <span>

                                        {item.quantity} × ₹{item.price}

                                    </span>

                                </div>

                            ))

                        }

                        <hr />

                        <h2>

                            Total : ₹ {total}

                        </h2>

                    </div>

                    <button
                        className="place-order-btn"
                        onClick={placeOrder}
                        disabled={loading}
                    >

                        {

                            loading

                                ? "Placing Order..."

                                : "Place Order"

                        }

                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Checkout;