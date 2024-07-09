import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './WorkoutLog.css';

const WorkoutLog = () => {
  const [workout, setWorkout] = useState([{ exercise: '', sets: [{ reps: 0, weight: 0 }] }]);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleWorkoutChange = (index, field, value) => {
    const updatedWorkout = [...workout];
    updatedWorkout[index][field] = value;
    setWorkout(updatedWorkout);
  };

  const addExercise = () => {
    setWorkout([...workout, { exercise: '', sets: [{ reps: 0, weight: 0 }] }]);
  };

  const validateWorkout = () => {
    for (const exercise of workout) {
      if (!exercise.exercise) return false;
      for (const set of exercise.sets) {
        if (set.reps <= 0 || set.weight < 0) return false;
      }
    }
    return true;
  };

  const saveWorkout = async () => {
    if (!validateWorkout()) {
      setMessage('Please fill in all fields correctly.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/workouts', { workout });
      dispatch({ type: 'ADD_WORKOUT', payload: workout });
      setMessage('Workout saved successfully!');
    } catch (error) {
      setMessage('Failed to save workout. Please try again.');
    }
  };

  return (
    <div className="workout-log">
      <h2>Log Workout</h2>
      {message && <p className="message">{message}</p>}
      {workout.map((exercise, index) => (
        <div key={index} className="exercise">
          <input
            type="text"
            placeholder="Exercise"
            value={exercise.exercise}
            onChange={(e) => handleWorkoutChange(index, 'exercise', e.target.value)}
            className="input"
          />
          {exercise.sets.map((set, setIndex) => (
            <div key={setIndex} className="set">
              <input
                type="number"
                placeholder="Reps"
                value={set.reps}
                onChange={(e) => {
                  const updatedSets = [...exercise.sets];
                  updatedSets[setIndex].reps = e.target.value;
                  handleWorkoutChange(index, 'sets', updatedSets);
                }}
                className="input"
              />
              <input
                type="number"
                placeholder="Weight"
                value={set.weight}
                onChange={(e) => {
                  const updatedSets = [...exercise.sets];
                  updatedSets[setIndex].weight = e.target.value;
                  handleWorkoutChange(index, 'sets', updatedSets);
                }}
                className="input"
              />
            </div>
          ))}
        </div>
      ))}
      <button onClick={addExercise} className="button">Add Exercise</button>
      <button onClick={saveWorkout} className="button">Save Workout</button>
    </div>
  );
};

export default WorkoutLog;
