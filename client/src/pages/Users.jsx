import { useEffect, useState } from "react";
import { userAPI } from "../services/api";
import DashboardLayout from "../layouts/DashboardLayout";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
import api from "../services/api";
import "../styles/users.css";


function Users() {

    // Stores all users from database
    const [users, setUsers] = useState([]);

    // Loading spinner
    const [loading, setLoading] = useState(true);

    // Selected user for editing
    const [selectedUser, setSelectedUser] = useState(null);

    // -----------------------------
    // Fetch Users
    // -----------------------------
    const fetchUsers = async () => {

        try {

            const response = await userAPI.getAll();

setUsers(response.data);

        } catch (error) {

            console.error("Failed to fetch users", error);

        } finally {

            setLoading(false);

        }

    };

    // -----------------------------
    // Delete User
    // -----------------------------
    const deleteUser = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        try {

            await userAPI.delete(id);

            fetchUsers();

        } catch (error) {

            console.error("Delete Failed", error);

        }

    };

    // -----------------------------
    // Load users once
    // -----------------------------
    useEffect(() => {

        fetchUsers();

    }, []);

    return (

        <DashboardLayout>

            <div className="users-page">

                <div className="page-header">

                    <h1>User Management</h1>

                    <p>
                        Manage customers, managers and administrators.
                    </p>

                </div>

                <UserForm

                    fetchUsers={fetchUsers}

                    selectedUser={selectedUser}

                    setSelectedUser={setSelectedUser}

                />

                <UserTable

                    users={users}

                    loading={loading}

                    deleteUser={deleteUser}

                    setSelectedUser={setSelectedUser}

                />

            </div>

        </DashboardLayout>

    );

}

export default Users;