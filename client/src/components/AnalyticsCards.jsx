import "./AnalyticsCards.css";

function AnalyticsCards({
  products,
  branches,
  orders,
  capacities,
}) {

  const totalCapacity = capacities.reduce(
    (sum, item) => sum + Number(item.dailyCapacity || 0),
    0
  );

  const pendingOrders = orders.filter(
    (order) => order.status !== "Completed"
  ).length;

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  ).length;

  const cards = [
    {
      title: "Products",
      value: products.length,
      icon: "🍭",
      color: "#FF9800",
    },
    {
      title: "Branches",
      value: branches.length,
      icon: "🏪",
      color: "#4CAF50",
    },
    {
      title: "Orders",
      value: orders.length,
      icon: "📦",
      color: "#2196F3",
    },
    {
      title: "Capacity",
      value: totalCapacity,
      icon: "⚡",
      color: "#9C27B0",
    },
    {
      title: "Pending",
      value: pendingOrders,
      icon: "🕒",
      color: "#F44336",
    },
    {
      title: "Completed",
      value: completedOrders,
      icon: "✅",
      color: "#009688",
    },
  ];

  return (

    <div className="analytics-cards">

      {cards.map((card) => (

        <div
          key={card.title}
          className="analytics-card"
          style={{ borderTop: `5px solid ${card.color}` }}
        >

          <div className="card-icon">
            {card.icon}
          </div>

          <div>

            <h2>{card.value}</h2>

            <p>{card.title}</p>

          </div>

        </div>

      ))}

    </div>

  );
}

export default AnalyticsCards;