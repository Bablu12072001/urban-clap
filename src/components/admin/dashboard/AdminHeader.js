import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="bg-slate-50 sticky top-0 flex items-center justify-between px-4 py-3 z-50 sm:px-6 md:py-4">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="#"
            className="text-blue-600 font-medium text-sm sm:text-base hover:underline"
          >
            View Website
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-1.5 sm:py-2 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 absolute left-2 top-2.5 sm:top-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm10 2l-4.35-4.35"
              />
            </svg>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4 mt-3 lg:mt-0">
          <p className="text-xs sm:text-sm text-gray-500">
            <span className="text-red-500 font-medium">Last Login:</span>{" "}
            Nov 29, 2024 02:35 PM
          </p>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
            >
              <img
                src="https://via.placeholder.com/32"
                alt="User Avatar"
                className="h-6 w-6 sm:h-8 sm:w-8 rounded-full object-cover border border-gray-300"
              />
              <span className="ml-1 sm:ml-2 text-gray-600 text-xs sm:text-sm hover:underline">
                arjunnrana
              </span>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 sm:w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                <button
                  onClick={() => navigate("/profile")} // Navigate to Profile
                  className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout} // Logout
                  className="w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
