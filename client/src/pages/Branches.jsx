import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import BranchTable from "../components/BranchTable";
import BranchForm from "../components/BranchForm";
import { branchAPI } from "../services/api";
import "../styles/branches.css";

function Branches() {
  const [branches, setBranches] = useState([]);
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    loadBranches();
  }, []);

  useEffect(() => {
    const result = branches.filter(
      (branch) =>
        branch.branchName.toLowerCase().includes(search.toLowerCase()) ||
        branch.location.toLowerCase().includes(search.toLowerCase()) ||
        branch.manager.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredBranches(result);
  }, [search, branches]);

  const loadBranches = async () => {
    try {
      const res = await branchAPI.getAll();
      setBranches(res.data);
      setFilteredBranches(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = () => {
    setSelectedBranch(null);
    setShowForm(true);
  };

  const handleEdit = (branch) => {
    setSelectedBranch(branch);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this branch?"
    );

    if (!confirmDelete) return;

    try {
      await branchAPI.delete(id);
      loadBranches();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1>🏢 Branch Management</h1>
          <p>Manage all sweet shop branches.</p>
        </div>

        <button className="primary-btn" onClick={handleAdd}>
          + Add Branch
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search branch..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <BranchTable
        branches={filteredBranches}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {showForm && (
        <BranchForm
          branch={selectedBranch}
          refresh={loadBranches}
          onClose={() => setShowForm(false)}
        />
      )}
    </DashboardLayout>
  );
}

export default Branches;