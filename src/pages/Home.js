import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import TaskPage from '../pages/TaskPage';
import PieChart from "./PieChart";
import BarChart from "./BarChart";


function Home() {


  
  useEffect(() => {

    
    var options = { // put in gridstack options here
      disableOneColumnMode: true, // for jfiddle small window size
      float: false
    };
    var grid = GridStack.init(options);

    grid.enableMove(true);
    grid.enableResize(true);
    
  });
  return (
    <Router>
      <div className="home">
        <div className="container-lg">
          <h2>Welcome to the Student Dashboard</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
            consectetur nisi, et convallis neque posuere in.
          </p>
        </div>
        <div className="grid-stack">
          <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
            <div className="grid-stack-item-content"><BarChart /></div>
          </div>
          <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
            <div className="grid-stack-item-content"><PieChart /></div>
          </div>
          <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
            <div className="grid-stack-item-content"><TaskPage /></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Home;
