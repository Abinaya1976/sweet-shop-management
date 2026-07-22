import "../styles/categoryFilter.css";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {

    const categories = [
        "All",
        "Traditional",
        "Milk Sweet",
        "Bengali Sweet",
        "Dry Fruit Sweet",
        "Festival Special"
    ];

    return (

        <div className="category-container">

            {

                categories.map(category => (

                    <button
                        key={category}
                        className={
                            selectedCategory === category
                                ? "category-btn active-category"
                                : "category-btn"
                        }
                        onClick={() =>
                            setSelectedCategory(category)
                        }
                    >

                        {category}

                    </button>

                ))

            }

        </div>

    );

}

export default CategoryFilter;