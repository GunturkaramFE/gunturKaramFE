import { Grid, Typography, Box, Button, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

const AboutContainer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid sx={{ display: 'flex', flexDirection: isSmallScreen?'column':'row', width: '100%' }}>
        <Grid item xs={12} sm={6} sx={{ height: isSmallScreen?'auto':'90vh', width:isSmallScreen?'100%':'50%' }}>
          <Box
            sx={{
              width: '100%',
              height: isSmallScreen?'auto':'90vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                maxWidth: '100%',
                maxHeight: '90vh',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src='https://dwarakapickles.com/wp-content/uploads/2022/04/Desktop-2-1.png'
                alt='/'
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} container direction="column" padding="0px" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid sx={{ width: '93%', display: 'flex', flexDirection: 'column', height: isSmallScreen?'auto':'80vh',gap:isSmallScreen?'10px':'0px',marginTop:isSmallScreen?'40px':'0px', justifyContent: 'space-evenly' }}>
            <Grid item>
              <Typography variant="h5" color="#5DB04D" >
                Introducing
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'Yantramanav, Arial, Helvetica, sans-serif',
                  fontWeight: 550,
                  fontSize: isSmallScreen ? '28px' : '40px',
                  color: '#2D2A2A',
                }}
              >
                We Deliver The Best Quality Product
              </Typography>
            </Grid>
            <Grid item sx={{ width: '95%' }}>
              <Typography
                variant="body3"
                color="#777777"
                fontFamily="sans-serif"
                fontSize={isSmallScreen ? '12px' : '15px'}
                sx={{ textAlign: 'center' }}
              >
                Guntur Karam Food takes shape from a family’s dream of sharing authentic South Indian food with the rest of the country and other parts of the world.
              </Typography>
            </Grid>
            <Grid color="#777777" fontFamily="sans-serif" fontSize={isSmallScreen ? '10px' : '15px'}>
              <Grid item spacing={isSmallScreen ? 1 : 3} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body3" sx={{ marginBottom: isSmallScreen ? 1 : 2 }}>
                  <VerifiedIcon style={{ color: 'green', fontSize: isSmallScreen ? '14px' : '18px' }} /> Quality Sourced Ingredients
                </Typography>
                <Typography variant="body3" sx={{ marginBottom: isSmallScreen ? 1 : 2 }}>
                  <VerifiedIcon style={{ color: 'green', fontSize: isSmallScreen ? '14px' : '18px' }} /> Separate Veg & Non Veg Kitchen
                </Typography>
                <Typography variant="body3" sx={{ marginBottom: isSmallScreen ? 1 : 2 }}>
                  <VerifiedIcon style={{ color: 'green', fontSize: isSmallScreen ? '14px' : '18px' }} /> 100% Staff Vaccinated
                </Typography>
                <Typography variant="body3" sx={{ marginBottom: isSmallScreen ? 1 : 2 }}>
                  <VerifiedIcon style={{ color: 'green', fontSize: isSmallScreen ? '14px' : '18px' }} /> On Time Product Delivery
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{display:'flex',justifyContent:isSmallScreen?"center":'start'}}>
            <Button
              fontFamily="sans-serif"
              fontSize={isSmallScreen ? '10px' : '15px'}
              sx={{ width:'120px', height: '40px',marginBottom:isSmallScreen?'30px':'0px', backgroundColor: '#5DB04D' }}
              variant="contained"
              color="success"
            >
             About us
            </Button>
            </Grid>            
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutContainer;
