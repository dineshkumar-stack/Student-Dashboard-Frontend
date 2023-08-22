import React from 'react';

function TaskPage() {
  const tasks = [
    {
      id: 1,
      title: 'Complete Assignment 1',
      description: 'Finish the assigned project by the due date.',
      mark: 10,
      link: 'https://example.com/assignment1',
    },
    // ... other task objects
  ];

  return (
    <div className="task-page">
      <h2>Task Page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Mark</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.mark}</td>
              <td>
                <input type="text" className="form-control" placeholder="Enter link" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskPage;
