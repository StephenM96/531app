import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      {/* extra dashboard components */}
      {/* <label>Squat Max Weight:</label>
        <input
          type="text"
          name="squatOriginalMaxWeight"
          value={formData.squatOriginalMaxWeight}
          onChange={handleInputChange}
        />
        <label>Squat Max Reps:</label>
        <input
          type="text"
          name="squatOriginalMaxReps"
          value={formData.squatOriginalMaxReps}
          onChange={handleInputChange}
        />
        <label>Bench Max Weight:</label>
        <input
          type="text"
          name="benchOriginalMaxWeight"
          value={formData.benchOriginalMaxWeight}
          onChange={handleInputChange}
        />
        <label>Bench Max Reps:</label>
        <input
          type="text"
          name="benchOriginalMaxReps"
          value={formData.benchOriginalMaxReps}
          onChange={handleInputChange}
        />
        <label>Deadlift Max Weight:</label>
        <input
          type="text"
          name="deadliftOriginalMaxWeight"
          value={formData.deadliftOriginalMaxWeight}
          onChange={handleInputChange}
        />
        <label>Deadlift Max Reps:</label>
        <input
          type="text"
          name="deadliftOriginalMaxReps"
          value={formData.deadliftOriginalMaxReps}
          onChange={handleInputChange}
        />
        <label>Overhead Press Max Weight:</label>
        <input
          type="text"
          name="overheadPressOriginalMaxWeight"
          value={formData.overheadPressOriginalMaxWeight}
          onChange={handleInputChange}
        />
        <label>Overhead Press Max Reps:</label>
        <input
          type="text"
          name="overheadPressOriginalMaxReps"
          value={formData.overheadPressOriginalMaxReps}
          onChange={handleInputChange}
        /> */}
        {/* add functionality above to save max numbers? */}
      <Link to="/workout-plan">Generate a Workout Plan</Link>
      <div>
      <Link to="/Workout">View Workout Archive</Link>
      </div>
    </div>
  );
};

export default Dashboard;
