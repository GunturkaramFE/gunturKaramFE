import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import { Card, Paper, TextField, Typography } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import countries from '../asserts/Countries';
import indianStates from './IndainStates';
const CheckoutPage = () => {
 const containerStyle = {
  width: '80%',
};

if (window.innerWidth <= 600) {
  containerStyle.width = '100%';
}
  return (
    <div style={{width:'100%',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div style={{width:"100%",display:'flex',alignItems:'center',flexDirection:'column',height:'10%'}}>
      <div style={{width:'57%'}}>
      <h2 style={{fontSize:'20px',marginTop:'5px'}}>Checkout</h2>
      </div>
      <div style={{width:'57%',backgroundColor:'#3C99DC',padding:'4px 30px'}} >
      <ErrorOutlineIcon style={{color:'white'}} fontSize='small' /> Have a coupon ? <u>ihyuitr6fyukjb.n;opy8tidhg</u>
      </div>
    </div>
    <div style={{ containerStyle, padding: '5px', height: 'auto' ,display:'flex',height:'90%'}}>
      <Card  variant="outlined" style={{ display: 'flex', flexDirection: 'column',gap:'10px', alignItems: 'center', padding: '15px',border:'none'}}>
        <div style={{width:'100%'}}>
        <Typography variant="h6" gutterBottom>
        Billing Details
        </Typography>
        </div>      
        <div style={{ display: 'flex',gap:"10px",width:'100%' }}>
        <TextField id="outlined-basic" type='text' label="FirstName" variant="outlined" style={{width:'50%', background: 'transparent',height:'30px'}} />
        <TextField id="outlined-basic" type='text' label="LastName" variant="outlined" style={{width:'50%', background: 'transparent'}} />
        </div>
        <TextField id="outlined-basic" type='number' label="PhoneNumber" variant="outlined" style={{width:'100%', background: 'transparent'}} />
        <div style={{ display: 'flex',gap:"10px",width:'100%' }}>
        <TextField id="outlined-basic" type='text' label="House .No" variant="outlined" style={{width:'50%', background: 'transparent',height:'20px'}} />
        <TextField id="outlined-basic" type='text' label="Street" variant="outlined" style={{width:'50%', background: 'transparent'}} />
        </div>
        <TextField id="outlined-basic" type='text' label="Village" variant="outlined" style={{width:'100%', background: 'transparent'}} />

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
     <div className="card" style={{ display: 'flex', overflowY: 'scroll', overflowX: 'hidden', backgroundColor: '#F4F4F4',border:'none' ,borderBottom:'1px solid #DADEDF' ,flexDirection: 'column', width: '300px', borderRadius: '0', height: '165px' }}>
      <div className="card-body d-flex " style={{ backgroundColor: '', gap: '60px', borderRadius: '0',width:'300px', height: '100%',borderBottom:'1px solid #E7E5E3' , justifyContent: 'space-evenly', alignItems: 'center' }}>
        <p style={{flexWrap:'wrap',width:"50%"}}>Producchgvfgtdyuyfiukjvhcgdhteduyf bhjftyetd</p>
        <p style={{flexWrap:'wrap',width:"30%"}}>$10,000</p>
      </div>
      <div className="card-body d-flex " style={{ backgroundColor: '', gap: '60px', borderRadius: '0',width:'300px', height: '100%',borderBottom:'1px solid #E7E5E3' , justifyContent: 'space-evenly', alignItems: 'center' }}>
        <p style={{flexWrap:'wrap',width:"40%"}}>Producchgfsdj</p>
        <p style={{flexWrap:'wrap',width:"40%"}}>Subjectjfdh</p>
      </div>
      <div className="card-body d-flex " style={{ backgroundColor: '', gap: '60px', borderRadius: '0',width:'300px', height: '100%',borderBottom:'1px solid #E7E5E3' , justifyContent: 'space-evenly', alignItems: 'center' }}>
        <p style={{flexWrap:'wrap',width:"40%"}}>Producchgfsdjhkg</p>
        <p style={{flexWrap:'wrap',width:"40%"}}>Subjectjfdht</p>
      </div>
      <div className="card-body d-flex " style={{ backgroundColor: '', gap: '60px', borderRadius: '0',width:'300px', height: '100%',borderBottom:'1px solid #E7E5E3' , justifyContent: 'space-evenly', alignItems: 'center' }}>
        <p style={{flexWrap:'wrap',width:"40%"}}>Produdjhkghj</p>
        <p style={{flexWrap:'wrap',width:"40%"}}>Subjectjfdhy</p>
      </div>
      <div className="card-body d-flex " style={{ backgroundColor: '', gap: '60px', borderRadius: '0',width:'300px', height: '100%',borderBottom:'1px solid #E7E5E3' , justifyContent: 'space-evenly', alignItems: 'center' }}>
        <p style={{flexWrap:'wrap',width:"40%"}}>Producchgf</p>
        <p style={{flexWrap:'wrap',width:"40%"}}>htytdjhvhjry</p>
      </div>
      </div>  
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





