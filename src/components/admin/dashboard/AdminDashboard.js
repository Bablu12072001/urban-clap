import React from 'react';
import AdminHeader from './AdminHeader';
import DashboardTile from './components/DashboardTile';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const AdminDashboard = () => {
  // Chart data
  const data = {
    labels: ['Nov 22', 'Nov 23', 'Nov 24', 'Nov 25', 'Nov 26', 'Nov 27', 'Nov 28', 'Nov 29', 'Nov 30', 'Dec 01'],
    datasets: [
      {
        label: 'Number of Joinings',
        data: [0, 0, 0, 0, 0, 0, 1, 4, 10, 0],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        pointRadius: 4,
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to take up more height on small screens
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 10,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#555',
          font: {
            size: 10, 
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
          font: {
            size: 10, 
          },
        },
      },
    },
  };

  return (
    <div>
      <AdminHeader />
      <div className="p-6">
        <p className="text-sm">DASHBOARD</p>
        {/* Dashboard Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1">
  {/* Group of 4 Tiles - First Row */}
  <DashboardTile />
  <DashboardTile />
  <DashboardTile />
  <DashboardTile isBlue={true} />

  {/* Group of 4 Tiles - Second Row */}
  <DashboardTile />
  <DashboardTile />
  <DashboardTile />
  <DashboardTile isBlue={true} />

  {/* Group of 4 Tiles - Third Row */}
  <DashboardTile />
  <DashboardTile />
  <DashboardTile />
  <DashboardTile isBlue={true} />

  {/* Group of 4 Tiles - Fourth Row */}
  <DashboardTile />
  <DashboardTile />
  <DashboardTile />
  <DashboardTile isBlue={true} />
</div>

        {/* New Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Last 7 Days Business Section */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl text-blue-500">Last 7 Days Business</h2>
            <p className="text-sm text-gray-500">Days & Sales</p>
            <table className="w-full mt-4 text-sm text-left">
              <thead>
                <tr>
                  <th className="border-b py-2">Date</th>
                  <th className="border-b py-2 text-right">Sales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Dec 01, 2024</td>
                  <td className="py-2 text-right">Rs. 0</td>
                </tr>
                <tr>
                  <td className="py-2">Nov 30, 2024</td>
                  <td className="py-2 text-right">Rs. 0</td>
                </tr>
                <tr>
                  <td className="py-2">Nov 29, 2024</td>
                  <td className="py-2 text-right">Rs. 0</td>
                </tr>
                <tr>
                  <td className="py-2">Nov 28, 2024</td>
                  <td className="py-2 text-right">Rs. 0</td>
                </tr>
                <tr>
                  <td className="py-2">Nov 27, 2024</td>
                  <td className="py-2 text-right">Rs. 0</td>
                </tr>
                <tr>
                  <td className="py-2">Nov 26, 2024</td>
                  <td className="py-2 text-right">Rs. 0</td>
                </tr>
                <tr>
                  <td className="py-2">Nov 25, 2024</td>
                  <td className="py-2 text-right">Rs. 0</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Last 10 Days Joining Section */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl text-blue-500">Last 10 Days</h2>
            <p className="text-sm text-gray-500">Joining</p>
            <div className="mt-4 h-64 w-full">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
