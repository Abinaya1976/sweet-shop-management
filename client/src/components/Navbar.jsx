import "./../styles/navbar.css";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { user } = useAuth();

    return (

        <nav className="navbar">

            <div className="navbar-title">

                Smart Sweet Shop

            </div>

            <div className="navbar-user">

                <div>

                    <h4>{user?.name}</h4>

                    <p>{user?.role}</p>

                </div>

                <img
                    src="https://i.pravatar.cc/45"
                    alt="profile"
                />

            </div>

        </nav>

    );

}

export default Navbar;