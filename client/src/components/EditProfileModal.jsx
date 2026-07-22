import { useState } from "react";
import "../styles/editProfile.css";

function EditProfileModal({

    user,

    onClose,

    onSave

}) {

    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(formData);

    };

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>Edit Profile</h2>

                <form onSubmit={handleSubmit}>

                    <input

                        type="text"

                        name="name"

                        value={formData.name}

                        onChange={handleChange}

                        placeholder="Name"

                    />

                    <input

                        type="email"

                        name="email"

                        value={formData.email}

                        onChange={handleChange}

                        placeholder="Email"

                    />

                    <input

                        type="text"

                        name="phone"

                        value={formData.phone}

                        onChange={handleChange}

                        placeholder="Phone"

                    />

                    <textarea

                        name="address"

                        value={formData.address}

                        onChange={handleChange}

                        placeholder="Address"

                    />

                    <div className="modal-buttons">

                        <button type="submit">

                            Save

                        </button>

                        <button

                            type="button"

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

export default EditProfileModal;