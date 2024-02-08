import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import api from '../api';

const ProfileForm = () => {
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    email: '',
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
useEffect(()=>{
  setFormData({name:user.name,email:user.email})

},[user])
  const handleSaveClick = async() => {
    try {
      await api.put('/user/requestUserName',{userName:formData.name})
    } catch (error) {
      
    }finally{
      setEditMode(false);
    }
    
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
          disabled={true}
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
