import React, { useState } from 'react';
import {
  Typography,
  Button,
  IconButton,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
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
      <Typography variant="h6" component="div" align="center" sx={{ mb: 2 }}>
        User Details
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          disabled={!editMode}
        />

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          disabled={!editMode}
        />

        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          disabled={!editMode}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {editMode ? (
          <Button variant="outlined" color="success" onClick={handleSaveClick} sx={{ width: '120px' }}>
            Save
          </Button>
        ) : (
          <IconButton onClick={handleEditClick} color="success">
            <EditIcon />
          </IconButton>
        )}
      </Box>
    </form>
  );
};

export default ProfileForm;
