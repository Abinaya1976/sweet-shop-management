import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {

    // Logged-in user
    const [user, setUser] = useState(null);

    // JWT Token
    const [token, setToken] = useState(null);

    // Loading state
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const savedToken = localStorage.getItem("token");

        const savedUser = localStorage.getItem("user");

        if (savedToken && savedUser) {

            setToken(savedToken);

            setUser(JSON.parse(savedUser));

        }

        setLoading(false);

    }, []);

    // Login Function
    const login = (token, user) => {

        localStorage.setItem("token", token);

        localStorage.setItem("user", JSON.stringify(user));

        setToken(token);

        setUser(user);

    };

    // Logout Function
    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setToken(null);

        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>

    );

};

// Custom Hook
export const useAuth = () => {

    return useContext(AuthContext);

};