import ProductCard from "./ProductCard";

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

function ProductGrid() {

    const products = [

        {
            _id: "1",
            name: "Laddu",
            category: "Traditional",
            description: "Fresh Besan Laddu made with pure ghee.",
            price: 400,
            image: laddu
        },

        {
            _id: "2",
            name: "Mysore Pak",
            category: "Traditional",
            description: "Soft and rich Mysore Pak.",
            price: 320,
            image: mysorepak
        },

        {
            _id: "3",
            name: "Gulab Jamun",
            category: "Milk Sweet",
            description: "Soft Gulab Jamun soaked in sugar syrup.",
            price: 350,
            image: gulabjamun
        },

        {
            _id: "4",
            name: "Kaju Katli",
            category: "Premium",
            description: "Premium cashew delight.",
            price: 850,
            image: kajukatli
        },

        {
            _id: "5",
            name: "Rasagulla",
            category: "Milk Sweet",
            description: "Spongy Bengali Rasagulla.",
            price: 300,
            image: rasagulla
        },

        {
            _id: "6",
            name: "Rasmalai",
            category: "Milk Sweet",
            description: "Creamy Rasmalai with saffron.",
            price: 420,
            image: rasmalai
        },

        {
            _id: "7",
            name: "Palkova",
            category: "Traditional",
            description: "Authentic Srivilliputhur Palkova.",
            price: 450,
            image: palkova
        },

        {
            _id: "8",
            name: "Milk Cake",
            category: "Milk Sweet",
            description: "Rich and soft Milk Cake.",
            price: 380,
            image: milkcake
        },

        {
            _id: "9",
            name: "Soan Papdi",
            category: "Traditional",
            description: "Flaky and delicious sweet.",
            price: 280,
            image: soanpapdi
        },

        {
            _id: "10",
            name: "Badam Halwa",
            category: "Premium",
            description: "Royal almond halwa.",
            price: 700,
            image: badamhalwa
        }

    ];

    return (

        <section className="product-grid-section">

            <h2>🍬 Our Delicious Sweets</h2>

            <p>

                Freshly prepared every day with love and premium ingredients.

            </p>

            <div className="product-grid">

                {

                    products.map(product => (

                        <ProductCard

                            key={product._id}

                            product={product}

                        />

                    ))

                }

            </div>

        </section>

    );

}

export default ProductGrid;