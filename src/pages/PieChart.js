import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { ComplicationContext } from "../context/ComplicationContext";
import "../styles.css"

function PieChart() {
  const { complications } = useContext(ComplicationContext);

  // Complication data for the pie chart
  const complicationData = {
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
        borderWidth: 3,
      },
    ],

    labels: Object.keys(complications),
  };

  return (
    <div>
      <div className="chart-container">
        <div className="chart">
          {" "}
          <br />
          <h5>Task Status</h5>
          <br />
          <Doughnut data={complicationData} /> <br />
          <small className="warning">
            <b>Warning:</b> 1 mark will be deducted from your total score if
            you're failed to submit the task within the deadline
          </small>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
