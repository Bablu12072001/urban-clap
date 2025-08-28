import React from "react";
import UserSidebar from "./UserSidebar";

const UserDashboard = () => {
  const handleLogout = () => {
    // Clear token or user data from localStorage/sessionStorage
    localStorage.removeItem("token"); // or sessionStorage.removeItem("token")

    // Redirect to login page (if using React Router)
    window.location.href = "/login";
  };

  return (
    <div>
      <UserSidebar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
