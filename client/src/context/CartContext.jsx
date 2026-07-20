import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // Add Product
    const addToCart = (product) => {

        const existingItem = cart.find(
            (item) => item._id === product._id
        );

        if (existingItem) {

            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item
                )
            );

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);

        }

    };

    // Remove Product
    const removeFromCart = (id) => {

        setCart(cart.filter((item) => item._id !== id));

    };

    // Increase Quantity
    const increaseQuantity = (id) => {

        setCart(
            cart.map((item) =>
                item._id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item
            )
        );

    };

    // Decrease Quantity
    const decreaseQuantity = (id) => {

        setCart(
            cart.map((item) =>
                item._id === id
                    ? {
                          ...item,
                          quantity:
                              item.quantity > 1
                                  ? item.quantity - 1
                                  : 1,
                      }
                    : item
            )
        );

    };

    // Empty Cart
    const clearCart = () => {

        setCart([]);

    };

    return (

        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>

    );

};