import { useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RatingStars from "../components/RatingStars";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

import { useCart } from "../context/CartContext";

import laddu from "../assets/sweets/laddu.jpg";
import mysorepak from "../assets/sweets/mysorepak.jpg";
import gulabjamun from "../assets/sweets/gulabjamun.jpg";
import kajukatli from "../assets/sweets/kajukatli.jpg";
import rasagulla from "../assets/sweets/rasagulla.jpg";
import rasmalai from "../assets/sweets/rasmalai.jpg";
import palkova from "../assets/sweets/palkova.jpg";
import milkcake from "../assets/sweets/milkcake.jpg";
import soanpapdi from "../assets/sweets/soanpapdi.jpg";
import badamhalwa from "../assets/sweets/badamhalwa.jpg";

import "../styles/productDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const { addToCart } = useCart();

    const [reviews, setReviews] = useState([

        {
            customer: "Rahul",
            rating: 5,
            comment: "Excellent taste. Fresh and delicious.",
            date: "20 July 2026"
        },

        {
            customer: "Priya",
            rating: 4,
            comment: "Very good quality sweet.",
            date: "18 July 2026"
        }

    ]);

    const products = [

        {
            _id: "1",
            name: "Laddu",
            category: "Traditional",
            description: "Traditional Besan Laddu made using pure ghee and premium gram flour.",
            price: 40,
            image: laddu
        },

        {
            _id: "2",
            name: "Mysore Pak",
            category: "Traditional",
            description: "Authentic Ghee Mysore Pak prepared fresh every day.",
            price: 80,
            image: mysorepak
        },

        {
            _id: "3",
            name: "Gulab Jamun",
            category: "Milk Sweet",
            description: "Soft Gulab Jamuns soaked in rich sugar syrup.",
            price: 60,
            image: gulabjamun
        },

        {
            _id: "4",
            name: "Kaju Katli",
            category: "Dry Fruit Sweet",
            description: "Premium Cashew Sweet.",
            price: 120,
            image: kajukatli
        },

        {
            _id: "5",
            name: "Rasagulla",
            category: "Bengali Sweet",
            description: "Fresh Bengali Rasagulla.",
            price: 70,
            image: rasagulla
        },

        {
            _id: "6",
            name: "Rasmalai",
            category: "Bengali Sweet",
            description: "Creamy Rasmalai with rich milk.",
            price: 90,
            image: rasmalai
        },

        {
            _id: "7",
            name: "Palkova",
            category: "Milk Sweet",
            description: "Famous Srivilliputhur Palkova.",
            price: 100,
            image: palkova
        },

        {
            _id: "8",
            name: "Milk Cake",
            category: "Milk Sweet",
            description: "Traditional Milk Cake.",
            price: 110,
            image: milkcake
        },

        {
            _id: "9",
            name: "Soan Papdi",
            category: "Festival Special",
            description: "Flaky festival sweet.",
            price: 90,
            image: soanpapdi
        },

        {
            _id: "10",
            name: "Badam Halwa",
            category: "Festival Special",
            description: "Premium Almond Halwa.",
            price: 150,
            image: badamhalwa
        }

    ];

    const product = products.find((item) => item._id === id);

    if (!product) {

        return <h2>Product Not Found</h2>;

    }

    const averageRating =
        reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length;

    const handleAddReview = (newReview) => {

        setReviews([newReview, ...reviews]);

    };

    return (

        <>

            <Navbar />

            <div className="product-details-container">

                <div className="product-details">

                    <div className="product-image-section">

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                    </div>

                    <div className="product-info">

                        <h1>{product.name}</h1>

                        <p className="product-category">

                            {product.category}

                        </p>

                        <RatingStars

                            rating={Math.round(averageRating)}

                        />

                        <p className="rating-text">

                            {averageRating.toFixed(1)} / 5

                        </p>

                        <p className="product-description">

                            {product.description}

                        </p>

                        <h2 className="product-price">

                            ₹ {product.price}

                        </h2>

                        <button

                            className="add-cart-btn"

                            onClick={() => {

                                addToCart(product);

                                alert("Added to Cart");

                            }}

                        >

                            Add To Cart

                        </button>

                    </div>

                </div>

                <div className="review-section">

                    <h2>

                        Customer Reviews

                    </h2>

                    {

                        reviews.map((review, index) => (

                            <ReviewCard

                                key={index}

                                review={review}

                            />

                        ))

                    }

                    <ReviewForm

                        onAddReview={handleAddReview}

                    />

                </div>

            </div>

            <Footer />

        </>

    );

}

export default ProductDetails;