import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

function Navbar() {

    const { cart } = useCart();

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <header className="navbar">

            {/* Top Section */}

            <div className="navbar-top">

                <div
                    className="logo"
                    onClick={() => navigate("/home")}
                >

                    <h1>🧁 Sweetie Pies</h1>

                    <span>Happiness in Every Bite</span>

                </div>

                <SearchBar />

                <div className="navbar-right">

                    <Link
                        to="/cart"
                        className="cart-icon"
                    >

                        <FaShoppingCart />

                        <span className="cart-count">

                            {totalItems}

                        </span>

                    </Link>

                    <div className="user-info">

                        <FaUserCircle size={25} />

                        <span>

                            {user?.name}

                        </span>

                    </div>

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >

                        Logout

                    </button>

                </div>

            </div>

            {/* Bottom Menu */}

            <nav className="navbar-menu">

                <Link to="/home">

                    Home

                </Link>

                <Link to="/about">

                    About

                </Link>

                <Link to="/home">

                    All Sweets

                </Link>

                <Link to="/my-orders">

                    My Orders

                </Link>

                <Link to="/contact">

                    Contact

                </Link>

            </nav>

        </header>

    );

}

export default Navbar;