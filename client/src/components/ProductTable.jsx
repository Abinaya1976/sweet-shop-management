function ProductTable({

    products,

    onEdit,

    onDelete

}) {

    return (

        <table className="product-table">

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Price</th>

                    <th>Category</th>

                    <th>Description</th>

                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    products.map((product) => (

                        <tr key={product._id}>

                            <td>{product.name}</td>

                            <td>₹{product.price}</td>

                            <td>{product.category}</td>

                            <td>{product.description}</td>

                            <td>

                                <button

                                    className="edit-btn"

                                    onClick={() => onEdit(product)}

                                >

                                    Edit

                                </button>

                                <button

                                    className="delete-btn"

                                    onClick={() => onDelete(product._id)}

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

export default ProductTable;