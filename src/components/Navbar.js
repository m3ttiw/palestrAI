import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Workout Logger</h1>
      <ul>
        <li><Link to="/log">Log Workout</Link></li>
        <li><Link to="/history">Workout History</Link></li>
        <li><Link to="/set-goal">Set Goal</Link></li>
        <li><Link to="/view-goals">View Goals</Link></li>
        <li><Link to="/goals-chart">Goals Chart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
