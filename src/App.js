import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutLog from './components/WorkoutLog';
import WorkoutHistory from './components/WorkoutHistory';
import SetGoal from './components/SetGoal';
import ViewGoals from './components/ViewGoals';
import GoalsChart from './components/GoalsChart';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/log" component={WorkoutLog} />
          <Route path="/history" component={WorkoutHistory} />
          <Route path="/set-goal" component={SetGoal} />
          <Route path="/view-goals" component={ViewGoals} />
          <Route path="/goals-chart" component={GoalsChart} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
