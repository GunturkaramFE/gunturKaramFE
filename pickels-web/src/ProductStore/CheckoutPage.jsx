import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { Card, Paper, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import countries from './Countries'
import indianStates from './IndainStates';
const CheckoutPage = () => {
    const containerStyle={
        width:'80%'
      }
      if (window.innerWidth <= 600) {
        containerStyle.width = '100%'; // Change width for small screens
      }
  return (
    <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{ containerStyle, padding: '5px', height: 'auto' ,display:'flex'}}>
      <Card  variant="outlined" style={{ display: 'flex', flexDirection: 'column',gap:'10px', alignItems: 'center', padding: '15px',border:'none'}}>
        <div style={{width:'100%'}}>
        <Typography variant="h6" gutterBottom>
        Billing Details
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
        <TextField id="outlined-basic" type='number' label="Village" variant="outlined" style={{width:'100%', background: 'transparent'}} />

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
       
      </Card>
      <Card  variant="outlined" style={{ display: 'flex', flexDirection: 'column',gap:'10px', alignItems: 'center', padding: '15px',border:'none' }}>
        <div style={{width:'100%'}}>
        <Typography variant="h6" gutterBottom>
         Your Orders
        </Typography>
        </div>    
        <div>  
        <Paper elevation={0} style={{display:'flex',backgroundColor:'#DADEDF',gap:'50px',width:'300px',borderRadius:'0',height:'55px',justifyContent:"space-evenly",alignItems:'center'}}> 
        <p>Product</p> 
        <p>Subject</p> 
        </Paper>   
        <Paper elevation={0} style={{display:'flex',backgroundColor:'#FFFFFF',gap:'50px',width:'300px',borderRadius:'0',height:'55px',justifyContent:"space-evenly",alignItems:'center'}}> 
        <p>kjoihouigyu</p> 
        <p>kjoihouigyu</p> 
        </Paper>
        <Paper elevation={0} style={{display:'flex',backgroundColor:'#F4F4F4',gap:'50px',width:'300px',borderRadius:'0',height:'55px',justifyContent:"space-evenly",alignItems:'center'}}> 
        <p>kjoihouigyu</p> 
        <p>kjoihouigyu</p> 
        </Paper>
        <Paper elevation={0} style={{display:'flex',backgroundColor:'#F4F4F4',gap:'50px',width:'300px',borderRadius:'0',height:'55px',justifyContent:"space-evenly",alignItems:'center'}}> 
        <p>kjoihouigyu</p> 
        <p>kjoihouigyu</p> 
        </Paper> 
        <Paper elevation={0} style={{display:'flex',backgroundColor:'#F4F4F4',gap:'50px',width:'300px',borderRadius:'0',height:'55px',justifyContent:"space-evenly",alignItems:'center'}}> 
        <p>SubTotal</p> 
        <p>$79.00</p> 
        </Paper> 
        <Paper elevation={0} style={{display:'flex',backgroundColor:'#F4F4F4',gap:'50px',width:'300px',borderRadius:'0',height:'55px',justifyContent:"space-evenly",alignItems:'center'}}> 
        <p>Total</p> 
        <p>$769.00</p> 
        </Paper>  
        <Paper elevation={0} style={{display:'flex',backgroundColor:'#F4F4F4',margin:'5px 0px',width:'300px',gap:'10px',borderRadius:'0',height:'50px',justifyContent:"center",alignItems:'center'}}> 
        <input type='radio' style={{color:'green'}} /> <p>Cash On Delivery</p>
        </Paper>
        <Paper elevation={0} style={{display:'flex',width:'300px',borderRadius:'0',height:'30px',alignItems:"center",paddingLeft:'10px'}}> 
        
        <p style={{fontSize:'small'}}><u>@ Pay with cash upon Delivery</u></p>  
        </Paper>
       
        
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <button type="button" className="btn btn-outline-success btn-lg btn-block">
              Proceed to Pay
            </button>
        </div> 
          
       </div>
      </Card>
     </div>        
    </div>
  )
}

export default CheckoutPage





