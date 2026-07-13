import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";
import { productAPI } from "../services/api";
import "../styles/products.css";

function Products() {

    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const res = await productAPI.getAll();
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAdd = () => {
        setSelectedProduct(null);
        setShowForm(true);
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setShowForm(true);
    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this product?"))
            return;

        try {

            await productAPI.delete(id);

            loadProducts();

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <DashboardLayout>

            <div className="page-header">

                <h1>Products</h1>

                <button
                    className="primary-btn"
                    onClick={handleAdd}
                >
                    Add Product
                </button>

            </div>

            <ProductTable

                products={products}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

            {

                showForm && (

                    <ProductForm

                        product={selectedProduct}

                        onClose={() => setShowForm(false)}

                        refresh={loadProducts}

                    />

                )

            }

        </DashboardLayout>

    );

}

export default Products;