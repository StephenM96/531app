import React, { useState } from "react";
import "./WorkoutArchiveStyle.css"

const WorkoutArchive = ({archivedWorkouts, setArchivedWorkouts}) => {
console.log("Archive: ", archivedWorkouts)
    return (
        <div className="workout-container">
            <h2>Archived Workouts</h2>
            <ul>
                {archivedWorkouts.map((workout, index) => (
                    <li key={index}>
                        {/* display archived workout here */}
                        {/* Start Date: {workout.startDate.toDateString()},  */}
                        Lift: {workout.lifts[0]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkoutArchive