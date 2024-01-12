import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import Addressform from './Addressform';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../styles/EditProfile.css';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';
const EditProfile = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('Profile');

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: { xs: 'unset', md: '100vh' } }}
    >
      <Grid item xs={12} md={2} >
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            color: 'grey',
            
            minHeight: { xs: 'unset', md: '80vh' },
          }}
        >
          <div id='profilebutton'  onClick={handleNavigateHome} style={{ cursor: 'pointer',textAlign:'center',padding:'10px 0px' }}>
            <Typography variant="h6">Home</Typography>
          </div>
          <div id='profilebutton'  onClick={() => handleOptionClick('Profile')} style={{ cursor: 'pointer',textAlign:'center',padding:'10px 0px'}}>
            <Typography variant="h6">Profile</Typography>
          </div>
          <div id='profilebutton'  onClick={() => handleOptionClick('EditAddress')} style={{ cursor: 'pointer',textAlign:'center',padding:'10px 0px'}}>
            <Typography variant="h6">Address</Typography>
          </div>
          <div id='profilebutton' style={{ cursor: 'pointer', textAlign:'center',padding:'10px 0px' }}>
            <Typography variant="h6">Settings</Typography>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Card sx={{ width: '100%', minHeight: { xs: 'unset', md: '80vh' } }}>
          <CardContent  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column',marginTop:'15px' }}>           
                   
            <div style={{ marginTop: '5px',width:'80%' }}>
              {selectedOption === 'Profile' && <ProfileForm />}
              {selectedOption === 'EditAddress' && <Addressform />}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditProfile;
