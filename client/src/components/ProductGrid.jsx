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

import "../styles/productGrid.css";

function ProductGrid({

    searchTerm,

    selectedCategory,

    sortOption

}) {

    const products = [

        {
            _id: "1",
            name: "Laddu",
            category: "Traditional",
            description: "Traditional Besan Laddu made with pure ghee.",
            price: 40,
            image: laddu
        },

        {
            _id: "2",
            name: "Mysore Pak",
            category: "Traditional",
            description: "Authentic Ghee Mysore Pak.",
            price: 80,
            image: mysorepak
        },

        {
            _id: "3",
            name: "Gulab Jamun",
            category: "Milk Sweet",
            description: "Soft Gulab Jamuns soaked in sugar syrup.",
            price: 60,
            image: gulabjamun
        },

        {
            _id: "4",
            name: "Kaju Katli",
            category: "Dry Fruit Sweet",
            description: "Premium Cashew Delight.",
            price: 120,
            image: kajukatli
        },

        {
            _id: "5",
            name: "Rasagulla",
            category: "Bengali Sweet",
            description: "Fresh and juicy Rasagullas.",
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
            description: "Soft Milk Cake prepared traditionally.",
            price: 110,
            image: milkcake
        },

        {
            _id: "9",
            name: "Soan Papdi",
            category: "Festival Special",
            description: "Flaky Festival Sweet.",
            price: 90,
            image: soanpapdi
        },

        {
            _id: "10",
            name: "Badam Halwa",
            category: "Festival Special",
            description: "Rich Almond Halwa.",
            price: 150,
            image: badamhalwa
        }

    ];

    // SEARCH + CATEGORY FILTER

    const filteredProducts = products.filter((product) => {

        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =

            selectedCategory === "All" ||

            product.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    // SORT

    const sortedProducts = [...filteredProducts];

    switch (sortOption) {

        case "priceLow":

            sortedProducts.sort((a, b) => a.price - b.price);

            break;

        case "priceHigh":

            sortedProducts.sort((a, b) => b.price - a.price);

            break;

        case "nameAZ":

            sortedProducts.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            break;

        case "nameZA":

            sortedProducts.sort((a, b) =>
                b.name.localeCompare(a.name)
            );

            break;

        default:

            break;

    }

    return (

        <section className="product-grid">

            {

                sortedProducts.length > 0 ?

                    sortedProducts.map((product) => (

                        <ProductCard

                            key={product._id}

                            product={product}

                        />

                    ))

                    :

                    <h2>No Products Found</h2>

            }

        </section>

    );

}

export default ProductGrid;