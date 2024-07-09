import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const GoalsChart = () => {
  const goals = useSelector((state) => state.goals.goals);

  const data = {
    labels: goals.map((goal) => goal.description),
    datasets: [
      {
        label: 'Target',
        data: goals.map((goal) => goal.target),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Progress',
        data: goals.map((goal) => goal.progress),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Goals Progress</h2>
      <Bar data={data} />
    </div>
  );
};

export default GoalsChart;
