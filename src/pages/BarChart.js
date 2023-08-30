import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const [tasksBar, setTasksBar] = useState([]);

  useEffect(() => {
    fetch("https://student-dashboard-be.onrender.com/api/taskbarstatus")
      .then((response) => response.json())
      .then((data) => setTasksBar(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Task data for the bar chart
  const taskData = {
    labels: tasksBar.map((task) => task.SNo),
    datasets: [
      {
        label: "Task score",
        data: tasksBar.map((task) => (task.mark)),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        indexAxis: 'y',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: false,
        // grace:1,
        position: 'left',
      },
    },
  };

  return (
    <div>
      <div className="chart-container">
        <div className="chart">
          <h4>Task Score</h4>
          <Bar data={taskData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
export default BarChart;
