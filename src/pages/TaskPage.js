import React from "react";
import Button from "react-bootstrap/Button";

function TaskPage() {
  const tasks = [
    {
      id: 1,
      title: "Complete Assignment 1",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    {
      id: 1,
      title: "Complete Assignment 2",
      description: "Finish the assigned project by the due date.",
      mark: 10,
      link: "https://example.com/assignment1",
    },
    // ... other task objects
  ];

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
                <Button variant="outline-info">Link</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskPage;
