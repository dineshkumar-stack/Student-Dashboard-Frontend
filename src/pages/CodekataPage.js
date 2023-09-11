import { Bar } from "react-chartjs-2";
import React, { useState } from "react";
const authToken = localStorage.getItem("authToken"); // Retrieve the token from local storage

function CodeKataDetails() {
  const [scoreData, setScoreData] = useState([]);

  const headers = {
    Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
    "Content-Type": "application/json", // Set the content type based on your API's requirements
  };

  fetch("https://student-dashboard-be.onrender.com/api/scores", {
    method: "GET", // Set the HTTP method (GET, POST, PUT, DELETE, etc.)
    headers: headers, // Set the custom headers
  })
    .then((response) => response.json())
    .then((data) => setScoreData(data))
    .then((data) => {
      // Handle the response data here
      console.log("Data:", data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });

  const CodeKataData = {
    labels: scoreData.map((task) => task.timeStamp),
    datasets: [
      {
        label: "Score",
        data: scoreData.map((task) => task.score),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <div className="chart-container">
        <div className="chart">
          <h4>CodeKata</h4>
          <Bar data={CodeKataData} />
        </div>
      </div>
    </div>
  );
}

export default CodeKataDetails;
