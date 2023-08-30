import { Button, Modal, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import dateFormat from 'dateformat';

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://student-dashboard-be.onrender.com/api/taskbarstatus")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [FELink, setFELink] = useState("");
  const [SNo, setSNo] = useState("");
  const [BELink, setBELink] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {setShowModal(false);
    resetForm()
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://student-dashboard-be.onrender.com/api/taskbarstatus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: taskTitle,
            SNo: SNo,
            FrontEndLink: FELink,
            BackEndLink: BELink,
          }),
        }
      );

      if (response.ok) {
        console.log("Task submitted successfully");

        handleCloseModal();
      } else {
        console.error("Error submitting task");
      }
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };

  const resetForm = () => {
    setTaskTitle("");
    setSNo("");
    setFELink("");
    setBELink("");
  };

  return (
    <div className="task-page">
      <table className="table table-hover">
        <thead>
          <tr>
            <td colSpan="5">
              <h4>Task Page</h4>
              <Button variant="primary" onClick={handleShowModal}>
                Task Submits
              </Button>
            </td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{task.title}</Accordion.Header><span>Submitted on: {dateFormat(task.timeStamp,"hh:mm | dddd | mmmm dS | yyyy")}</span>
                <Accordion.Body>
                  <table>
                    <tr>
                      <td>
                        <strong>Front End Link : </strong>
                        <a href={task.FrontEndLink}>{task.FrontEndLink}</a>
                        <br />
                        <strong>Back End Link : </strong>
                        <a href={task.BackEndLink}>{task.BackEndLink}</a>
                      </td>
                    </tr>
                  </table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </tbody>
      </table>

      <Modal size="lg" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="SNo">
              <Form.Control
                type="Number"
                placeholder="S.NO"
                value={SNo}
                onChange={(e) => setSNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="taskTitle">
              <Form.Control
                type="text"
                placeholder="Enter task title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="FELink">
              <Form.Control
                type="text"
                placeholder="Front-end Source code"
                value={FELink}
                onChange={(e) => setFELink(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="BELink">
              <Form.Control
                type="text"
                placeholder="Back-end Source code"
                value={BELink}
                onChange={(e) => setBELink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TaskPage;
