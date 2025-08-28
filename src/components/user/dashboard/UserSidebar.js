import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div>
      <h3>User Sidebar</h3>
      <ul>
        <li><Link to="/user-dashboard">Dashboard</Link></li>
        <li><Link to="/user/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default UserSidebar;
