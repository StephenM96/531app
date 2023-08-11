import React from "react";

const LiftInput = ({ lift, lifts, handleInputChange }) => {
  return (
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
  );
};

export default LiftInput;