import "../styles/profile.css";

function ProfileCard({ user, onEdit }) {

    return (

        <div className="profile-card">

            <div className="profile-avatar">

                <h1>

                    {user.name.charAt(0).toUpperCase()}

                </h1>

            </div>

            <h2>{user.name}</h2>

            <p className="profile-role">

                {user.role}

            </p>

            <div className="profile-details">

                <div className="detail">

                    <strong>Email</strong>

                    <span>{user.email}</span>

                </div>

                <div className="detail">

                    <strong>Phone</strong>

                    <span>{user.phone}</span>

                </div>

                <div className="detail">

                    <strong>Address</strong>

                    <span>{user.address}</span>

                </div>

            </div>

            <button

                className="edit-btn"

                onClick={onEdit}

            >

                Edit Profile

            </button>

        </div>

    );

}

export default ProfileCard;