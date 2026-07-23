import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/productCard.css";
import "../styles/customerHome.css";
import imageMap from "../utils/imageMap";

function ProductCard({ product }) {

    const navigate = useNavigate();
    const {addToCart}=useCart();
    const handleViewDetails = () => {

        navigate(`/product/${product._id}`);

    };

    const handleAddToCart = () => {

    addToCart(product);

    alert(`${product.name} added to cart successfully!`);

};

        // Later we will save this product in Cart Context



    return (

        <div className="product-card">

            <div className="product-image">

    <img
    src={`http://localhost:5000/uploads/${product.image}`}
    alt={product.name}
/>

</div>

            <div className="product-content">

                <h2>{product.name}</h2>

                <p className="category">

                    {product.category}

                </p>

                <p className="description">

                    {product.description}

                </p>

                <h3 className="price">

                    ₹ {product.price}

                </h3>

                <div className="product-buttons">

                    <button
                        className="details-btn"
                        onClick={handleViewDetails}
                    >

                        View Details

                    </button>

                    <button
                        className="cart-btn"
                        onClick={handleAddToCart}
                    >

                        Add to Cart

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ProductCard;