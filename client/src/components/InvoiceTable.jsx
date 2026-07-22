function InvoiceTable({ items }) {

    return (

        <table className="invoice-table">

            <thead>

                <tr>

                    <th>Sweet</th>

                    <th>Qty</th>

                    <th>Price</th>

                </tr>

            </thead>

            <tbody>

                {

                    items.map((item) => (

                        <tr key={item.id}>

                            <td>{item.name}</td>

                            <td>{item.quantity}</td>

                            <td>

                                ₹ {item.price}

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default InvoiceTable;