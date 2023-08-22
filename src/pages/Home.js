import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h2>Welcome to the Student Dashboard</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
          consectetur nisi, et convallis neque posuere in.
        </p>
        <div className="quick-links">
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>
          <Link to="/tasks" className="link">
            Tasks
          </Link>
          <Link to="/attendance" className="link">
            Attendance
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
