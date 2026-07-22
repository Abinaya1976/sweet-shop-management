import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import EditProfileModal from "../components/EditProfileModal";

function Profile() {

    const [user, setUser] = useState({

        name: "Abinaya Kumar",

        email: "abinaya@gmail.com",

        phone: "9876543210",

        address: "Chennai",

        role: "Customer"

    });

    const [showModal, setShowModal] = useState(false);

    const handleSave = (updatedUser) => {

        setUser(updatedUser);

        setShowModal(false);

    };

    return (

        <>

            <Navbar />

            <div className="profile-page">

                <ProfileCard

                    user={user}

                    onEdit={() => setShowModal(true)}

                />

                {

                    showModal &&

                    <EditProfileModal

                        user={user}

                        onClose={() => setShowModal(false)}

                        onSave={handleSave}

                    />

                }

            </div>

            <Footer />

        </>

    );

}

export default Profile;