import { useState } from "react";
import { branchAPI } from "../services/api";

function BranchForm({ branch, refresh, onClose }) {

    const [branchName, setBranchName] = useState(
        branch?.branchName || ""
    );

    const [location, setLocation] = useState(
        branch?.location || ""
    );

    const [manager, setManager] = useState(
        branch?.manager || ""
    );

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data = {
            branchName,
            location,
            manager,
        };

        try {

            if (branch) {

                await branchAPI.update(
                    branch._id,
                    data
                );

            } else {

                await branchAPI.create(data);

            }

            refresh();

            onClose();

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

    };

    return (

        <div className="modal">

            <div className="modal-content">

                <h2>

                    {

                        branch

                            ? "Edit Branch"

                            : "Add Branch"

                    }

                </h2>

                <form onSubmit={handleSubmit}>

                    <input

                        type="text"

                        placeholder="Branch Name"

                        value={branchName}

                        onChange={(e) =>
                            setBranchName(e.target.value)
                        }

                        required

                    />

                    <input

                        type="text"

                        placeholder="Location"

                        value={location}

                        onChange={(e) =>
                            setLocation(e.target.value)
                        }

                        required

                    />

                    <input

                        type="text"

                        placeholder="Manager"

                        value={manager}

                        onChange={(e) =>
                            setManager(e.target.value)
                        }

                        required

                    />

                    <div className="form-buttons">

                        <button
                            type="submit"
                            className="primary-btn"
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

export default BranchForm;