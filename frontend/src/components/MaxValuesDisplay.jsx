import React from "react";
import "./MaxValueDisplayStyle.css"

const MaxValuesDisplay = ({ lifts }) => {
  const roundToNearest5 = (value) => Math.floor(value / 5) * 5;

  const liftNames = Object.keys(lifts);
  const maxValues = liftNames.reduce((acc, lift) => {
    const oneRepMaxValue = lifts[lift].weightLifted * lifts[lift].reps * 0.0333 + lifts[lift].weightLifted;
    const trainingMaxValue = oneRepMaxValue * 0.85;

    return {
      ...acc,
      [lift]: {
        oneRepMax: roundToNearest5(oneRepMaxValue),
        trainingMax: roundToNearest5(trainingMaxValue)
      }
    };
  }, {});

  return (
    <div className="max-title">
      <h2>Estimated 1 Rep Max and Training Max</h2>
      <div className="max-values">
      {liftNames.map((lift) => (
        <div key={lift} className="lift-max">
          <h3>{lift}</h3>
          <p>Estimated 1 Rep Max: {maxValues[lift].oneRepMax} lbs</p>
          <p>Training Max: {maxValues[lift].trainingMax} lbs</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default MaxValuesDisplay;