import React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const AddToCartPopUp = ({ ispop, formData, fun }) => {
  return (
    <Dialog open={ispop} onClose={fun}>
      <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}>
      <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: {xs:"100%",sm: 'calc(100% - 10px)',md:"550px",lg:"550px"}, padding: '16px',height:{xs:"3vh",sm:"6vh",md:"6vh",lg:'6vh'} }}>
        <Typography variant="h6"></Typography>
        <IconButton edge="end" color="inherit" onClick={fun} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Grid>
      <Grid sx={{ padding: '16px', width: {xs:"100%", sm: 'calc(100% - 32px)',md:"530px",lg:"530px"},display:'flex',justifyContent:'center',alignItems:'center'}}>
        {formData}
      </Grid>
      </Grid>
    </Dialog>
  );
};

export default AddToCartPopUp;
