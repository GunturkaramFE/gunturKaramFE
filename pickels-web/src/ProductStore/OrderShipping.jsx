import React from 'react'
import NavBar from '../navComponents/mainNav';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
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
  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const OrderShipping = () => {
    const navigate=useNavigate()
    const defaultData = {
        id: 1,
        title: 'Product Title',
        url: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-pickle-jar-png-image_6976662.png',
        startingPrice: '$19.99',
        stock: 50,
        pricelist: '[{"price": "19.99", "quantity": "10"}, {"price": "15.99", "quantity": "20"}]',
        rating: 4,
      };
    const NavigateStatus=()=>{
        navigate('./OrderStatus')
    }
  return (
    <>
    <NavBar/>
      <Grid sx={{height:'100%',display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
    <Grid variant="elevation" sx={{ width: {xs:'100%',sm:'15%'},height:{xs:'4%',sm:'10%'},display:'flex',flexDirection:{xs:'row',sm:'column'},justifyContent:'center',alignItems:'start'  }}>
     <Grid sx={{width:"100%",padding:'10px'}}>
     <Typography sx={{margin:'10px 0px',fontWeight:"bold"}}>ORDER TIME</Typography>
     <hr/>
      <Grid sm={{display:'flex' ,fontSize:'10px'}}> <Checkbox style={{color:'green'}}/> Last 30 days</Grid>
      <Grid sm={{display:'flex'}}> <Checkbox style={{color:'green'}}/> Last six months</Grid>
      <Grid sm={{display:'flex'}}> <Checkbox style={{color:'green'}} /> Last year </Grid>
     </Grid>
     <Grid sx={{width:"100%",padding:'10px'}}>
     <Typography sx={{margin:'10px 0px',fontWeight:"bold"}}>ORDER STATUS</Typography>
     <hr/>
      <Grid sm={{display:'flex'}}> <Checkbox style={{color:'green'}}/> On the way</Grid>
      <Grid sm={{display:'flex'}}> <Checkbox style={{color:'green'}}/> Delivered</Grid>
      <Grid sm={{display:'flex'}}> <Checkbox style={{color:'green'}} /> Cancelled </Grid>
      <Grid sm={{display:'flex'}}> <Checkbox style={{color:'green'}} /> Returned </Grid>
     </Grid>
    </Grid>
    <Paper
      sx={{
        width: { xs: '100%', sm: '85%' },
        height: { xs: '80vh', sm: '82.7vh' },
        padding: '20px',
        overflowY: 'auto', 
        gap:'10px'
        }}
    >
      <ButtonBase sx={{width:'100%'}} onClick={NavigateStatus}>
      <Card
        key={defaultData.id} 
        sx={{ width: '100%', height: {xs:'auto',sm:'20%'},  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
    
      >
        <Grid container sm={12}>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       
            <Box sx={{ height: '100%', width: '60%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               
              <img src={defaultData.url} style={{ height: 'auto' }} alt='Product' />
            </Box>
          </Grid>
      <Grid sm={10} xs={12} sx={{display:'flex'}}  >
          <Grid item xs={12} sm={8} style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center' }}>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'start'}}>
              <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" marginTop="1px">
                {defaultData.title}
              </Typography>
              <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                Price: {defaultData.startingPrice}
              </Typography>
              <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                Catergory: {defaultData.stock}
              </Typography>
             
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column' }}>
            <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
            <FiberManualRecordIcon style={{color:'green',fontSize:'15px'}}/>
            <Typography sx={{fontSize:{xs:"10px",sm:"14px"},fontWeight:'bold'}}>Delivered On Oct 17 ,2023</Typography>
            </Grid>
            <Typography sx={{fontSize:'12px'}}>Your item has been delivered</Typography>
          </Grid>
         </Grid>
        </Grid>
      </Card>
      </ButtonBase>       
    </Paper>
    </Grid>
    </>
  )
}

export default OrderShipping