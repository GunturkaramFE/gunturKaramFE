import React, { useState } from 'react';
import { Typography, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: 'rakeshkirlampalli45@gmail.com',
    phone: '',
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Add your save logic here
    console.log('Saved:', formData);
    setEditMode(false);
  };

  return (
    <form>
      <div style={{ width: '100%', display: 'flex', marginBottom: '6px', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" align="center">
          User Details
        </Typography>
       
          <IconButton id='editButton' onClick={handleEditClick} size="large" style={{color:"green"}}>
            <EditIcon />
          </IconButton>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          disabled={!editMode}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          disabled={!editMode}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          disabled={!editMode}
        />
      </div>

      {editMode && (
        <div style={{ display: 'flex', justifyContent: 'center', color: 'grey', marginTop: '20px' }}>
           <button type="button" className="btn btn-outline-success" onClick={handleSaveClick}   style={{ width: '100px' }} >
            Save
          </button>
        </div>
      )}
    </form>
  );
};

export default ProfileForm;
