import Accordion from 'react-bootstrap/Accordion';
import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router } from 'react-router-dom';
import AdditionalClass from './AddClass';

function AllDetailsInOne() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://student-dashboard-be.onrender.com/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);
    return (
        <Router>
            <Accordion defaultActiveKey={['2']} flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Task Details</Accordion.Header>
                    <Accordion.Body>
                        <div className="task-page">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <td colSpan="3">
                                            <h4>Tasks</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Title</th>
                                        <th>Activities</th>
                                        <th>Recordings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task) => (
                                        <tr key={task.id}>
                                            <td>{task.title}</td>
                                            <td><a href={task.link}>View</a></td>
                                            <td>
                                                <Button variant="outline-info" href={task.link} target="_blank" >Play Recordings</Button>{" "}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="1">
               <Accordion.Header>Additional Class</Accordion.Header>
                    <Accordion.Body>
                        <AdditionalClass />
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Mock Interview</Accordion.Header>
                    <Accordion.Body>
                        <div className="task-page">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <td colSpan="3">
                                            <h4>Mock Interview Details</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Title</th>
                                        <th>Mark</th>
                                        <th>Link</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Router>
    )
}
export default AllDetailsInOne;