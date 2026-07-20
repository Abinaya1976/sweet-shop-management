function CartItem({

    item,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart

}) {

    return (

        <div className="cart-item">

            <div className="cart-image">

                🍬

            </div>

            <div className="cart-info">

                <h2>{item.name}</h2>

                <h3>

                    ₹ {item.price}

                </h3>

            </div>

            <div className="quantity-controls">

                <button

                    onClick={() => decreaseQuantity(item._id)}

                >

                    -

                </button>

                <span>{item.quantity}</span>

                <button

                    onClick={() => increaseQuantity(item._id)}

                >

                    +

                </button>

            </div>

            <h3>

                ₹ {item.price * item.quantity}

            </h3>

            <button

                className="remove-btn"

                onClick={() => removeFromCart(item._id)}

            >

                Remove

            </button>

        </div>

    );

}

export default CartItem;