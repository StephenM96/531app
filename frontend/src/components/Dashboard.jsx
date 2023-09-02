import React from "react";
import { Link } from "react-router-dom";
import "./DashboardStyle.css";

const Dashboard = () => {
  return (
    <div className="page-container">
      <div id="dashboard-title">
        <h2>User Dashboard</h2>
        <div className="underline-title"></div>
      </div>
        <div className="btn-container">
          <div className="btn">
            <Link to="/workout-plan">
              Generate a Workout Plan
            </Link>
          </div>
          <div className="btn">
            <Link to="/workout-archive">
              View Workout Archive
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
