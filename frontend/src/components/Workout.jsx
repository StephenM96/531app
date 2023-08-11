import React from "react";
import { useState } from "react";

const WorkoutPlan = () => {
  const [lifts, setLifts] = useState({
    Squat: { day: "Monday", weightLifted: 200, reps: 5 },
    Bench: { day: "Tuesday", weightLifted: 150, reps: 5 },
    Deadlift: { day: "Thursday", weightLifted: 250, reps: 5 },
    OverheadPress: { day: "Friday", weightLifted: 100, reps: 5 },
  });

  const roundToNearest5 = (value) => Math.floor(value / 5) * 5;

  const oneRepMax = (weight, reps) => weight * reps * 0.0333 + weight;

  const trainingMax = (oneRepMaxValue) => oneRepMaxValue * 0.85;

  const handleInputChange = (e, lift) => {
    const { name, value } = e.target;
    setLifts({
      ...lifts,
      [lift]: { ...lifts[lift], [name]: Number(value) },
    });
  };

  const renderInputFields = () => {
    return Object.keys(lifts).map((lift) => (
      <div key={lift}>
        <label>{`${lift}: `}</label>
        Weight:
        <input
          type="number"
          name="weightLifted"
          value={lifts[lift].weightLifted}
          onChange={(e) => handleInputChange(e, lift)}
          placeholder="Weight Lifted"
        />
        Reps:
        <input
          type="number"
          name="reps"
          value={lifts[lift].reps}
          onChange={(e) => handleInputChange(e, lift)}
          placeholder="Reps"
        />
      </div>
    ));
  };

  const generateWorkout = (lift, details, week) => {
    const oneRepMaxValue = oneRepMax(details.weightLifted, details.reps);
    const tMax = trainingMax(oneRepMaxValue);
    const percentages =
      week === 1
        ? [0.65, 0.75, 0.85]
        : week === 2
        ? [0.7, 0.8, 0.9]
        : [0.75, 0.85, 0.95];

    return (
      <div key={lift}>
        <h3>{`${lift} Day (Week ${week})`}</h3>
        <p>Main Sets:</p>
        <ul>
          {percentages.map((p, index) => (
            <li key={index}>{`${p * 100}% of training max: ${roundToNearest5(
              p * tMax
            )} lbs for 5 reps`}</li>
          ))}
        </ul>
        <p>Boring But Big Supplemental:</p>
        <ul>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <li key={index}>{`50% of training max: ${roundToNearest5(
                0.5 * tMax
              )} lbs for 10 reps`}</li>
            ))}
        </ul>
        <p>Accessory Movements:</p>
        <ul>
          <li>Push movement: 25-50 reps</li>
          <li>Pull movement: 25-50 reps</li>
          <li>Single-leg/core work: 25-50 reps</li>
        </ul>
      </div>
    );
  };

  const renderWeekColumn = (week) => {
    return (
      <div key={week} className="week-container">
        {Object.keys(lifts).map((lift) => (
          <div key={lift} className="day-column">
            {generateWorkout(lift, lifts[lift], week)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Enter Weights and Reps Achieved</h2>
      {renderInputFields()}
      <h2>3-Week Workout Plan</h2>
      {Array.from({ length: 3 }, (_, i) => i + 1).map((week) => (
        <div key={week}>{renderWeekColumn(week)}</div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
