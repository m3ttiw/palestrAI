import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewGoals = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const result = await axios.get('http://localhost:5000/api/goals');
      setGoals(result.data);
    };
    fetchGoals();
  }, []);

  return (
    <div>
      <h2>View Fitness Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal._id}>
            {goal.goalType}: {goal.description} - Target: {goal.target}, Progress: {goal.progress}, End Date: {new Date(goal.endDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewGoals;
