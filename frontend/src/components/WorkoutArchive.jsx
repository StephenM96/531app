import React, { useState } from "react";

const WorkoutArchive = () => {

    const [archivedWorkouts, setArchivedWorkouts] = useState([]);

    return (
        <div>
            <h2>Archived Workouts</h2>
            <ul>
                {archivedWorkouts.map((workout, index) => (
                    <li key={index}>
                        {/* display archived workout here */}
                        Week {workout.week}, Date: {workout.date.toDateString()}, Lift: {workout.lift}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkoutArchive

