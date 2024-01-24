import React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const AddToCartPopUp = ({ ispop, formData, fun }) => {
  return (
    <Dialog open={ispop} onClose={fun}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '460px', padding: '16px' }}>
        <Typography variant="h6"></Typography>
        <IconButton edge="end" color="inherit" onClick={fun} aria-label="close">
          <CloseIcon />
        </IconButton>
      </div>
      <div style={{ padding: '16px', width: '100%', maxWidth: '460px' }}>
        {formData}
      </div>
    </Dialog>
  );
};

export default AddToCartPopUp;
