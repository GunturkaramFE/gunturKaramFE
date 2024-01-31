import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Grid, Typography, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Vouchers = () => {
  const columns = [
    { id: 'id', label: 'ID'},
    { id: 'Coupon Code', label: 'Coupon Code'},
    { id: 'Coupon Count', label: 'Coupon Count' },
    { id: 'Coupon Value', label: 'Coupon Value' },
    { id: 'Coupon Time', label: 'Coupon Time'},
    { id: 'Action', label: 'Action'},
  ];

  const initialFormData = {
    couponCode: '',
    couponCount: '',
    couponValue: '',
    couponTime: '',
  };

  const [rows, setRows] = useState([
    { id: 1, 'Coupon Code': 'Snow', 'Coupon Count': 'Jon', 'Coupon Value': 14, 'Coupon Time': 'Arya' },
    // ...existing rows
  ]);

  const [formData, setFormData] = useState(initialFormData);
  const [openForm, setOpenForm] = useState(false);

  const handleDeleteClick = (id) => {
    // Implement delete logic as needed
    console.log(`Deleting row with ID ${id}`);
  };

  const handleAddNewClick = () => {
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
    setFormData(initialFormData); // Reset form data on close
  };

  const handleFormSubmit = () => {
    // Validate and submit form data
    const newRow = {
      id: rows.length + 1, // Generate a new ID (replace with your logic)
      'Coupon Code': formData.couponCode,
      'Coupon Count': formData.couponCount,
      'Coupon Value': formData.couponValue,
      'Coupon Time': formData.couponTime, // You can set a default value or leave it empty
    };

    setRows([...rows, newRow]);
    setOpenForm(false);
    setFormData(initialFormData); // Reset form data after submission
  };

  const handleFormInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <Grid container style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
        <Grid item sm={10} xs={12}>
          <Card style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 10px' }}>
              <Typography sx={{ fontFamily: 'Monaco', fontSize: '26px' }}>Vouchers</Typography>
              <Button variant="outlined" onClick={handleAddNewClick}>Add New</Button>
            </Grid>
            <Grid style={{ width: '100%' }}>
              <TableContainer component={Paper} style={{ maxHeight: '600px', overflowY: 'auto' }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell key={column.id} style={{ minWidth: column.minWidth, fontWeight: 'bold' ,fontFamily:'Tahoma'}}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody style={{ maxHeight: '600px', overflowY: 'auto', width: '100%' }}>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        {columns.map((column) => (
                          <TableCell key={column.id}>
                            {column.id === 'Action' ? (
                              <>
                                <IconButton onClick={() => handleDeleteClick(row.id)}>
                                  <DeleteIcon style={{ color: 'red' }} />
                                </IconButton>
                              </>
                            ) : (
                              row[column.id]
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {/* Add New Voucher Form Dialog */}
      <Dialog open={openForm} onClose={handleFormClose}>
        <DialogTitle>Add New Voucher</DialogTitle>
        <DialogContent>
          <TextField
            label="Coupon Code"
            value={formData.couponCode}
            onChange={(e) => handleFormInputChange('couponCode', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Coupon Count"
            value={formData.couponCount}
            onChange={(e) => handleFormInputChange('couponCount', e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Coupon Value"
            value={formData.couponValue}
            onChange={(e) => handleFormInputChange('couponValue', e.target.value)}
            fullWidth
            margin="normal"
          />
           <TextField
            label="Coupon Time"
            value={formData.couponTime}
            onChange={(e) => handleFormInputChange('couponValue', e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={handleFormSubmit} variant="contained" style={{backgroundColor:"green"}}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Vouchers;
