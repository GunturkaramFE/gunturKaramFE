import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button, Card, CardContent, Grid } from '@mui/material';

const DeletePop = ({ onConfirm, onCancel }) => {

  const handleDeleteClick = () => {
    onConfirm('Item deleted successfully!');
  };

  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <ErrorOutlineIcon sx={{ fontSize: 60, color: 'red' }} />
            </Grid>
            <Grid item>
              <h2 style={{ color: 'black' }}>Are you sure want to delete this item?</h2>
            </Grid>
            <Grid item sx={{width:"100%",display:'flex',justifyContent:'space-evenly'}}>
              <Button variant="contained" onClick={handleDeleteClick}>Yes, Remove</Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'red',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'red',
                  },
                }}
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DeletePop;
