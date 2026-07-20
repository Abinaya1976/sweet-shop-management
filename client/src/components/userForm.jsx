import { useEffect, useState } from "react";
import { branchAPI } from "../services/api";
import api from "../services/api";

function UserForm({ fetchUsers }) {

    const [branches, setBranches] = useState([]);

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        role: "customer",
        branchId: ""

    });

    useEffect(() => {

        loadBranches();

    }, []);

    const loadBranches = async () => {

        try {

            const res = await branchAPI.getAll();

            setBranches(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post(

                "/users",

                formData

            );

            alert("User Created Successfully");

            fetchUsers();

            setFormData({

                name: "",
                email: "",
                password: "",
                role: "customer",
                branchId: ""

            });

        } catch (error) {

            console.log(error);

            alert("Failed");

        }

    };

    return (

        <div className="user-form">

            <h2>Create User</h2>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"

                    name="name"

                    placeholder="Name"

                    value={formData.name}

                    onChange={handleChange}

                    required

                />

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

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

                    required

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

                {

                    formData.role === "manager" &&

                    <select

                        name="branchId"

                        value={formData.branchId}

                        onChange={handleChange}

                        required

                    >

                        <option value="">

                            Select Branch

                        </option>

                        {

                            branches.map(branch => (

                                <option

                                    key={branch._id}

                                    value={branch._id}

                                >

                                    {branch.branchName}

                                </option>

                            ))

                        }

                    </select>

                }

                <button>

                    Create User

                </button>

            </form>

        </div>

    );

}

export default UserForm;