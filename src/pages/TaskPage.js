import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react';


function TaskPage() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://student-dashboard-be.onrender.com/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="task-page">
      <table className="table table-hover">
        <thead>
          <tr>
            <td colSpan="5">
              <h4>Task Page</h4>
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Mark</th>
            <th>Link</th>
            <th>Recordings</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.mark}</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter link"
                />
              </td>
              <td>
                <Button variant="outline-info" href={task.link} >Play Recordings</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskPage;
