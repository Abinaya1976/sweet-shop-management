function RecentOrders({ orders }) {
  return (
    <div className="recent-orders">

      <h2>Recent Orders</h2>

      <table className="recent-orders-table">

        <thead>

          <tr>

            <th>Customer</th>

            <th>Product</th>

            <th>Quantity</th>

            <th>Status</th>

            <th>Delivery Date</th>

          </tr>

        </thead>

        <tbody>

          {orders.length > 0 ? (

            orders.slice(0, 8).map((order) => {

              const productName =
                typeof order.product === "object"
                  ? order.product.name
                  : order.product;

              return (

                <tr key={order._id}>

                  <td>{order.customerName}</td>

                  <td>{productName}</td>

                  <td>{order.quantity}</td>

                  <td>

                    <span
                      className={
                        order.status === "Completed"
                          ? "status completed"
                          : "status pending"
                      }
                    >
                      {order.status}
                    </span>

                  </td>

                  <td>

                    {new Date(
                      order.deliveryDate
                    ).toLocaleDateString()}

                  </td>

                </tr>

              );

            })

          ) : (

            <tr>

              <td colSpan="5">

                No Orders Found

              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default RecentOrders;