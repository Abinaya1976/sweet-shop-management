import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { productAPI } from "../services/api";
import "../styles/productDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {

        try {

            const response = await productAPI.getById(id);

            setProduct(response.data);

        } catch (error) {

            console.error("Failed to load product", error);

        } finally {

            setLoading(false);

        }

    };

    const increaseQuantity = () => {

        setQuantity(quantity + 1);

    };

    const decreaseQuantity = () => {

        if (quantity > 1) {

            setQuantity(quantity - 1);

        }

    };

    const addToCart = () => {

        alert(`${quantity} ${product.name} added to cart`);

    };

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (!product) {

        return <h2>Product Not Found</h2>;

    }

    return (

        <DashboardLayout>

            <div className="product-details">

                <div className="product-image-section">

                    🍬

                </div>

                <div className="product-info">

                    <h1>{product.name}</h1>

                    <p className="category">

                        {product.category}

                    </p>

                    <h2 className="price">

                        ₹ {product.price}

                    </h2>

                    <p className="description">

                        {product.description}

                    </p>

                    <div className="quantity-box">

                        <button onClick={decreaseQuantity}>−</button>

                        <span>{quantity}</span>

                        <button onClick={increaseQuantity}>+</button>

                    </div>

                    <button
                        className="cart-button"
                        onClick={addToCart}
                    >

                        Add To Cart

                    </button>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default ProductDetails;