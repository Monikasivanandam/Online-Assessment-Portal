import { useNavigate } from "react-router-dom";

import "../../styles/Admin.css";

function AdminDashboard() {
  const navigate = useNavigate();


  const user = JSON.parse(localStorage.getItem("user"));


  if (!user || user.role !== "admin") {
    return (
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Access Denied
      </h1>
    );
  }

  return (
    <div className="page-container">
      <div className="admin-card">
        <h1>Admin Dashboard</h1>

        <h3>
          Welcome,
          {user.name}
        </h3>


        <button
          className="admin-btn"
          onClick={() => navigate("/admin/students")}
        >
          View Students
        </button>


        <button
          className="admin-btn"
          onClick={() => navigate("/admin/results")}
        >
          View Results
        </button>


        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("user");

            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
