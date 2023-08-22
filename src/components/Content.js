import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import ChartPage from '../pages/ChartPage';
import TaskPage from '../pages/TaskPage';
import AttendancePage from '../pages/AttendancePage';

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/chart" component={ChartPage} />
        <Route path="/tasks" component={TaskPage} />
        <Route path="/attendance" component={AttendancePage} />
      </Switch>
    </div>
  );
}

export default Content;
