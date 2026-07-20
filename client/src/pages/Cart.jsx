import { Link } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import CartItem from "../components/CartItem";

import { useCart } from "../context/CartContext";

import "../styles/cart.css";

function Cart() {

    const {

        cart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart

    } = useCart();

    const total = cart.reduce(

        (sum, item) =>

            sum + item.price * item.quantity,

        0

    );

    return (

        <DashboardLayout>

            <div className="cart-page">

                <h1>🛒 Shopping Cart</h1>

                {

                    cart.length === 0 ? (

                        <div className="empty-cart">

                            <h2>Your cart is empty.</h2>

                            <p>

                                Add some delicious sweets to your cart.

                            </p>

                            <Link
                                to="/customer"
                                className="checkout-btn"
                            >

                                Continue Shopping

                            </Link>

                        </div>

                    ) : (

                        <>

                            {

                                cart.map((item) => (

                                    <CartItem

                                        key={item._id}

                                        item={item}

                                        increaseQuantity={increaseQuantity}

                                        decreaseQuantity={decreaseQuantity}

                                        removeFromCart={removeFromCart}

                                    />

                                ))

                            }

                            <div className="cart-summary">

                                <h2>

                                    Total : ₹ {total}

                                </h2>

                                <Link

                                    to="/checkout"

                                    className="checkout-btn"

                                >

                                    Proceed To Checkout

                                </Link>

                            </div>

                        </>

                    )

                }

            </div>

        </DashboardLayout>

    );

}

export default Cart;