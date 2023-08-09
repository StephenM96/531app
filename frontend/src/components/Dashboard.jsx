import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      {/* Various dashboard components */}
      <Link to="/workout-plan">View Workout Plan</Link> 
      <Link to="/Workout" />
    </div>
  );
};

export default Dashboard;