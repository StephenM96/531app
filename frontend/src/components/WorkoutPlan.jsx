import React, { useState } from "react";
import LiftInput from "./LiftInput";
import WorkoutGenerate from "./WorkoutGenerate";

const WorkoutPlan = () => {
  // ... (remaining imports and hook definitions)

  return (
    <div>
      <h2>Enter Weights and Reps Achieved</h2>
      {Object.keys(lifts).map((lift) => (
        <LiftInput
          key={lift}
          lift={lift}
          lifts={lifts}
          handleInputChange={handleInputChange}
        />
      ))}
      <h2>3-Week Workout Plan</h2>
      {Array.from({ length: 3 }, (_, i) => i + 1).map((week) => (
        <div key={week}>
          {Object.keys(lifts).map((lift) => (
            <WorkoutGenerate
              key={lift}
              lift={lift}
              details={lifts[lift]}
              week={week}
              roundToNearest5={roundToNearest5}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
