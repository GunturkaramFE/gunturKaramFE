import React, { useState } from 'react'
import { Button, Card, CardContent, FormControl, Grid, Select, TextField , Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DetailsIcon from '@mui/icons-material/Details';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
const defaultUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 97342568726',
    address: {
      street: ' 85-155, Ramalayam',
      city: ' visakhapatnam',
      zipcode: '531011'
    }
};

const AlluserDetails = ({ user = defaultUser }) => {
    const [circle,setCircle]=useState(true)    
  return (
    <>
     <Grid>
      <Grid container spacing={2} md={12} sx={{display:'flex', justifyContent:'center'}}>
  <Grid item xs={12} sm={6} md={5.5} lg={5.5}>
    <Card sx={{ width: '100%', height: '100%' }}>
      <CardContent>
        <FormControl fullWidth>
          <Select
            labelId="filter-key-label"
            id="filter-key-select"
          >
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={5.5} lg={5.5}>
    <Card sx={{ width: '100%', height: '100%' }}>
    <CardContent sx={{display:'flex'}}>
  <TextField 
    sx={{
      width: { xs: "70%", sm: '70%', md: "70%", lg: '87%' }, // Adjust the width for larger screens
      marginBottom: { xs: '10px', sm: '10px', md: '10px', lg: '0px' } // Add margin at the bottom for smaller screens
    }}
  />
  <Button 
    variant="outlined" 
    sx={{
      height: { xs: '6vh', sm: "10vh", md: '8.4vh',lg:'6vh' }, // Adjust the height for different screen sizes
      marginLeft: { xs: "10px", sm: "10px", md: "10px", lg: "20px" } // Add left margin for larger screens
    }}
  >
    Search
  </Button>
</CardContent>

    </Card>
  </Grid>
      </Grid>
      <Grid container spacing={2}  md={12} sx={{display :'flex',justifyContent:'center',paddingTop:"20px ",fontFamily:'Tahoma'}}>
        <Grid  item xs={12} sm={6} md={5.5} lg={5.5}>
          <Card sx={{ height: {xs:"auto",md:"35vh",sm:"35vh",lg:'37vh'}, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center" justifyContent='center'>
                My Profile <AccountCircleIcon style={{fontSize:'35px',color:'grey'}}/>
              </Typography>
              <Grid sx={{padding:'20px'}}>
              <Typography variant="h6" component="h2" sx={{margin:"10px 0px"}}>
                {user.name}
              </Typography>
              <Typography color="textSecondary" gutterBottom sx={{margin:"10px 0px"}}>
                {user.email}
              </Typography>
              <Typography color="textSecondary" sx={{margin:"10px 0px"}}>
                {user.phone}
              </Typography>
              <Typography color="textSecondary" sx={{margin:"10px 0px"}}>
                {user.address.street}, {user.address.city}, {user.address.zipcode}
              </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid  item xs={12} sm={6} md={5.5} lg={5.5}>
          <Card sx={{  height: {xs:"auto",md:"35vh",sm:"35vh",lg:'37vh'}, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center" justifyContent='center'>
                Order Details <DetailsIcon style={{fontSize:'30px'}}/>
              </Typography>
              <Grid sx={{height:'100%',height:'28vh',overflowY:'auto'}} >
                <Card sx={{padding:'20px',margin:'10px 0px',fontFamily:'Tahoma'}} >
                <Typography sx={{fontSize:'18px'}}  >OrderID:nbo15jk2b1</Typography>
                    <Typography>Status : Placed</Typography>
                    <Typography>Date: 27/19/2023 </Typography>
                    <Typography>Qauntity:2 </Typography>
                </Card>
                <Card sx={{padding:'20px',margin:'10px 0px'}}>
                <Typography sx={{fontSize:'18px'}}  >OrderID:nbo15jk2b1</Typography>
                    <Typography>Status : Placed</Typography>
                    <Typography>Date: 27/19/2023 </Typography>
                    <Typography>Qauntity:2 </Typography>
                </Card>
                <Card sx={{padding:'20px',margin:'10px 0px'}}>
                <Typography sx={{fontSize:'18px'}} >OrderID:nbo15jk2b1</Typography>
                    <Typography>Status : Placed</Typography>
                    <Typography>Date: 27/19/2023 </Typography>
                    <Typography>Qauntity:2 </Typography>
                </Card>
          
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid  item xs={12} sm={6} md={5.5} lg={5.5}>
          <Card sx={{  height: {xs:"auto",md:"35vh",sm:"35vh",lg:'37vh'}, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center">
               Delivery Address <LocalShippingIcon style={{fontSize:'30px'}}/>
              </Typography>
              <Grid sx={{height:'100%',height:'28vh',overflowY:'auto'}}>
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
        <Grid  item xs={12} sm={6} md={5.5} lg={5.5}>
          <Card sx={{  height: {xs:"auto",md:"35vh",sm:"35vh",lg:'37vh'}, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center">
                Shipping Address <DeliveryDiningIcon  style={{fontSize:'30px'}}/>
              </Typography>
              <Grid sx={{height:'100%',height:'28vh',overflowY:'auto'}}>
                <Card sx={{padding:'20px',margin:'10px 0px'}}>
                    <Typography variant='h6'>Rakesh Kirlampalli</Typography>
                    <Typography>Mobile: 9849765863 </Typography>
                    <Typography>85-155, Ramalayam, visakhapatnam, Andhra Pradesh, India ,pincode: 531011</Typography>
                </Card>
                <Card sx={{padding:'20px',margin:'10px 0px'}}>
                    <Typography variant='h6'>Rakesh Kirlampalli</Typography>
                    <Typography>Mobile: 9849765863 </Typography>
                    <Typography>85-155, Ramalayam, visakhapatnam, Andhra Pradesh, India ,pincode: 531011</Typography>
                </Card>
                <Card sx={{padding:'20px',margin:'10px 0px'}}>
                    <Typography variant='h6'>Rakesh Kirlampalli</Typography>
                    <Typography>Mobile: 9849765863 </Typography>
                    <Typography>85-155, Ramalayam, visakhapatnam, Andhra Pradesh, India ,pincode: 531011</Typography>
                </Card>
          
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Grid>
    </>
  )
}

export default AlluserDetails
