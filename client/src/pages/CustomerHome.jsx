import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductCard from "../components/ProductCard";
import { productAPI } from "../services/api";
import "../styles/customerHome.css";

function CustomerHome() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadProducts();

    }, []);

    const loadProducts = async () => {

        try {

            const response = await productAPI.getAll();

            setProducts(response.data);

        } catch (error) {

            console.error("Failed to load products", error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="customer-home">

                <div className="customer-header">

                    <div>

                        <h1>🍬 Sweet Shop</h1>

                        <p>

                            Order your favourite sweets online.

                        </p>

                    </div>

                    <div className="customer-actions">

                        <button
                            className="cart-button"
                            onClick={() => navigate("/cart")}
                        >
                            🛒 Cart
                        </button>

                        <button
                            className="orders-button"
                            onClick={() => navigate("/my-orders")}
                        >
                            📦 My Orders
                        </button>

                    </div>

                </div>

                {

                    loading ?

                        (

                            <h2>Loading Products...</h2>

                        )

                        :

                        products.length === 0 ?

                            (

                                <h2>No Products Available</h2>

                            )

                            :

                            (

                                <div className="products-grid">

                                    {

                                        products.map(product => (

                                            <ProductCard

                                                key={product._id}

                                                product={product}

                                            />

                                        ))

                                    }

                                </div>

                            )

                }

            </div>

        </DashboardLayout>

    );

}

export default CustomerHome;