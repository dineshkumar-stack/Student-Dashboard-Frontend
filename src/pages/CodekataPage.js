import { useState } from "react";
import { Line } from "react-chartjs-2";
import dateFormat from "dateformat";

const apiUrl = "https://student-dashboard-be.onrender.com/api";
const authToken = localStorage.getItem("authToken");

const headers = {
  Authorization: `${authToken}`,
  "Content-Type": "application/json",
};

console.log(authToken);

function CodeKataMain() {
  const [codeKataData, setCodeKataData] = useState([]);
  fetch(`${apiUrl}/scores`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => setCodeKataData(data.codePracticeScores))
    .catch((error) => console.error("Error fetching tasks:", error));

  const chartData = {
    type: "line",
    labels: codeKataData.map((task) => dateFormat(task.timeStamp, `dS/yyyy`)),
    datasets: [
      {
        label: "Scores",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: codeKataData.map((task) => task.score),
        pointStyle: "circle",
        pointRadius: 2,
        pointHoverRadius: 5,
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
        <h5 sstyle={{ textAlign: "center", padding: "5px" }}>CodeKata</h5>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default CodeKataMain;
