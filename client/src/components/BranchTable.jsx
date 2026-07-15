function BranchTable({ branches, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table className="branch-table">

        <thead>
          <tr>
            <th>Branch Name</th>
            <th>Location</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {branches.length === 0 ? (

            <tr>
              <td colSpan="4" className="no-data">
                No Branches Found
              </td>
            </tr>

          ) : (

            branches.map((branch) => (

              <tr key={branch._id}>

                <td>{branch.branchName}</td>

                <td>{branch.location}</td>

                <td>{branch.manager}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(branch)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(branch._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>
    </div>
  );
}

export default BranchTable;