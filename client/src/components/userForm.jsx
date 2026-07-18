import { useEffect, useState } from "react";
import api from "../services/api";

function UserForm({

    fetchUsers,

    selectedUser,

    setSelectedUser,

}) {

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: "",

        role: "customer",

    });

    // ------------------------
    // Fill form while editing
    // ------------------------

    useEffect(() => {

        if (selectedUser) {

            setFormData({

                name: selectedUser.name,

                email: selectedUser.email,

                password: "",

                role: selectedUser.role,

            });

        }

    }, [selectedUser]);

    // ------------------------
    // Handle Input Change
    // ------------------------

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    // ------------------------
    // Submit Form
    // ------------------------

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (selectedUser) {

                // UPDATE USER

                await api.put(

                    `/users/${selectedUser._id}`,

                    formData

                );

                alert("User Updated Successfully");

            }

            else {

                // CREATE USER

                await api.post(

                    "/auth/register",

                    formData

                );

                alert("User Added Successfully");

            }

            fetchUsers();

            setSelectedUser(null);

            setFormData({

                name: "",

                email: "",

                password: "",

                role: "customer",

            });

        }

        catch (error) {

            console.error(error);

            alert(

                error.response?.data?.message ||

                "Something went wrong"

            );

        }

    };

    return (

        <div className="user-form">

            <h2>

                {

                    selectedUser

                        ? "Update User"

                        : "Add New User"

                }

            </h2>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"

                    name="name"

                    placeholder="Enter Name"

                    value={formData.name}

                    onChange={handleChange}

                    required

                />

                <input

                    type="email"

                    name="email"

                    placeholder="Enter Email"

                    value={formData.email}

                    onChange={handleChange}

                    required

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    value={formData.password}

                    onChange={handleChange}

                />

                <select

                    name="role"

                    value={formData.role}

                    onChange={handleChange}

                >

                    <option value="customer">

                        Customer

                    </option>

                    <option value="manager">

                        Manager

                    </option>

                    <option value="admin">

                        Admin

                    </option>

                </select>

                <button

                    type="submit"

                    className="primary-btn"

                >

                    {

                        selectedUser

                            ? "Update User"

                            : "Add User"

                    }

                </button>

            </form>

        </div>

    );

}

export default UserForm;