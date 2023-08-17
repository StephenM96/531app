import React from "react";

const LiftInput = ({
  lift,
  weightLifted,
  reps,
  handleInputChange,
  startDate,
}) => {
  return Object.keys(lift).map((lift) => (
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
      Start Date:
      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={(e) => handleInputChange(e, lift)}
      />
    </div>
  ));
};

export default LiftInput;
