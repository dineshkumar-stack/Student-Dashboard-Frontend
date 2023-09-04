import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [userDataView, setUserDataView] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the API endpoint
    fetch("https://student-dashboard-be.onrender.com/api/userdetail")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setUserDataView(data);
        setEditedUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

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

  const handleSaveClick = async () => {
    window.location.reload(true)

    try {
      // Perform an API call to update user data
      const response = await fetch(
        "https://student-dashboard-be.onrender.com/api/userdetail",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedUserData),
        }
      );

      if (response.ok) {
        // User data updated successfully
        setUserData(editedUserData);
        setEditMode(false);
        console.log("User data updated successfully");
      } else {
        // Handle error scenario
        console.error("Error updating user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="user-profile-container Container">
      <h2>User Profile</h2>
      {editMode && (
        <div className="edit-buttons float-lg-end">
          <Button variant="success" onClick={handleSaveClick}>
            Save
          </Button>
          <Button variant="danger" onClick={handleCancelClick}>
            Cancel
          </Button>
        </div>
      )}
      {!editMode && (
        <Button
          className="float-lg-end"
          variant="dark"
          onClick={handleEditClick}
        >
          Edit
        </Button>
      )}

      <Form>
        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="name">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="name"
                value={editMode ? editedUserData.name : user.name}
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="email">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="email"
                value={editMode ? editedUserData.email : user.email}
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="phone">
            <Form.Label column sm={2}>
              Phone
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="phone"
                value={editMode ? editedUserData.phone : user.phone}
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="batch">
            <Form.Label column sm={2}>
              Batch
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="batch"
                value={editMode ? editedUserData.batch : user.batch}
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="Qualification">
            <Form.Label column sm={2}>
              Qualification
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="Qualification"
                value={
                  editMode ? editedUserData.Qualification : user.Qualification
                }
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="yearOfExperience">
            <Form.Label column sm={2}>
              Year of Experience
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="yearOfExperience"
                value={
                  editMode
                    ? editedUserData.yearOfExperience
                    : user.yearOfExperience
                }
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="noticePeriod">
            <Form.Label column sm={2}>
              Notice Period
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="noticePeriod"
                value={
                  editMode ? editedUserData.noticePeriod : user.noticePeriod
                }
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="gifhud">
            <Form.Label column sm={2}>
              Gif Hud
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="noticePeriod"
                value={editMode ? editedUserData.gifhud : user.gifhud}
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="resume">
            <Form.Label column sm={2}>
              Resume
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="resume"
                value={editMode ? editedUserData.resume : user.resume}
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}

        {userDataView.map((user) => (
          <Form.Group as={Row} className="mb-1" controlId="portfolioURL">
            <Form.Label column sm={2}>
              Portfolio URL
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="portfolioURL"
                value={
                  editMode ? editedUserData.portfolioURL : user.portfolioURL
                }
                onChange={handleInputChange}
                readOnly={!editMode}
                disabled={!editMode}
              />
            </Col>
          </Form.Group>
        ))}
      </Form>
    </div>
  );
}

export default UserProfile;
