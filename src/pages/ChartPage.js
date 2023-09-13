import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import dateFormat from "dateformat";

ChartJS.register(...registerables);

const apiUrl = "https://student-dashboard-be.onrender.com/api";
const authToken = localStorage.getItem("authToken");

const headers = {
  Authorization: `${authToken}`,
  "Content-Type": "application/json",
};

function ChartPage() {

  const [webKataData, setWebKataData] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/webkatascores`, {

      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => setWebKataData(data.webPracticeScores))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);



  const chartData = {
    type: "line",

    labels: webKataData.map((task) => dateFormat(task.timeStamp, `dS/yyyy`)),
    datasets: [
      {
        label: "score",
        data: webKataData.map((task) => task.score),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        // grace:1,
        position: "left",
      },
    },
  };

  return (
    <div>
      <div className="chart-container">
        <div className="chart">
          <h5 style={{ textAlign: "center", padding: "5px" }}>WebKata</h5>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default ChartPage;
