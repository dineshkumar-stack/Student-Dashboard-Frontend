import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

function UserProfile() {
  const initialUserData = {
    ProfileImage: "new.jpg",
    name: "Dinesh Kumar",
    phone: "8682935481",
    email: "stardinesh4@gmail.com",
    batch: "B43 WE Tamil",
    Qualification: "MBA",
    yearOfPass: "2017",
    yearOfExperience: "5",
    noticePeriod: "90",
    gifhud: "dineshkumar-stack",
    resume: "dinesh.doc",
    portfolioURL: "www.dinesh-portfolio.com",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  const handleEditClick = () => {
    setEditMode(true);
    setEditedUserData(userData);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setEditMode(false);
    setUserData(editedUserData);
    // Perform logic to update user data on the backend
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {!editMode && (
        <Button variant="dark" onClick={handleEditClick}>
          Edit
        </Button>
      )}
      {editMode && (
        <Button variant="danger" onClick={handleCancelClick}>
          Cancel
        </Button>
      )}

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              disabled={!editMode}
              type="text"
              name="name"
              value={editMode ? editedUserData.name : userData.name}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            E-Mail
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              disabled={!editMode}
              type="text"
              name="email"
              value={editMode ? editedUserData.email : userData.email}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
          Phone
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              disabled={!editMode}
              type="text"
              name="phone"
              value={editMode ? editedUserData.phone : userData.phone}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            E-Mail
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              disabled={!editMode}
              type="text"
              name="email"
              value={editMode ? editedUserData.eamil : userData.email}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            E-Mail
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              disabled={!editMode}
              type="text"
              name="email"
              value={editMode ? editedUserData.eamil : userData.email}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            E-Mail
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              disabled={!editMode}
              type="text"
              name="email"
              value={editMode ? editedUserData.eamil : userData.email}
              onChange={handleInputChange}
              readOnly={!editMode}
            />
          </Col>
        </Form.Group>

        {editMode && (
          <div className="edit-buttons">
            <Button variant="success" onClick={handleSaveClick}>
              Submit
            </Button>
          </div>
        )}
        {/* Repeat similar Form.Group sections for other fields */}
      </Form>
    </div>
  );
}

export default UserProfile;
