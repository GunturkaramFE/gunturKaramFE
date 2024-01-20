import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button } from '@mui/material';

const DeletePop = ({ onConfirm, onCancel }) => {

  const handleDeleteClick = () => {
    onConfirm('Item deleted successfully!');
  };
  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <div style={{ width: '100%', height: '300px',padding: "5px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ErrorOutlineIcon sx={{ fontSize: 60, marginTop: '30px', height: '20%' }} />
      <h4 style={{ color: 'black', height: '60%' }}>Are you sure want to delete this item ?</h4>
      <div style={{ display: 'flex', justifyContent: 'space-around',width:'100%' }}>
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
      </div>
    </div>
  );
};

export default DeletePop;
