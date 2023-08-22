import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart" activeClassName="active">
            Chart
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" activeClassName="active">
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/attendance" activeClassName="active">
            Attendance
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
