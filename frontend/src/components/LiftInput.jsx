import React from "react";

const LiftInput = ({ lift, weightLifted, reps, handleInputChange }) => {
  return (
    <div>
      <label>{`${lift}: `}</label>
      Weight:
      <input
        type="number"
        name="weightLifted"
        value={weightLifted}
        onChange={(e) => handleInputChange(e, lift)}
        placeholder="Weight Lifted"
      />
      Reps:
      <input
        type="number"
        name="reps"
        value={reps}
        onChange={(e) => handleInputChange(e, lift)}
        placeholder="Reps"
      />
    </div>
  );
};

export default LiftInput;