import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

import "../styles/home.css";

function Home() {

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");

    const [sortOption, setSortOption] = useState("default");

    return (

        <>

            <Navbar />

            <Hero />

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <SortDropdown
                sortOption={sortOption}
                setSortOption={setSortOption}
            />

            <ProductGrid
                searchTerm={searchTerm}
                selectedCategory={selectedCategory}
                sortOption={sortOption}
            />

            <Footer />

        </>

    );

}

export default Home;