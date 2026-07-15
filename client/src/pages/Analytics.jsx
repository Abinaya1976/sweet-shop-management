import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import AnalyticsCards from "../components/AnalyticsCards";
import AnalyticsCharts from "../components/AnalyticsCharts";
import RecentOrders from "../components/RecentOrders";

import {
  productAPI,
  branchAPI,
  orderAPI,
  capacityAPI,
} from "../services/api";

import "../styles/analytics.css";

function Analytics() {
  const [products, setProducts] = useState([]);
  const [branches, setBranches] = useState([]);
  const [orders, setOrders] = useState([]);
  const [capacities, setCapacities] = useState([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const [
        productsRes,
        branchesRes,
        ordersRes,
        capacitiesRes,
      ] = await Promise.all([
        productAPI.getAll(),
        branchAPI.getAll(),
        orderAPI.getAll(),
        capacityAPI.getAll(),
      ]);

      setProducts(productsRes.data || []);
      setBranches(branchesRes.data || []);
      setOrders(ordersRes.data || []);
      setCapacities(capacitiesRes.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>

      <div className="analytics-header">

        <h1>Analytics Dashboard</h1>

        <p>
          Smart Sweet Shop Business Overview
        </p>

      </div>

      <AnalyticsCards

        products={products}

        branches={branches}

        orders={orders}

        capacities={capacities}

      />

      <AnalyticsCharts

        orders={orders}

        capacities={capacities}

      />

      <RecentOrders orders={orders} />

    </DashboardLayout>
  );
}

export default Analytics;