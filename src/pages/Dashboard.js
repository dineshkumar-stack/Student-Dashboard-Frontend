import React, { useContext } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { TaskContext } from "../context/TaskContext";
import { ComplicationContext } from "../context/ComplicationContext";

function Dashboard() {
  const { tasks } = useContext(TaskContext);
  const { complications } = useContext(ComplicationContext);

  // Task data for the bar chart
  const taskData = {
    labels: tasks.map((task) => task.name),
    datasets: [
      {
        label: "Number of Tasks",
        data: tasks.map((task) => (task.completed ? 1 : 0)),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // Complication data for the pie chart
  const complicationData = {
    labels: Object.keys(complications),
    datasets: [
      {
        data: Object.values(complications),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#E91E63",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="chart-container">
        <div className="chart">
          <h3>Task Completion</h3>
          <Bar data={taskData} />
        </div>
        <div className="chart">
          <h3>Complication Distribution</h3>
          <Pie data={complicationData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
