import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function ChartPage() {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="chart-container">
        <div className="chart">
          <h5>Chart Page</h5>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default ChartPage;
