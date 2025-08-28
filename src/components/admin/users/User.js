import React from "react";

function User() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      {/* Upgrade Account Section */}
      <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white p-6 mt-4 rounded-lg mx-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Upgrade Your Account</h2>
            <p className="text-sm">Get Ultimate Benefits of Ingenious</p>
          </div>
          <button className="bg-white text-red-500 px-4 py-2 rounded-full text-sm font-semibold">
            Upgrade Account &rarr;
          </button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="text-red-500 text-4xl">📊</div>
          <h3 className="text-sm font-semibold mt-2">My Team</h3>
          <p className="text-lg font-bold">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">👥</div>
          <h3 className="text-sm font-semibold mt-2">My Direct</h3>
          <p className="text-lg font-bold">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="text-blue-500 text-4xl">📊</div>
          <h3 className="text-sm font-semibold mt-2">Pins</h3>
          <p className="text-lg font-bold">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <div className="text-purple-500 text-4xl">🎯</div>
          <h3 className="text-sm font-semibold mt-2">Support</h3>
          <p className="text-lg font-bold">1</p>
        </div>
      </div>

      {/* Profile and Wallet */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-6">
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="rounded-lg"
          />
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center text-white text-lg">
              👤
            </div>
            <p className="ml-4 font-semibold">User Name</p>
          </div>
        </div>
        <div className="bg-yellow-500 rounded-lg shadow p-6 text-white">
          <h3 className="text-sm font-semibold">Wallet Balance</h3>
          <p className="text-2xl font-bold">Rs. 0</p>
        </div>
        <div className="bg-purple-500 rounded-lg shadow p-6 text-white">
          <h3 className="text-sm font-semibold">Total Payout</h3>
          <p className="text-2xl font-bold">Rs. 0</p>
        </div>
      </div>

      {/* My Business Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-semibold">My Business</h3>
          <div className="grid grid-cols-2 mt-4">
            <div>
              <h4 className="text-sm font-semibold">Left</h4>
              <p className="text-sm">Users: 0</p>
              <p className="text-sm">Points: 0</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Right</h4>
              <p className="text-sm">Users: 0</p>
              <p className="text-sm">Points: 0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
