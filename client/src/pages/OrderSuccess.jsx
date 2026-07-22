import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/orderSuccess.css";

function OrderSuccess() {

    const orderId = "ORD2026001";

    return (

        <>

            <Navbar />

            <div className="success-container">

                <div className="success-card">

                    <div className="success-icon">

                        ✔

                    </div>

                    <h1>

                        Order Placed Successfully!

                    </h1>

                    <p>

                        Thank you for shopping with

                        <strong> Sweetie Pies</strong>

                    </p>

                    <div className="order-info">

                        <p>

                            <strong>Order ID :</strong>

                            {orderId}

                        </p>

                        <p>

                            <strong>Status :</strong>

                            Confirmed

                        </p>

                        <p>

                            <strong>Estimated Delivery :</strong>

                            25 July 2026

                        </p>

                    </div>

                    <div className="success-buttons">

                        <Link to="/my-orders">

                            <button>

                                View Orders

                            </button>

                        </Link>

                        <Link to="/invoice">

                            <button>

                                Download Invoice

                            </button>

                        </Link>

                        <Link to="/home">

                            <button>

                                Continue Shopping

                            </button>

                        </Link>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default OrderSuccess;