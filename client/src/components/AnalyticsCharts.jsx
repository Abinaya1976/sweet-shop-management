import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

function AnalyticsCharts({ orders, capacities }) {

  // Bar Chart Data
  const capacityData = capacities.map((item) => ({
    branch:
      typeof item.branch === "object"
        ? item.branch.branchName
        : item.branch,

    capacity: item.dailyCapacity,
  }));

  // Pie Chart Data
  const completed = orders.filter(
    (o) => o.status === "Completed"
  ).length;

  const pending = orders.filter(
    (o) => o.status !== "Completed"
  ).length;

  const orderStatusData = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Pending",
      value: pending,
    },
  ];

  const COLORS = ["#4CAF50", "#FF9800"];

  return (
    <div className="charts-container">

      {/* Capacity Chart */}

      <div className="chart-card">

        <h2>Branch Capacity</h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={capacityData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="branch" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="capacity"
              fill="#ff9800"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Pie Chart */}

      <div className="chart-card">

        <h2>Order Status</h2>

        <ResponsiveContainer width="100%" height={300}>

          <PieChart>

            <Pie
              data={orderStatusData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {orderStatusData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsCharts;