import "../styles/searchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {

    return (

        <div className="search-container">

            <input
                type="text"
                placeholder="🔍 Search sweets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

        </div>

    );

}

export default SearchBar;