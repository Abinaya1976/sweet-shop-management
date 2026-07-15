import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import CapacityTable from "../components/CapacityTable";
import CapacityForm from "../components/CapacityForm";
import { capacityAPI } from "../services/api";
import "../styles/capacity.css";

function Capacity() {

    const [capacities, setCapacities] = useState([]);
    const [filteredCapacities, setFilteredCapacities] = useState([]);
    const [search, setSearch] = useState("");

    const [showForm, setShowForm] = useState(false);

    const [selectedCapacity, setSelectedCapacity] = useState(null);

    useEffect(() => {
        loadCapacities();
    }, []);

    useEffect(() => {

        const result = capacities.filter((capacity) => {

            const branch =
                capacity.branch?.branchName || "";

            const product =
                capacity.product?.name || "";

            return (
                branch.toLowerCase().includes(search.toLowerCase()) ||
                product.toLowerCase().includes(search.toLowerCase())
            );

        });

        setFilteredCapacities(result);

    }, [search, capacities]);

    const loadCapacities = async () => {

        try {

            const res = await capacityAPI.getAll();

            setCapacities(res.data);

            setFilteredCapacities(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    const handleAdd = () => {

        setSelectedCapacity(null);

        setShowForm(true);

    };

    const handleEdit = (capacity) => {

        setSelectedCapacity(capacity);

        setShowForm(true);

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete Capacity?"))
            return;

        try {

            await capacityAPI.delete(id);

            loadCapacities();

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <DashboardLayout>

            <div className="page-header">

                <div>

                    <h1>Capacity Management</h1>

                    <p>

                        Manage production capacity of every branch.

                    </p>

                </div>

                <button
                    className="primary-btn"
                    onClick={handleAdd}
                >

                    + Add Capacity

                </button>

            </div>

            <div className="search-container">

                <input

                    type="text"

                    placeholder="Search..."

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                />

            </div>

            <CapacityTable

                capacities={filteredCapacities}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

            {

                showForm && (

                    <CapacityForm

                        capacity={selectedCapacity}

                        refresh={loadCapacities}

                        onClose={() => setShowForm(false)}

                    />

                )

            }

        </DashboardLayout>

    );

}

export default Capacity;