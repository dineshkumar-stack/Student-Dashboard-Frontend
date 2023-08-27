import Accordion from 'react-bootstrap/Accordion';
import React from "react";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router } from 'react-router-dom';
// import TaskPage from '../pages/TaskPage';
import AdditionalClass from './AddClass';

function AllDetailsInOne() {

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

    ];

    return (
        <Router>
            <Accordion defaultActiveKey={['1']} flush>
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
                                        <th>Mark</th>
                                        <th>Recordings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tasks.map((task) => (
                                        <tr key={task.id}>
                                            <td>{task.title}</td>
                                            <td>{task.mark}</td>
                                            <td>
                                                <Button variant="outline-info">Play Recordings</Button>{" "}
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