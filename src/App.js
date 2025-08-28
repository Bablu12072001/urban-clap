import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import ManageUsers from "./components/admin/users/ManageUsers";
import AdminSettings from "./components/admin/settings/AdminSettings";
import UserDashboard from "./components/user/dashboard/UserDashboard";
import AdminLayout from "./components/admin/AdminLayout";
import UserProfile from "./components/user/profile/UserProfile";
import { isAuthenticated, getRole } from "./utils/auth";
import Tree from "./components/admin/binary/Tree";
import UsersLayout from "./components/admin/users/UsersLayout";
import User from "./components/admin/users/User";

// ProtectedRoute component to handle authentication and role-based redirection
const ProtectedRoute = ({ element, role }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  // Check if the user's role matches the required role
  if (getRole() !== role) {
    return <Navigate to="/login" />;
  }

  return element;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route - Login */}
        <Route path="/login" element={<Login />} />.
        {/* Admin Routes with Sidebar Layout */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute
              element={
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              }
              role="admin"
            />
          }
        />
        <Route
          path="/admin-dashboard/users/view"
          element={
            <ProtectedRoute
              element={
                <AdminLayout>
                  <ManageUsers />
                </AdminLayout>
              }
              role="admin"
            />
          }
        />
        <Route
          path="/admin-dashboard/business/binary/tree"
          element={
            <ProtectedRoute
              element={
                <AdminLayout>
                  <Tree />
                </AdminLayout>
              }
              role="admin"
            />
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute
              element={
                <AdminLayout>
                  <AdminSettings />
                </AdminLayout>
              }
              role="admin"
            />
          }
        />
        {/* User Routes (No Sidebar in this example, but you can add a user layout similarly) */}
        <Route
          path="/user/dashboard/user"
          element={
            <ProtectedRoute
              element={
                <UsersLayout>
                  <User />
                </UsersLayout>
              }
              role="admin"
            />
          }
        />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute element={<UserDashboard />} role="site_engineer" />
          }
        />
        <Route
          path="/user/profile"
          element={
            <ProtectedRoute element={<UserProfile />} role="site_engineer" />
          }
        />
        {/* Default Route - Redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
