import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './SetGoal.css';

const SetGoal = () => {
  const [goalType, setGoalType] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState(0);
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const validateGoal = () => {
    if (!goalType || !description || target <= 0 || !endDate) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateGoal()) {
      setMessage('Please fill in all fields correctly.');
      return;
    }

    const newGoal = { goalType, description, target, progress: 0, endDate };
    try {
      await axios.post('http://localhost:5000/api/goals', newGoal);
      dispatch({ type: 'ADD_GOAL', payload: newGoal });
      setMessage('Goal set successfully!');
      // Clear form
      setGoalType('');
      setDescription('');
      setTarget(0);
      setEndDate('');
    } catch (error) {
      setMessage('Failed to set goal. Please try again.');
    }
  };

  return (
    <div className="set-goal">
      <h2>Set Fitness Goal</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal Type"
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="input"
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">Set Goal</button>
      </form>
    </div>
  );
};

export default SetGoal;
