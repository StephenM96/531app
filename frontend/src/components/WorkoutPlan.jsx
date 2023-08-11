import React, { useState } from "react";
import LiftInput from "./LiftInput";
import WorkoutGenerate from "./WorkoutGenerate";

const WorkoutPlan = () => {
  const roundToNearest5 = (value) => Math.floor(value / 5) * 5;

  const [lifts, setLifts] = useState({
    Squat: { weightLifted: 200, reps: 5 },
    Bench: { weightLifted: 150, reps: 5 },
    Deadlift: { weightLifted: 250, reps: 5 },
    OverheadPress: { weightLifted: 100, reps: 5 },
  });

  const handleInputChange = (e, lift) => {
    const { name, value } = e.target;
    setLifts({
      ...lifts,
      [lift]: { ...lifts[lift], [name]: Number(value) },
    });
  };

  return (
    <div className="workout-container">
      <div className="header">
        <h2>Enter Weights and Reps Achieved</h2>
        {Object.keys(lifts).map((lift) => (
          <LiftInput
            key={lift}
            lift={lift}
            lifts={lifts}
            handleInputChange={handleInputChange}
          />
        ))}
        </div>
        <h2>3-Week Workout Plan</h2>
        <div className="weeks-container">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((week) => (
          <div key={week} className="week-column">
            {Object.keys(lifts).map((lift) => (
              <WorkoutGenerate
                className="day-column"
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
    </div>
  );
};

export default WorkoutPlan;
