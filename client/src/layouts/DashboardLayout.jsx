import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function DashboardLayout({ children }) {

    return (

        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="page-content">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default DashboardLayout;