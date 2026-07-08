import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from"../context/AuthContext";
import api from "../services/api";
import "../styles/login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const {login}=useAuth();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      
      login(
        response.data.token,
        response.data.user
      );

      navigate("/dashboard");
     

    } catch (err) {

      setError(
        err.response?.data?.message || "Login Failed"
      );

    }
  };

  return (

    <div className="login-container">

      <form className="login-form" onSubmit={handleLogin}>

        <h1>Smart Sweet Shop</h1>

        <h2>Login</h2>

        {error && <p>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );
}

export default Login;