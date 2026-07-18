import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import CartItem from "../components/CartItem";
import "../styles/cart.css";

function Cart() {

    // Temporary cart data
    // Later this will come from Cart Context

    const [cartItems, setCartItems] = useState([
        {
            _id: 1,
            name: "Laddu",
            price: 20,
            quantity: 2
        },
        {
            _id: 2,
            name: "Mysore Pak",
            price: 35,
            quantity: 1
        }
    ]);

    const increaseQuantity = (id) => {

        setCartItems(
            cartItems.map(item =>
                item._id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );

    };

    const decreaseQuantity = (id) => {

        setCartItems(
            cartItems.map(item =>
                item._id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );

    };

    const removeItem = (id) => {

        setCartItems(
            cartItems.filter(item => item._id !== id)
        );

    };

    const total = cartItems.reduce(

        (sum, item) => sum + item.price * item.quantity,

        0

    );

    return (

        <DashboardLayout>

            <div className="cart-page">

                <h1>🛒 Shopping Cart</h1>

                {

                    cartItems.length === 0 ?

                        <h2>Your cart is empty.</h2>

                        :

                        <>

                            {

                                cartItems.map(item => (

                                    <CartItem

                                        key={item._id}

                                        item={item}

                                        increaseQuantity={increaseQuantity}

                                        decreaseQuantity={decreaseQuantity}

                                        removeItem={removeItem}

                                    />

                                ))

                            }

                            <div className="cart-summary">

                                <h2>

                                    Total : ₹ {total}

                                </h2>

                                <button className="checkout-btn">

                                    Proceed To Checkout

                                </button>

                            </div>

                        </>

                }

            </div>

        </DashboardLayout>

    );

}

export default Cart;