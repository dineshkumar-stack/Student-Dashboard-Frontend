import React, { useEffect } from "react";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import ChartPage from '../pages/ChartPage';
import Github from "../components/Github";
import AdditionalClass from "./AddClass";
import AllDetailsInOne from "./Task_AddClass";
import CodeKataDetails from "./CodekataPage";
import NavBar from "../components/NavBar";

function Home() {
  useEffect(() => {
    var options = {
      disableOneColumnMode: true,
      float: true,
      animate: true

    };
    var grid = GridStack.init(options);

    grid.enableMove(true);
    grid.enableResize(true);

  });
  return (
    <div className="home">
      <NavBar />
      <div className="container-lg">
      </div>
      <div className="grid-stack">
        <div className="grid-stack-item border-dark AllDetailsInOne" gs-x="0" gs-w="4" gs-h="6">
          <div className="grid-stack-item-content"><AllDetailsInOne /></div>
        </div>

        <div className="grid-stack-item border-dark BarChart" gs-x="2" gs-w="3" gs-h="2">
          <div className="grid-stack-item-content"><BarChart /></div>
        </div>
        <div className="grid-stack-item border-dark" gs-x="3" gs-w="2" gs-h="4">
          <div className="grid-stack-item-content"><PieChart /></div>
        </div>

        <div className="grid-stack-item border-dark" gs-x="3" gs-w="3" gs-h="2">
          <div className="grid-stack-item-content"><ChartPage /></div>
        </div>

        <div className="grid-stack-item border-dark" gs-x="4" gs-w="8" gs-h="2">
          <div className="grid-stack-item-content git-design"><Github /></div>
        </div>
        <div className="grid-stack-item border-dark" gs-x="5" gs-w="3" gs-h="2">
          <div className="grid-stack-item-content"><AdditionalClass /></div>
        </div>
        <div className="grid-stack-item border-dark" gs-x="3" gs-w="3" gs-h="2">
          <div className="grid-stack-item-content"><CodeKataDetails /></div>
        </div>

      </div>
    </div>
  );
}

export default Home;
