import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import ViewShippingAdress from './shippingAddresscontainers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../styles/EditProfile.css';
import { Button } from '@mui/material';
import AddressForm from './Addressform';
import ToggleShippingAdress from './toggleShippingAdress';

const EditProfile = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('Profile');
  const [navigationLink,setNavigationLink]=useState()
  const location = useLocation();
 const[isToggle,setIsToggle]=useState()
  const handleNavigateHome = () => {
    navigate('/');
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    const optionParam = new URLSearchParams(location.search).get('option');
    const toggleParam = new URLSearchParams(location.search).get('toggle'); 
    setNavigationLink(new URLSearchParams(location.search).get('backNav'))
    setIsToggle(toggleParam);
  
    if (optionParam) {
      setSelectedOption(optionParam);     
    }
  }, [location.search]);

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: { xs: 'unset', md: '100vh' } }}
    >
      <Grid item xs={12} md={2}>
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
            <Typography variant="h6">Shipping Address</Typography>
          </div>        
        </Box>
      </Grid>
      <Grid item xs={12} md={8} sx={{ overflowY: 'auto', maxHeight: '80vh' }}>
        <Card sx={{ width: '100%' }}>
          <CardContent  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column',marginTop:'15px' }}>           
            <div style={{ marginTop: '5px',width:'80%' }}>
              {selectedOption === 'Profile' && <ProfileForm />}
              {selectedOption === 'EditAddress' && <ToggleShippingAdress urltoggle={isToggle} returnUrl={navigationLink}/>}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditProfile;
