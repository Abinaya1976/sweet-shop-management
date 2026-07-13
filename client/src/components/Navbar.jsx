import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return (

        <div className="navbar">

            <div>

                <h2>🍬 Smart Sweet Shop</h2>

                <p>{today}</p>

            </div>

            <div className="navbar-right">

                <div>

                    <h4>Welcome, {user?.name}</h4>

                    <p>{user?.role}</p>

                </div>

                <button
                    className="primary-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Navbar;