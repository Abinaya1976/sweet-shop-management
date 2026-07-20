function UserTable({

    users,

    loading,

    deleteUser,

    setSelectedUser

}) {

    if (loading) {

        return <h2>Loading Users...</h2>;

    }

    return (

        <table className="user-table">

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Email</th>

                    <th>Role</th>

                    <th>Branch</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    users.map(user => (

                        <tr key={user._id}>

                            <td>

                                {user.name}

                            </td>

                            <td>

                                {user.email}

                            </td>

                            <td>

                                {user.role}

                            </td>

                            <td>

                                {

                                    user.role === "manager"

                                        ? user.branchId?.branchName || "Not Assigned"

                                        : "-"

                                }

                            </td>

                            <td>

                                <button

                                    onClick={() =>
                                        setSelectedUser(user)
                                    }

                                >

                                    Edit

                                </button>

                                <button

                                    className="delete-btn"

                                    onClick={() =>
                                        deleteUser(user._id)
                                    }

                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default UserTable;
export default UserTable;