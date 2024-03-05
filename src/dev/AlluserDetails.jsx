import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DetailsIcon from '@mui/icons-material/Details';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import api from '../api';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
const defaultUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 97342568726',
  address: {
    street: '85-155, Ramalayam',
    city: 'visakhapatnam',
    zipcode: '531011'
  }
};

const AlluserDetails = ({ user = defaultUser }) => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('id');
  const[shippingAddresses,setShippingAddress]=useState()
  const[userData,setUserData]=useState()
  const [orders,setOrders]=useState()
  
  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const payload = {};
      payload[searchType] = searchText;
      const response = await api.post('/user/getUser', payload);
      if (response.success) {
        setUserData(response.user);
        const address = await api.post('/user/getShippingAddress', { userId: response.user.id });
        const ordersData = await api.post('/user/Order/get', { filter: { UserID: response.user.id } });
        setOrders(ordersData.orders);
        setShippingAddress(address.shippingAddresses);  
      } else {
        setUserData(null);
        setOrders([]);
        setShippingAddress([]);
      }
    } catch (error) {
     
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    console.log(orders)
  },[userData,orders,shippingAddresses])

  return (
    <>
      <Grid container spacing={2} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={5.5} lg={5.5}>
          <Card sx={{ width: '100%', height: '100%' }}>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={searchType}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="id">ID</MenuItem>
                  <MenuItem value="email">Email</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={5.5} lg={5.5}>
          <Card sx={{ width: '100%', height: '100%' }}>
            <CardContent sx={{ display: 'flex' }}>
              <TextField
                sx={{
                  width: { xs: '70%', sm: '70%', md: '70%', lg: '87%' },
                  marginBottom: { xs: '10px', sm: '10px', md: '10px', lg: '0px' }
                }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button
                variant="outlined"
                onClick={handleSearch}
                sx={{
                  height: { xs: '6vh', sm: '10vh', md: '8.4vh', lg: '6vh' },
                  marginLeft: { xs: '10px', sm: '10px', md: '10px', lg: '20px' }
                }}
              >
                Search
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {loading?<Grid style={{ width: '100%', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>      
      <Typography variant="h4" sx={{ color: '#DAD0CE', }}>Find the User By Search results<SentimentSatisfiedIcon style={{width:"44px",height:'44px'}}/>!! </Typography>
     </Grid>:<Grid container spacing={2}  md={12} sx={{display :'flex',justifyContent:'space-evenly',paddingTop:"20px ",fontFamily:'Tahoma'}}>
        <Grid  item xs={12} sm={4} md={4} lg={4}>
          <Card sx={{ height:'auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center" justifyContent='center'>
                My Profile <AccountCircleIcon style={{fontSize:'35px',color:'grey'}}/>
              </Typography>
              <Grid sx={{padding:'20px'}}>
              <Typography variant="h6" component="h2" sx={{margin:"10px 0px"}}>
                {userData.name}
              </Typography>
              <Typography color="textSecondary" gutterBottom sx={{margin:"10px 0px"}}>
                {userData.email}
              </Typography>
              <Typography color="textSecondary" gutterBottom sx={{margin:"10px 0px"}}>
                {userData.id}
              </Typography>
            
              <Typography color="textSecondary" sx={{margin:"10px 0px"}}>
                {userData.type}
              </Typography>
                </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid lg={6.5} sx={{display:"flex",flexDirection:'column',width:'100%',padding:'13px 0px'}}> 
        <Grid  item xs={12} sm={6} md={5.5} lg={12}>
          <Card sx={{  height: {xs:"auto",md:"45vh",sm:"45vh",lg:'45vh'}, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center">
               Delivery Address <LocalShippingIcon style={{fontSize:'30px'}}/>
              </Typography>
              <Grid sx={{height:'100%',height:'35vh',overflowY:'auto'}}>
                <Card sx={{padding:'20px',margin:'10px 0px',fontFamily:'Tahoma'}}>
                    <Typography variant='h6' >Rakesh Kirlampalli</Typography>
                    <Typography >Mobile: 9849765863 </Typography>
                    <Typography >85-155, Ramalayam, visakhapatnam, Andhra Pradesh, India ,pincode: 531011</Typography>
            
                </Card>
                <Card sx={{padding:'20px',margin:'10px 0px',fontFamily:'Tahoma'}}>
                    <Typography  variant='h6'>Rakesh Kirlampalli</Typography>
                    <Typography >Mobile: 9849765863 </Typography>
                    <Typography >85-155, Ramalayam, visakhapatnam, Andhra Pradesh, India ,pincode: 531011</Typography>
                </Card>
                <Card sx={{padding:'20px',margin:'10px 0px'}}>
                    <Typography  variant='h6'>Rakesh Kirlampalli</Typography>
                    <Typography >Mobile: 9849765863 </Typography>
                    <Typography >85-155, Ramalayam, visakhapatnam, Andhra Pradesh, India ,pincode: 531011</Typography>
                </Card>
          
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
        <Grid  item xs={12} sm={12} md={12} lg={11} sx={{marginBottom:"20px"}}>
          <Card sx={{  height: {xs:"auto",md:"85vh",sm:"85vh",lg:'85vh'}, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center" justifyContent='center'>
                Order Details <DetailsIcon style={{fontSize:'30px'}}/>
              </Typography>
              <Grid sx={{height:'100%',height:'75vh',overflowY:'auto'}} >
                {
                  orders.map((x)=>{
                    console.log(JSON.parse(x.ShippingAddress))
                    let Address=JSON.parse(x.ShippingAddress)
                    return(<>
                <Card xs={12} sm={12} md={12} lg={12}  sx={{padding:'20px',height:'auto',gap:'20px',margin:'10px 0px',fontFamily:'Tahoma',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',padding:'20px',display:'flex',flexDirection:{xs:"column",sm:"row",md:"row",lg:'row'}}} >
                    <Card xs={12} sm={4} md={4} lg={4}   sx={{width:{xs:"100%",sm:'35%',md:'35%',lg:'35%'},height:'380px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                     <Grid sx={{fontFamily:"monospace"}}>                      
                    <Typography sx={{fontSize:'18px',marginTop:'10px'}}  >OrderID:{x.OrderID}</Typography>
                    <Typography>Status :{x.OrderStatus}</Typography>
                    <Typography>place on: {x.OrderDate} </Typography>
                    <Typography>billing amount :{x.TotalAmount} </Typography>
                    <Typography>Pay by :{x.PaymentMethod} </Typography>
                    <Typography>{x.PromoCode ? `promocode: ${x.PromoCode}` : ""}</Typography>

                    <Typography>Transaction:{x.TransactionID}</Typography>
                    </Grid>
                    <Grid sx={{color:"grey"}}>  ......................shipping details.....................</Grid> 
                    <Typography sx={{textAlign:'start',width:'80%',fontFamily:"Trebuchet MS",fontSize:'15px'}}>{Address.mobile},</Typography>
                    <Typography sx={{textAlign:'start',width:'80%',fontFamily:"Trebuchet MS",fontSize:'16px'}}>{Address.street},</Typography>
                    <Typography sx={{textAlign:'start',width:'80%',fontFamily:"Trebuchet MS",fontSize:'16px'}}>{Address.village},</Typography>
                    <Typography sx={{width:'80%',fontFamily:"Trebuchet MS",fontSize:'16px'}}>{Address.city},{Address.country}</Typography>
                    <Grid sx={{color:"grey"}}>-------------------------------------------------------</Grid> 
                    </Card>
     <Grid container md={9} sm={9} lg={9} columnGap={2} rowGap={2} sx={{boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: "10px", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
      {JSON.parse(x.Items).map((y, index) => (
        <Grid key={index} item xs={12} sm={3.8} md={3.8} lg={3.8} sx={{}}>
          <Card sx={{ display: "flex", justifyContent: 'center', flexDirection: 'column', padding: "10px", height: "200px" }}>
            <Typography sx={{ fontFamily: 'Luminari', fontSize: "20px" }}>Item: {y.title}</Typography>
            <Typography sx={{ fontFamily: 'Luminari', fontSize: "18px" }}>Id: {y.id}</Typography>
            <Typography sx={{ fontFamily: 'monospace', fontSize: "18px" }}>Price: &#8377;{y.price}</Typography>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "17px" }}>Category: {y.subCategory}</Typography>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "17px" }}>Range: {y.selectedQuantity.quantity}{y.selectedQuantity.unit}</Typography>
            <Typography sx={{ fontFamily: "sans-serif", fontSize: "17px" }}>Quantity: {y.quantity}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
                </Card>
                    </>)
                  })}
                
          
              </Grid>
            </CardContent>
          </Card>
        </Grid>

      </Grid>}
  
    </>
  )
}

export default  AlluserDetails