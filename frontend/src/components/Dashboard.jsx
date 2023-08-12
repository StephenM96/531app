import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      {/* extra dashboard components */}
      <Link to="/workout-plan">View Workout Plan</Link>
      <div>
      <Link to="/Workout">Placeholder link to individual workouts...</Link>
      </div>
    </div>
  );
};

export default Dashboard;
