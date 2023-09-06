import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import BarChart from "../pages/BarChart";
import Dashboard from "../pages/Dashboard";
import ChartPage from "../pages/ChartPage";
import TaskPage from "../pages/TaskPage";
import AttendancePage from "../pages/AttendancePage";
import UserDetailPage from "../pages/UserDetailPage"
import LoginPage from "../pages/LoginPage"


function Content() {
  return (
    <div className="content">
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/chart" component={ChartPage} />
        <Route path="/tasks" component={TaskPage} />
        <Route path="/userdetail" component={UserDetailPage}/>
        <Route path="/attendance" component={AttendancePage} />
        <Route path="/barChart" component={BarChart} />
        <Route path="/" component={LoginPage}/>
      </Switch>
    </div>
  );
}


export default Content;
