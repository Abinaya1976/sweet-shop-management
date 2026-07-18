function UserTable({

    users,

    loading,

    deleteUser,

    setSelectedUser,

}) {

    if (loading) {

        return <h2>Loading Users...</h2>;

    }

    return (

        <div className="table-container">

            <table className="user-table">

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Role</th>

                        <th>Created</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.length === 0 ? (

                            <tr>

                                <td colSpan="5">

                                    No Users Found

                                </td>

                            </tr>

                        ) : (

                            users.map((user) => (

                                <tr key={user._id}>

                                    <td>{user.name}</td>

                                    <td>{user.email}</td>

                                    <td>

                                        <span className={`role ${user.role}`}>

                                            {user.role}

                                        </span>

                                    </td>

                                    <td>

                                        {

                                            new Date(

                                                user.createdAt

                                            ).toLocaleDateString()

                                        }

                                    </td>

                                    <td>

                                        <button

                                            className="edit-btn"

                                            onClick={() =>

                                                setSelectedUser(user)

                                            }

                                        >

                                            ✏ Edit

                                        </button>

                                        <button

                                            className="delete-btn"

                                            onClick={() =>

                                                deleteUser(user._id)

                                            }

                                        >

                                            🗑 Delete

                                        </button>

                                    </td>

                                </tr>

                            ))

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default UserTable;