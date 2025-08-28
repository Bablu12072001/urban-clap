import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { loginUser, isAuthenticated, getRole } from "../utils/auth";
import LoginImage from "../assets/images/login_image.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("site_engineer");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if the user is already logged in and redirect
  useEffect(() => {
    if (isAuthenticated()) {
      const role = getRole();
      if (role === "admin") {
        navigate("/admin-dashboard"); // Redirect to admin dashboard
      } else if (role === "site_engineer") {
        navigate("/user-dashboard"); // Redirect to user dashboard
      }
    }
  }, [navigate]);

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Clear previous error

    try {
      // Send login API request with role in lowercase
      const response = await axios.post(
        "https://3jck9ew4jh.execute-api.ap-south-1.amazonaws.com/IOCL/iocl_login",
        {
          email,
          password,
          role: role.toLowerCase(), // Pass role in lowercase
        }
      );

      // Log the response data
      const token = response.data["body-json"]["body"]["token"];

      if (token) {
        // Decode the JWT token to access user details (e.g., role)
        const decodedToken = jwtDecode(token);
        console.log(decodedToken["role"]); // Debugging purpose

        // Store user data and token in localStorage (for session persistence)
        loginUser({ token, ...decodedToken });

        // Redirect based on role (extracted from the decoded token)
        if (decodedToken["role"] === "admin") {
          navigate("/admin-dashboard"); // Redirect to admin dashboard
        } else {
          navigate("/user-dashboard"); // Redirect to user dashboard
        }
      } else {
        setError("Invalid login credentials");
      }
    } catch (err) {
      // Handle error if the request fails
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Left Section - Image */}
      <div className="lg:w-2/3 bg-blue-600 flex items-center justify-center">
        <img
          src={LoginImage}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Login Form */}
      <div className="lg:w-1/3 p-8 flex items-center justify-center">
        <div className="p-2 md:p-8 w-full max-w-md">
          Sign in to your account
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6"></h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-medium">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-medium">
                Select Role:
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="site_engineer">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
