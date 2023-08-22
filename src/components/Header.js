import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            Student Dashboard
          </Link>
          <nav className="nav">
            {/* <ul>
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
            </ul> */}
          </nav>
          {user ? (
            <div className="user-info">
              <span>Welcome, {user.username}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
