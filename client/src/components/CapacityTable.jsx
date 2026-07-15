function CapacityTable({ capacities, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <table className="capacity-table">

        <thead>
          <tr>
            <th>Branch</th>
            <th>Product</th>
            <th>Daily Capacity</th>
            <th>Allocated Today</th>
            <th>Remaining</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {capacities.length === 0 ? (

            <tr>
              <td colSpan="6" className="no-data">
                No Capacity Records Found
              </td>
            </tr>

          ) : (

            capacities.map((capacity) => {

              const branch =
                typeof capacity.branch === "object"
                  ? capacity.branch.branchName
                  : capacity.branch;

              const product =
                typeof capacity.product === "object"
                  ? capacity.product.name
                  : capacity.product;

              const allocated =
                capacity.allocatedToday || 0;

              const remaining =
                capacity.dailyCapacity - allocated;

              return (

                <tr key={capacity._id}>

                  <td>{branch}</td>

                  <td>{product}</td>

                  <td>{capacity.dailyCapacity}</td>

                  <td>{allocated}</td>

                  <td>{remaining}</td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => onEdit(capacity)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(capacity._id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              );

            })

          )}

        </tbody>

      </table>
    </div>
  );
}

export default CapacityTable;