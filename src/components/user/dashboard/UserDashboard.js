import React from "react";
import UserSidebar from "./UserSidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar, Download, Users, UserCheck, Clock, ChartLine } from "lucide-react";
import Table from "./table"

const UserDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const revenueData = [
    { month: "Apr", cleaning: 30, services: 10 },
    { month: "May", cleaning: 80, services: 50 },
    { month: "Jun", cleaning: 300, services: 60 },
    { month: "Jul", cleaning: 220, services: 150 },
    { month: "Aug", cleaning: 500, services: 300 },
    { month: "Sep", cleaning: 250, services: 280 },
    { month: "Oct", cleaning: 400, services: 350 },
    { month: "Nov", cleaning: 220, services: 200 },
    { month: "Dec", cleaning: 500, services: 400 },
  ];

  const pieData = [
    { name: "Cleaning", value: 120 },
    { name: "Repairing", value: 210 },
    { name: "Services", value: 452 },
  ];

  const COLORS = ["#3b82f6", "#ef4444", "#f59e0b"];

  return (
    <div>
      <UserSidebar />


      <div style={{ padding: "20px", paddingLeft: "80px", paddingRight: "80px" }} className="flex-1 bg-gray-50 min-h-screen">

        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>


        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Revenue Overview</h2>


          <div className="flex flex-col items-end gap-2">

            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 transition flex items-center gap-2 text-sm">
              <Download size={16} /> Export Data
            </button>



            <div className="flex gap-3">
              <button className="px-3 py-2 border rounded-lg flex items-center gap-2 text-sm">
                <Calendar size={16} /> 1 Dec 2024
              </button>
              <button className="px-3 py-2 border rounded-lg flex items-center gap-2 text-sm">
                <Calendar size={16} /> 1 Jan 2025
              </button>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

          <div className="bg-white p-5 rounded-2xl shadow relative h-40">
            <div className="absolute top-4 right-4 p-2 bg-purple-100 rounded-xl">
              <Users className="text-purple-500" size={30} />
            </div>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">Total Users</p>
              <h2 className="text-2xl font-bold">40,689</h2>
              <p className="text-green-500 text-sm mt-1">↑ 8.5% Up from yesterday</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow relative h-40">
            <div className="absolute top-4 right-4 p-2 bg-yellow-100 rounded-xl">
              <UserCheck className="text-yellow-500" size={30} />
            </div>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">Total Providers</p>
              <h2 className="text-2xl font-bold">10,293</h2>
              <p className="text-green-500 text-sm mt-1">↑ 1.3% Up from past week</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow relative h-40">
            <div className="absolute top-4 right-4 p-2 bg-green-100 rounded-xl">
              <ChartLine className="text-green-500" size={30} />
            </div>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h2 className="text-2xl font-bold">9,000</h2>
              <p className="text-green-500 text-sm mt-1">↑ 1.3% Up from past week</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow relative h-40">
            <div className="absolute top-4 right-4 p-2 bg-red-100 rounded-xl">
              <Clock className="text-red-500" size={30} />
            </div>
            <div className="mt-8">
              <p className="text-gray-500 text-sm">Total Booking</p>
              <h2 className="text-2xl font-bold">2,040</h2>
              <p className="text-green-500 text-sm mt-1">↑ 1.8% Up from yesterday</p>
            </div>
          </div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="bg-white p-5 rounded-2xl shadow col-span-2">
            <h3 className="text-lg font-semibold mb-4">Revenue Graph</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cleaning" stroke="#3b82f6" strokeWidth={3} />
                <Line type="monotone" dataKey="services" stroke="#8b5cf6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Services Category</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>


            <div className="mt-4 space-y-1 text-sm">
              <p className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 inline-block rounded-full"></span>
                  Cleaning
                </span>
                120
              </p>
              <p className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
                  Repairing
                </span>
                210
              </p>
              <p className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-500 inline-block rounded-full"></span>
                  Services
                </span>
                452
              </p>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default UserDashboard;
