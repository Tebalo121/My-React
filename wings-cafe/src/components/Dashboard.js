// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <nav>
        <Link to="/product-management" className="nav-link">Product Management</Link>
        <span> | </span>
        <Link to="/stock-management" className="nav-link">Stock Management</Link>
        <span> | </span>
        <Link to="/user-management" className="nav-link">User Management</Link>
      </nav>
      <style jsx>{`
        .dashboard {
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .nav-link {
          text-decoration: none;
          color: #007bff;
          font-weight: bold;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
