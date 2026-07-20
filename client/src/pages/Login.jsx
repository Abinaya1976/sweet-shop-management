import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";
import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const response = await api.post("/auth/login", {
                email,
                password,
            });

            const { token, user } = response.data;

            // Save user in Auth Context
            login(token, user);

            // Redirect based on role
            if (user.role === "admin") {

                navigate("/admin/dashboard");

            }
            else if (user.role === "manager") {

                navigate("/manager/dashboard");

            }
            else {

                navigate("/home");

            }

        } catch (err) {

            setError(
                err.response?.data?.message || "Login Failed"
            );

        }

    };

    return (

        <div className="login-container">

            <form
                className="login-form"
                onSubmit={handleLogin}
            >

                <h1>Sweetie Pies</h1>

                <h2>Login</h2>

                {error && (

                    <p className="error-message">
                        {error}
                    </p>

                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <button type="submit">

                    Login

                </button>

            </form>

        </div>

    );

}

export default Login;