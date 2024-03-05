import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const OrderConfirm = () => {
  const {Id } = useParams();
  const navigate=useNavigate()
  const handleTrack = () => {
    navigate(`/Orderdetails/${Id}`);
  }
  
  return (
    <>
    <Grid
        container 
        sx={{ width: '100%', height: '100vh',display:'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:"#32de84" }}
      >
        <Paper item sx={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10px',flexDirection:'column',gap:'20px',width:{xs:"90%",sm:"450px"},height:'65%'}}>
        <VerifiedIcon fontSize="large" style={{ color: 'green' }} />
         <Typography variant="h5" gutterBottom sx={{width:'100%',textAlign:{xs:"center",color:"black"}}}  >
           Order Placed Successful
          </Typography>
          <Typography style={{fontSize:'15px',fontFamily:'Gill Sans'}}>OrderID : {Id}</Typography>
          <Typography style={{width:'80%',textAlign:'center',fontSize:'14px',fontFamily:"Tahoma"}}>We have received your order and you can check your order status by using below link</Typography>
          <Typography style={{fontSize:'15px',color:'blue',cursor:"pointer"}} onClick={handleTrack}><u>Track My Order</u></Typography>
          <Typography style={{fontSize:'15px'}}>or</Typography>
          <Button variant="contained" onClick={()=>navigate('/')} sx={{ fontFamily: 'Palatino',borderRadius:'15px',backgroundColor:'#32de84' }} >Go Back to Home</Button>

        </Paper>
      </Grid>
    </>
  )
}

export default OrderConfirm
