import React, { useState } from "react";

const WorkoutArchive = ({archivedWorkouts, setArchivedWorkouts}) => {
console.log("Archive: ", archivedWorkouts)
    return (
        <div>
            <h2>Archived Workouts</h2>
            <ul>
                {archivedWorkouts.map((workout, index) => (
                    <li key={index}>
                        {/* display archived workout here */}
                        {/* Start Date: {workout.startDate.toDateString()},  */}
                        Lift: {workout.lift}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkoutArchive