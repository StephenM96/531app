import React from "react";


const oneRepMax = (weight, reps) => weight * reps * 0.0333 + weight;

const trainingMax = (oneRepMaxValue) => oneRepMaxValue * 0.85;

const WorkoutGenerate = ({ lift, details, week, roundToNearest5, workoutDate, onSaveWorkout, startDate, dayOffset }) => {
  const oneRepMaxValue = oneRepMax(details.weightLifted, details.reps);
  const tMax = trainingMax(oneRepMaxValue);
  // const startDate = new Date();
  const currentDate = new Date(startDate); //calculate date for current workout day
  currentDate.setDate(currentDate.getDate() + dayOffset); //adjust date based on week
  const displayDate = currentDate.toUTCString()
  const percentages =
    week === 1
      ? [0.65, 0.75, 0.85]
      : week === 2
      ? [0.7, 0.8, 0.9]
      : [0.75, 0.85, 0.95];

  // const firstSetWeight = roundToNearest5(percentages[2] *  tMax);
  // const secondSetWeight = roundToNearest5(percentages[2] *  tMax);
  // const thirdSetWeight = roundToNearest5(percentages[2] *  tMax);

  // onSaveWorkout(lift, thirdSetWeight, week);

  return (
    <div key={lift}>
      <h3>{`${lift} Day (Week ${week}) - ${displayDate}`}</h3>
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

export default WorkoutGenerate;
