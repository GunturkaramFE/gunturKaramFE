import React, { useEffect, useState } from 'react';
import NavBar from '../navComponents/mainNav';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";  // Import AccordionDetails only once
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  ButtonBase,
  Typography,
  Checkbox,
  CircularProgress,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const MyOrders = () => {
  const navigate = useNavigate();
const[data,setData]=useState([]);
const [loading,setLoading]=useState(false)
const FetchData= async()=>{
  try {
    setLoading(true)
  const response= await api.get('/user/myorders')
  if(response.success){
console.log(response.orders)
setData(response.orders)
  }
  } catch (error) {
    
  } finally{
    setLoading(false)
  }
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  return formattedDate;
}
const handleButtonClick=(event,orderId)=>{
  event.stopPropagation();
  navigate(`/Orderdetails/${orderId}`,{ replace: false });
}
useEffect(()=>{
FetchData()
},[])

return (
    <>
      <NavBar />
      {!loading?<Grid sx={{ height: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
        <Grid variant="elevation" sx={{ width: { xs: '100%', sm: '15%' }, height: { xs: '4%', sm: '10%' }, display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, justifyContent: 'center', alignItems: 'start' }}>
          <Grid sx={{ width: "100%", padding: '10px' }}>
            <Typography sx={{ margin: '10px 0px', fontWeight: "bold" }}>ORDER TIME</Typography>
            <hr />
            <Grid sm={{ display: 'flex', fontSize: '10px' }}> <Checkbox style={{ color: 'green' }} /> Last 30 days</Grid>
            <Grid sm={{ display: 'flex' }}> <Checkbox style={{ color: 'green' }} /> Last six months</Grid>
            <Grid sm={{ display: 'flex' }}> <Checkbox style={{ color: 'green' }} /> Last year </Grid>
          </Grid>
          <Grid sx={{ width: "100%", padding: '10px' }}>
            <Typography sx={{ margin: '10px 0px', fontWeight: "bold" }}>ORDER STATUS</Typography>
            <hr />
            <Grid sm={{ display: 'flex' }}> <Checkbox style={{ color: 'green' }} /> On the way</Grid>
            <Grid sm={{ display: 'flex' }}> <Checkbox style={{ color: 'green' }} /> Delivered</Grid>
            <Grid sm={{ display: 'flex' }}> <Checkbox style={{ color: 'green' }} /> Cancelled </Grid>
            <Grid sm={{ display: 'flex' }}> <Checkbox style={{ color: 'green' }} /> Returned </Grid>
          </Grid>
        </Grid>
        <Paper
          sx={{
            width: { xs: '100%', sm: '85%' },
            height: { xs: '80vh', sm: '82.7vh' },
            padding: '20px',
            overflowY: 'auto',
            gap: '10px'
          }}
        >
          {data.map((x)=>{return(<ButtonBase sx={{ width: '100%' }} onClick={(event)=>handleButtonClick(event,x.OrderID)} >
            <Accordion sx={{width:{md:'100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}}>
              <AccordionSummary sm={12} md={12}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel1-content`}
                id={`panel1-header`}
                sx={{ width: '100%', height: { xs: "14vh", sm: "12vh"} }}
              >
                <Grid
                  sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}
                >
                  <Typography sx={{ fontFamily: 'Gill Sans' }}>Order ID: {x.OrderID}</Typography>
                  <Typography sx={{ fontFamily: 'Gill Sans' }}>payment: {x.PaymentMethod}</Typography>
                  <Typography sx={{ fontFamily: 'Gill Sans' }}>Date: {formatDate(x.Date)}</Typography>
                  <Grid sx={{ display: 'flex', justify: 'center' }}>
                    <Typography sx={{ fontFamily: 'Verdana' }}>Status: </Typography>
                    <Typography sx={{ fontFamily: 'Verdana', color: 'green' }}> {x.OrderStatus}</Typography>
                  </Grid>                                  
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
             {JSON.parse(x.Items).map((y)=>{ 
              return(<Card
        key={x.id} 
        sx={{ width: '100%', height: {xs:'auto',sm:'20%'},  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
         onClick={(event)=>{
          handleButtonClick(event,x.OrderID)
         }}
      >
        <Grid container sm={12}>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       
            <Box sx={{ height: '100%', width: '60%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               
              <img src={y.url} style={{ height: 'auto' }} alt='Product' />
            </Box>
          </Grid>
      <Grid sm={10} xs={12} sx={{display:'flex'}}  >
          <Grid item xs={12} sm={8} style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center' }}>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'start',padding:{xs:'10px',sm:'0px',md:'0px'}}}>
              <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" marginTop="1px">
                {y.title}
              </Typography>
              <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                Price: {y.price}
              </Typography>
              <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                Category: {y.category}
              </Typography>
             
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column',padding:{xs:'10px',sm:'0px',md:'0px'} }}>
            <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
            <FiberManualRecordIcon style={{color:'green',fontSize:'15px'}}/>
            <Typography sx={{fontSize:{xs:"10px",sm:"14px"},fontWeight:'bold'}}>{JSON.parse(x.orderDetails)[JSON.parse(x.orderDetails).length-1].status}</Typography>
            <Typography sx={{fontSize:{xs:"10px",sm:"14px"},fontWeight:'bold'}}>{JSON.parse(x.orderDetails)[JSON.parse(x.orderDetails).length-1].date}</Typography> </Grid>
            <Typography sx={{fontSize:'12px'}}>Your item has been {JSON.parse(x.orderDetails)[JSON.parse(x.orderDetails).length-1].status}</Typography>
          </Grid>
         </Grid>
        </Grid>
      </Card>)})}
              </AccordionDetails>
            </Accordion>
          </ButtonBase>)})}
        </Paper>
      </Grid>:  <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>}
    </>
  );
};

export default MyOrders;
