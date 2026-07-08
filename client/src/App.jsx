import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Branches from "./pages/Branches";
import Capacity from "./pages/Capacity";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/branches"
        element={
          <ProtectedRoute>
            <Branches />
          </ProtectedRoute>
        }
      />

      <Route
        path="/capacity"
        element={
          <ProtectedRoute>
            <Capacity />
          </ProtectedRoute>
        }
      />

    </Routes>

  );
}

export default App;