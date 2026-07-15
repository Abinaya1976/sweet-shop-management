import { useEffect, useState } from "react";
import { branchAPI, capacityAPI, productAPI } from "../services/api";

function CapacityForm({ capacity, refresh, onClose }) {

    const [branches, setBranches] = useState([]);
    const [products, setProducts] = useState([]);

    const [branch, setBranch] = useState(
        capacity?.branch?._id || capacity?.branch || ""
    );

    const [product, setProduct] = useState(
        capacity?.product?._id || capacity?.product || ""
    );

    const [dailyCapacity, setDailyCapacity] = useState(
        capacity?.dailyCapacity || ""
    );

    useEffect(() => {

        loadBranches();

        loadProducts();

    }, []);

    const loadBranches = async () => {

        try {

            const res = await branchAPI.getAll();

            setBranches(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const loadProducts = async () => {

        try {

            const res = await productAPI.getAll();

            setProducts(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = {

            branch,

            product,

            dailyCapacity,

        };

        try {

            if (capacity) {

                await capacityAPI.update(
                    capacity._id,
                    data
                );

            } else {

                await capacityAPI.create(data);

            }

            refresh();

            onClose();

        } catch (err) {

            console.log(err);

            alert("Unable to save capacity.");

        }

    };

    return (

        <div className="modal">

            <div className="modal-content">

                <h2>

                    {capacity
                        ? "Edit Capacity"
                        : "Add Capacity"}

                </h2>

                <form onSubmit={handleSubmit}>

                    <label>Branch</label>

                    <select

                        value={branch}

                        onChange={(e) =>
                            setBranch(e.target.value)
                        }

                        required

                    >

                        <option value="">

                            Select Branch

                        </option>

                        {

                            branches.map((item) => (

                                <option
                                    key={item._id}
                                    value={item._id}
                                >

                                    {item.branchName}

                                </option>

                            ))

                        }

                    </select>

                    <label>Product</label>

                    <select

                        value={product}

                        onChange={(e) =>
                            setProduct(e.target.value)
                        }

                        required

                    >

                        <option value="">

                            Select Product

                        </option>

                        {

                            products.map((item) => (

                                <option
                                    key={item._id}
                                    value={item._id}
                                >

                                    {item.name}

                                </option>

                            ))

                        }

                    </select>

                    <label>Daily Capacity</label>

                    <input

                        type="number"

                        placeholder="Daily Capacity"

                        value={dailyCapacity}

                        onChange={(e) =>
                            setDailyCapacity(e.target.value)
                        }

                        required

                    />

                    <div className="form-buttons">

                        <button
                            className="primary-btn"
                            type="submit"
                        >

                            Save

                        </button>

                        <button

                            type="button"

                            className="cancel-btn"

                            onClick={onClose}

                        >

                            Cancel

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CapacityForm;