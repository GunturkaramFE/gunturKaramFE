import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const EmptyData = () => {
  return (
    <>
      <Grid
        container
        sx={{ width: '100%', height: '100%',display:'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Grid item sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'20px'}}>
          <img src="https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-comicstyle-wishlist-icon-with-splash-effect-health-sign-add-vector-png-image_41870708.jpg" alt="Empty" style={{ width: '50%', height: 'auto' }} />

          <Typography variant="h4" gutterBottom sx={{width:'100%',textAlign:{xs:"center",sm:'initial',color:"#D3D3D3"}}}>
            You haven't saved anything yet.
          </Typography>

          <Button variant="contained" color="success" sx={{fontFamily:'sans-serif'}}>
            Save Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default EmptyData;
