import "../styles/sortDropdown.css";

function SortDropdown({ sortOption, setSortOption }) {

    return (

        <div className="sort-container">

            <label>Sort By:</label>

            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >

                <option value="default">Default</option>

                <option value="priceLow">
                    Price: Low to High
                </option>

                <option value="priceHigh">
                    Price: High to Low
                </option>

                <option value="nameAZ">
                    Name: A to Z
                </option>

                <option value="nameZA">
                    Name: Z to A
                </option>

            </select>

        </div>

    );

}

export default SortDropdown;