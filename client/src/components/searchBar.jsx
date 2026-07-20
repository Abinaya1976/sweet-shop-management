import { FaSearch } from "react-icons/fa";

function SearchBar() {

    return (

        <div className="search-container">

            <FaSearch className="search-icon" />

            <input
                type="text"
                placeholder="Search your favourite sweets..."
            />

        </div>

    );

}

export default SearchBar;