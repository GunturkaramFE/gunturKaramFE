import MenuItem from '@mui/material/MenuItem';
import { Avatar, Card, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react'
import countries from '../asserts/Countries'
import indianStates from './IndainStates';
const EditAddress = () => {
  const containerStyle={
    width:'50%'
  }
  if (window.innerWidth <= 600) {
    containerStyle.width = '100%'; // Change width for small screens
  }
  return (
    <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{ containerStyle, padding: '5px', height: 'auto', }}>
        <Card  variant="outlined" style={{ display: 'flex', flexDirection: 'column',gap:'10px', alignItems: 'center', padding: '15px' }}>
        <div style={{width:'100%'}}>
        <Typography variant="h6" gutterBottom>
        Shipping Address
        </Typography>
        </div>      
        <div style={{ display: 'flex',gap:"10px",width:'100%' }}>
        <TextField id="outlined-basic" type='text' label="FirstName" variant="outlined" style={{width:'50%', background: 'transparent',height:'20px'}} />
        <TextField id="outlined-basic" type='text' label="LastName" variant="outlined" style={{width:'50%', background: 'transparent'}} />
        </div>
        <TextField id="outlined-basic" type='number' label="PhoneNumber" variant="outlined" style={{width:'100%', background: 'transparent'}} />
        <div style={{ display: 'flex',gap:"10px",width:'100%' }}>
        <TextField id="outlined-basic" type='text' label="House .No" variant="outlined" style={{width:'50%', background: 'transparent',height:'20px'}} />
        <TextField id="outlined-basic" type='text' label="Street" variant="outlined" style={{width:'50%', background: 'transparent'}} />
        </div>
        <div style={{ display: 'flex',gap:"10px",width:'100%' }}>
        <TextField id="outlined-basic" type='text' label="Village" variant="outlined" style={{width:'50%', background: 'transparent',height:'20px'}} />
        <TextField id="outlined-basic" type='text' label="Land Mark" variant="outlined" style={{width:'50%', background: 'transparent'}} />
        </div>
        <div style={{ display: 'flex',gap:"10px",width:'100%' }}>
        <TextField id="outlined-basic" type='text' label="City" variant="outlined" style={{width:'50%', background: 'transparent',height:'20px'}} />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Select State"
          helperText="Please select your State"
          style={{width:'50%', background: 'transparent'}}
        >
         {indianStates.map((country, index) => (
        <MenuItem key={index} value={country}>
          {country}
        </MenuItem>
        ))}
        </TextField>        </div>
        <div style={{ display: 'flex',gap:"10px",width:'100%' }}>
        <TextField id="outlined-basic" type='number' label="Pincode" variant="outlined" style={{width:'50%', background: 'transparent',height:'20px'}} />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Select Country"
          helperText="Please select your Country"
          style={{width:'50%', background: 'transparent'}}
        >
         {countries.map((country, index) => (
        <MenuItem key={index} value={country}>
          {country}
        </MenuItem>
        ))}
        </TextField>        
        </div>
        <Button variant="contained" color="success">
            SUBMIT
       </Button>       
      </Card>

        </div>        
    </div>
  )
}

export default EditAddress
