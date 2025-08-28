import React from "react";
import { useNavigate } from "react-router-dom";
import AccountImg from '../../../assets/images/accout.png'
import TreeImg from '../../../assets/images/tree.png'
import EditImg from '../../../assets/images/edit.png'
import ViewImg from '../../../assets/images/view.png'
import AdminHeader from "../dashboard/AdminHeader";

const ManageUsers = () => {
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      access: "Pending",
      joiningDate: "Nov 29, 2024 04:49 PM",
      activationDate: "N.A",
      package: "Not Available",
      user: "Mr Vishnu Sawa (7915952)",
      sponsor: "Mr Ingenious Admin (4355708)",
      upline: "Mr Azharuddin Khan (6273431)",
      panCard: "Pending",
      bank: "Pending",
    },
    {
      id: 2,
      access: "Pending",
      joiningDate: "Sep 06, 2024 02:44 PM",
      activationDate: "Sep 23, 2024 12:32 PM",
      package: "Arman Sir Rajasthan (Rs. 4999)",
      user: "Mr Azharuddin Khan (6273431)",
      sponsor: "Mr RAKESH DAS (100000)",
      upline: "Mr MD UNUS (7623269)",
      panCard: "Pending",
      bank: "Pending",
    },
    {
      id: 3,
      access: "Pending",
      joiningDate: "Aug 30, 2024",
      activationDate: "N.A",
      package: "Not Available",
      user: "Mr MD UNUS (7623269)",
      sponsor: "Mr RAKESH DAS (100000)",
      upline: "Mr Venom Faisalganss77",
      panCard: "Pending",
      bank: "Pending",
    },
    {
      id: 4,
      access: "Pending",
      joiningDate: "Aug 30, 2024",
      activationDate: "N.A",
      package: "Not Available",
      user: "Mr MD UNUS (7623269)",
      sponsor: "Mr RAKESH DAS (100000)",
      upline: "Mr Venom Faisalganss77",
      panCard: "Pending",
      bank: "Pending",
    },
    {
      id: 5,
      access: "Pending",
      joiningDate: "Aug 30, 2024",
      activationDate: "N.A",
      package: "Not Available",
      user: "Mr MD UNUS (7623269)",
      sponsor: "Mr RAKESH DAS (100000)",
      upline: "Mr Venom Faisalganss77",
      panCard: "Pending",
      bank: "Pending",
    },
    {
      id: 6,
      access: "Pending",
      joiningDate: "Aug 30, 2024",
      activationDate: "N.A",
      package: "Not Available",
      user: "Mr MD UNUS (7623269)",
      sponsor: "Mr RAKESH DAS (100000)",
      upline: "Mr Venom Faisalganss77",
      panCard: "Pending",
      bank: "Pending",
    },
    {
      id: 7,
      access: "Pending",
      joiningDate: "Aug 30, 2024",
      activationDate: "N.A",
      package: "Not Available",
      user: "Mr MD UNUS (7623269)",
      sponsor: "Mr RAKESH DAS (100000)",
      upline: "Mr Venom Faisalganss77",
      panCard: "Pending",
      bank: "Pending",
    },
  ];

  const handleUserClick = (userId) => {
    const url = `/user/dashboard/user?user_id=${userId}`;
    window.open(url, '_blank')
  }

  const handleTreeClick = (userId) => {
    const url = `/admin-dashboard/business/binary/tree?user_id=${userId}`;
    window.open(url, '_blank')
  }

  return (
    <div className="bg-gray-100">
      <AdminHeader />
      
        {/* Filters Section */}
        <div className="bg-white p-4 rounded border mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
            <input
              type="text"
              placeholder="Search by Name or ID"
              className="border border-gray-300 rounded p-2  text-sm text-gray-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Joining Date Range"
              className="border border-gray-300 rounded p-2 text-sm text-gray-600 focus:outline-none"
            />
            <select className="border border-gray-300 rounded p-2  text-sm text-gray-600">
              <option value="">PAN Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <select className="border border-gray-300 rounded p-2  text-sm text-gray-600">
              <option value="">Bank KYC Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <select className="border border-gray-300 rounded p-2  text-sm text-gray-600">
              <option value="">User Access</option>
              <option value="pending">Pending</option>
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>
          <div className="flex flex-wrap justify-between items-center mt-4">
            <button className="bg-red-500 text-white text-sm px-4 py-2 rounded">
              Search
            </button>
            <button className="bg-gray-700 text-white text-sm px-4 py-2 rounded">
              Download Report
            </button>
            <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded">
              Refresh
            </button>
          </div>
        </div>
  
        {/* Table Section */}
        <div className="bg-white p-4 rounded border">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border border-gray-300">#</th>
                  <th className="p-3 border border-gray-300">ACCESS</th>
                  <th className="p-3 border border-gray-300">DATE</th>
                  <th className="p-3 border border-gray-300">PACKAGE</th>
                  <th className="p-3 border border-gray-300">USER</th>
                  <th className="p-3 border border-gray-300">SPONSOR</th>
                  <th className="p-3 border border-gray-300">DIRECT UPLINE</th>
                  <th className="p-3 border border-gray-300">PAN CARD</th>
                  <th className="p-3 border border-gray-300">BANK</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-100">
                    <td className="p-3 border border-gray-300">{index + 1}</td>
                    <td className="p-3 border border-gray-300" style={{ minWidth: '140px' }}>
                      <div className="flex justify-between space-x-2">
                        <img src={AccountImg} alt="Account" className="w-7 h-7 cursor-pointer p-1 hover:border hover:border-gray-300 rounded" onClick={() => handleUserClick(user.id)} />
                        <img src={TreeImg} alt="Tree" className="w-7 h-7 cursor-pointer  p-1 hover:border hover:border-gray-300 rounded" onClick={() => handleTreeClick(user.id)} />
                        <img src={EditImg} alt="Edit" className="w-7 h-7 cursor-pointer  p-1 hover:border hover:border-gray-300 rounded" />
                        <img src={ViewImg} alt="View" className="w-7 h-7 cursor-pointer  p-1 hover:border hover:border-gray-300 rounded" />
                      </div>
                    </td>
                    <td className="p-3 border border-gray-300">
                      <p className="text-blue-600">Joining: {user.joiningDate}</p>
                      
                      <p className="text-red-600">Activation: {user.activationDate}</p>
                    </td>
                    <td className="p-3 border border-gray-300 text-gray-500">{user.package}</td>
                    <td className="p-3 border border-gray-300 text-blue-600">{user.user}</td>
                    <td className="p-3 border border-gray-300 text-gray-500">{user.sponsor}</td>
                    <td className="p-3 border border-gray-300 text-gray-500">{user.upline}</td>
                    <td className="p-3 border border-gray-300">
                      <span className="bg-orange-300 text-orange-800 px-2 py-1 rounded">
                        {user.panCard}
                      </span>
                    </td>
                    <td className="p-3 border border-gray-300">
                      <span className="bg-orange-300 text-orange-800 px-2 py-1 rounded">
                        {user.bank}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
  
};

export default ManageUsers;
