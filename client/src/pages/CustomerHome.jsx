import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductCard from "../components/ProductCard";
import { productAPI } from "../services/api";
import "../styles/customerHome.css";

function CustomerHome() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {

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

                    <h1>🍬 Sweet Shop</h1>

                    <p>
                        Fresh sweets prepared daily from all our branches.
                    </p>

                </div>

                {loading ? (

                    <h2>Loading Products...</h2>

                ) : (

                    <div className="product-grid">

                        {products.length > 0 ? (

                            products.map((product) => (

                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />

                            ))

                        ) : (

                            <h2>No Products Available</h2>

                        )}

                    </div>

                )}

            </div>

        </DashboardLayout>

    );

}

export default CustomerHome;