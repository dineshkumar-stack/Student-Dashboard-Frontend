import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import TaskPage from '../pages/TaskPage';
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import ChartPage from '../pages/ChartPage';
import Github from "../components/Github";

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
        </div>
        <div className="grid-stack">
        <div className="grid-stack-item border-dark"  gs-x="0"  gs-w="10" gs-h="3">
            <div className="grid-stack-item-content"><TaskPage /></div>
          </div>
          <div className="grid-stack-item border-dark"  gs-x="1"  gs-w="2" gs-h="3">
            <div className="grid-stack-item-content"><PieChart /></div>
          </div>

          <div className="grid-stack-item border-dark" gs-x="2"  gs-w="3" gs-h="2">
            <div className="grid-stack-item-content"><BarChart /></div>
          </div>
          <div className="grid-stack-item border-dark" gs-x="3"  gs-w="3" gs-h="2">
          <div className="grid-stack-item-content"><ChartPage /></div>
        </div>
        <div className="grid-stack-item border-dark" gs-x="4"  gs-w="6" gs-h="2">
          <div className="grid-stack-item-content"><Github /></div>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default Home;
