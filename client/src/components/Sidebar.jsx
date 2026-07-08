import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./../styles/sidebar.css";

function Sidebar() {

    const { user, logout } = useAuth();

    return (

        <div className="sidebar">

            <h2>🍬 Sweet Shop</h2>

            <NavLink to="/dashboard">
                Dashboard
            </NavLink>

            <NavLink to="/products">
                Products
            </NavLink>

            <NavLink to="/orders">
                Orders
            </NavLink>

            <NavLink to="/branches">
                Branches
            </NavLink>

            <NavLink to="/capacity">
                Capacity
            </NavLink>

            {
                user?.role === "admin" && (

                    <>

                        <NavLink to="/analytics">
                            Analytics
                        </NavLink>

                        <NavLink to="/users">
                            Users
                        </NavLink>

                    </>

                )
            }

            <button
                className="logout-btn"
                onClick={logout}
            >
                Logout
            </button>

        </div>

    );

}

export default Sidebar;