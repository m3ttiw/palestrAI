import React from 'react';

const WorkoutHistory = () => {
  // Placeholder for workout history data
  const history = [
    { date: '2024-07-01', exercise: 'Bench Press', sets: [{ reps: 10, weight: 100 }] },
    // Add more workout history data
  ];

  return (
    <div>
      <h2>Workout History</h2>
      <ul>
        {history.map((workout, index) => (
          <li key={index}>
            {workout.date} - {workout.exercise}: {workout.sets.map(set => `${set.reps} reps @ ${set.weight}kg`).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutHistory;
