import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    // Fetch user data from the API endpoint
    fetch('https://student-dashboard-be.onrender.com/api/userdetail')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
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
    try {
      // Perform an API call to update user data
      const response = await fetch('https://student-dashboard-be.onrender.com/api/userdetail', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUserData),
      });

      if (response.ok) {
        // User data updated successfully
        setUserData(editedUserData);
        setEditMode(false);
        console.log('User data updated successfully');
      } else {
        // Handle error scenario
        console.error('Error updating user data');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <Form>
        <Form.Group controlId="ProfileImage">
          <img src={userData.ProfileImage} alt="Profile" className="profile-image" />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editMode ? editedUserData.name : userData.name}
            onChange={handleInputChange}
            readOnly={!editMode}
          />
          {editMode && (
            <div className="edit-buttons">
              <Button variant="success" onClick={handleSaveClick}>
                Save
              </Button>
              <Button variant="danger" onClick={handleCancelClick}>
                Cancel
              </Button>
            </div>
          )}
          {!editMode && (
            <Button variant="link" onClick={handleEditClick}>
              Edit
            </Button>
          )}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={editMode ? editedUserData.email : userData.email}
            onChange={handleInputChange}
            readOnly={!editMode}
          />
          {editMode && (
            <div className="edit-buttons">
              <Button variant="success" onClick={handleSaveClick}>
                Save
              </Button>
              <Button variant="danger" onClick={handleCancelClick}>
                Cancel
              </Button>
            </div>
          )}
          {!editMode && (
            <Button variant="link" onClick={handleEditClick}>
              Edit
            </Button>
          )}
        </Form.Group>
      </Form>
    </div>
  );
}

export default UserProfile;
