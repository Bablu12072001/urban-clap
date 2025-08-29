import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { loginUser, isAuthenticated, getRole } from "../utils/auth";
import LoginImage from "../assets/images/login img.jpeg";
import Logo from "../assets/images/logo.jpeg";  // ✅ Import logo

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("site_engineer");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      const role = getRole();
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "site_engineer") {
        navigate("/user-dashboard");
      }
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://3jck9ew4jh.execute-api.ap-south-1.amazonaws.com/IOCL/iocl_login",
        {
          email,
          password,
          role: role.toLowerCase(),
        }
      );

      const token = response.data["body-json"]["body"]["token"];

      if (token) {
        const decodedToken = jwtDecode(token);
        loginUser({ token, ...decodedToken });

        if (decodedToken["role"] === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        setError("Invalid login credentials");
      }
    } catch (err) {
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row relative">



      <div className="lg:w-1/2 p-8 flex items-center justify-center">
        <div className="p-2 md:p-8 w-full max-w-md ">
          <div className="flex justify-center mb-6">
            <img
              src={Logo}
              alt="Logo"
              className=" object-cover rounded-full shadow-lg"
              style={{ height: '8.25rem', width: '8.25rem' }}
            />
          </div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Welcome back...
          </h2>
          <p className="mb-7 text-gray-600">
            Please enter your email, password and select role
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           shadow-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-medium">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           shadow-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 font-medium">Select Role:</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           shadow-md"
              >
                <option value="site_engineer">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {error && <p className="text-red-600 text-center mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-md shadow-lg 
                         bg-gradient-to-r from-blue-500 to-indigo-600 
                         hover:from-blue-600 hover:to-indigo-700 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2 flex items-center justify-center p-4">
        <img
          src={LoginImage}
          alt="Login Illustration"
          className="max-h-[500px] w-auto object-contain rounded-xl "
        />
      </div>
    </div>
  );
};

export default Login;
