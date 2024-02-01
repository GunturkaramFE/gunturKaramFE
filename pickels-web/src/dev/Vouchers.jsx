import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import api from '../api';
import { CircularProgress } from '@mui/material';

const Vouchers = () => {
  const [vouchers, setVouchers] = useState([]);
  const [isloading,setIsLoading]=useState(true)
  const[trigger,setTrigger]=useState(true)
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    CouponCode: '',
    CouponsCount: '',
    Amount: '',
  });
    const [formErrors, setFormErrors] = useState({
      CouponsCount: '',
      Amount: '',
    });
  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        setIsLoading(false)
        const response = await api.get('/user/getVoucher');
        console.log(response);
        if (response.success) {
          setVouchers(response.vouchers);
        }
      } catch (error) {
        console.error('Error fetching vouchers:', error);
      }finally{
        setIsLoading(true)
      }
    };
    fetchVouchers();
  }, [trigger]);

  const handleDeleteClick = async (id) => {
    try {
      await api.put('/user/updateVoucher',{
        voucherId:id,
      updatedData: {
        IsDeleted:true
      }
    })
    
  } catch (error) {
    
  }finally{
 
    setTrigger(!trigger)
  }
  };

  const handleAddNewClick = () => {
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
  };

  const handleFormSubmit = async() => {
       try {
        await api.post('/user/addVoucher',{voucherData:{...formData}})
      
    } catch (error) {
      
    }finally{
    
      setOpenForm(false);
      setTrigger(!trigger)
    }
    console.log(formData);
  
  };

  const handleFormInputChange = (field, value) => {
    // Handle form input change
    setFormData({
      ...formData,
      [field]: value,
    });

    // Validate numeric input for CouponsCount and Amount
    if (field === 'CouponsCount' || field === 'Amount') {
      const isValid = /^\d+$/.test(value);
      if (!isValid) {
        setFormErrors({
          ...formErrors,
          [field]: 'Please enter a valid number',
        });
      } else {
        setFormErrors({
          ...formErrors,
          [field]: '',
        });
      }
    }
  };

  return (
    <>
     {isloading?<Grid container style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh' }}>
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
                      <TableCell>ID</TableCell>
                      <TableCell>Coupon Code</TableCell>
                      <TableCell>Coupon Count</TableCell>
                      <TableCell>Coupon Value</TableCell>
                      <TableCell>Created On</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody style={{ maxHeight: '600px', overflowY: 'auto', width: '100%' }}>
  {vouchers.length > 0 ? (
    vouchers.map((voucher, y) => (
      <TableRow key={y + 1}>
        <TableCell>{y + 1}</TableCell>
        <TableCell>{voucher.CouponCode}</TableCell>
        <TableCell>{voucher.CouponsCount}</TableCell>
        <TableCell>{voucher.Amount}</TableCell>
        <TableCell>{new Date(voucher.CreatedOn).toLocaleString()}</TableCell>
        <TableCell>
          <IconButton onClick={() => handleDeleteClick(voucher.id)}>
            <DeleteIcon style={{ color: 'red' }} />
          </IconButton>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={6} align="center">No Vouchers</TableCell>
    </TableRow>
  )}
</TableBody>

                </Table>
              </TableContainer>
            </Grid>
          </Card>
        </Grid>
      </Grid>:<>  <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div></>}

      {/* Add New Voucher Form Dialog */}
      <Dialog open={openForm} onClose={handleFormClose}>
        <DialogTitle>Add New Voucher</DialogTitle>
        <DialogContent>
          <TextField
            label="Coupon Code"
            value={formData.CouponCode}
            fullWidth
            margin="normal"
            onChange={(e) => handleFormInputChange('CouponCode', e.target.value)}
          />
          <TextField
            label="Coupon Count"
            value={formData.CouponsCount}
            fullWidth
            margin="normal"
            error={!!formErrors.CouponsCount}
            helperText={formErrors.CouponsCount}
            onChange={(e) => handleFormInputChange('CouponsCount', e.target.value)}
          />
          <TextField
            label="Coupon Value"
            value={formData.Amount}
            fullWidth
            margin="normal"
            error={!!formErrors.Amount}
            helperText={formErrors.Amount}
            onChange={(e) => handleFormInputChange('Amount', e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={handleFormSubmit} variant="contained" style={{ backgroundColor: 'green' }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Vouchers;
