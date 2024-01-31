import { Box, Card, Grid, IconButton, TextField, Typography} from '@mui/material'
import React, { useState } from 'react'
import NavBar from '../navComponents/mainNav'
import Footer from '../components/footer';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const OrderStatus = () => {
    const initialAddress = {
        name: 'Rakesh',
        address: '85-113.., Yelamanchili road, Mossayapeta village Atchutapuram, Atchutapuram, Ramalayam , Ramalayam street, Mossayapeta village Atchutapuram, Atchutapuram APSEZ - 531011, Andhra Pradesh',
        phoneNumber: '9849765863',
      };
    const [isEditable, setEditable] = useState(false);
    const [address, setAddress] = useState(initialAddress);
  
    const handleEditClick = () => {
      setEditable(!isEditable);
    };
    const handleSaveClick = () => {
        // Save the data or perform any other necessary actions
        setEditable(false);
    };

    const handleInputChange = (e) => {
      setAddress({
        ...address,
        [e.target.name]: e.target.value,
      });
    };
  
    const defaultData = {
        id: 1,
        title: 'Product Title',
        url: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-pickle-jar-png-image_6976662.png',
        startingPrice: '$19.99',
        stock: 50,
        pricelist: '[{"price": "19.99", "quantity": "10"}, {"price": "15.99", "quantity": "20"}]',
        rating: 4,
      };
      const steps = [
        { label: 'Order Placed', date: '2022-05-01' },
        { label: 'Order Confirmed', date: '2022-02-01' },
        { label: 'Shipped', date: '2022-02-15' },
        { label: 'Out For Delivery', date: '2022-03-01' },
        { label: 'Delivered', date: '2022-05-01' },
      ];
      
      
  return (
    <>
     <NavBar/>
       <Grid sx={{width:"100%",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',gap:'20px',marginTop:"20px"}}>
       <Card sx={{ width: '80%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <Grid>
                <Typography sx={{ fontWeight: 'bold',marginBottom:'10px' }}>Delivery Address</Typography>
                {isEditable ? (
                    <Grid>
                        <TextField
                            name="name"
                            label="Name"
                            value={address.name}
                            onChange={handleInputChange}
                            fullWidth
                            sx={{ fontSize: '14px', fontWeight: 'bold', mb: 2 }}
                        />
                        <TextField
                            name="address"
                            label="Address"
                            value={address.address}
                            onChange={handleInputChange}
                            multiline
                            fullWidth
                            sx={{ width: '100%', fontSize: { xs: '12px', sm: '15px' }, mb: 2 }}
                        />
                        <Grid sx={{ display: 'flex', gap: '10px', alignItems: 'center',justifyContent:'space-between',width:'100%' }}>
                            <TextField
                                name="phoneNumber"
                                label="Phone Number"
                                value={address.phoneNumber}
                                onChange={handleInputChange}
                                sx={{ fontWeight: 'bold', fontSize: '14px', mb: 2 }}
                            />
                            <IconButton onClick={handleSaveClick} sx={{ ml: 1 }}>
                                <SaveIcon style={{color:'green'}} />
                            </IconButton>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', mb: 2 }}>{address.name}</Typography>
                        <Typography sx={{ width:{xs:"100%",sm:'50%'}, fontSize: { xs: '12px', sm: '15px', flexWrap: 'wrap' }, mb: 2 }}>
                            {address.address}
                        </Typography>
                        <Grid sx={{ display: 'flex', gap: '10px', alignItems: 'center',justifyContent:'space-between'  }}>
                            <Grid sx={{display:'flex'}}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', mb: 2 }}>Phone Number :</Typography>
                            <Typography sx={{ fontSize: '15px', mb: 2 }}> {address.phoneNumber}</Typography>
                            </Grid>
                            <IconButton onClick={handleEditClick}>
                                <EditIcon style={{color:'green'}}  />
                            </IconButton>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Card>
        <Grid sx={{width:'80%'}}>
        <Card
        key={defaultData.id} 
        sx={{ width: '100%', height: {xs:'auto',sm:'30vh'},  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',display:'flex',justifyContent:'center' }}
      >
        <Grid container sm={12}>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>       
            <Box sx={{ height: '100%', width: '70%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>               
              <img src={defaultData.url} style={{ height: 'auto' }} alt='Product' />
            </Box>
          </Grid>
           <Grid sm={10} xs={12} sx={{display:'flex',flexDirection:{xs:'column',sm:'row'},gap:{xs:"10px",sm:"0px"}  }}  >
          <Grid item xs={12} sm={2} style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center'}}>
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
          <Grid xs={12} item sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%',flexWrap:'wrap' }}>
        <Stepper  activeStep={2} alternativeLabel style={{ width: '100%' }}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Grid sx={{ textAlign: 'center' }}>
                  <Grid sx={{ fontSize: {xs:"0.8em",sm:'1.3em'} }}>{step.label}</Grid>
                  <Grid sx={{ fontSize: '0.8em', color: '#666', marginTop: '8px' }}>{step.date}</Grid>
                </Grid>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Grid>         
         </Grid>
        </Grid>
      </Card>
      </Grid>
      </Grid>
      <Footer style={{marginTop:"0"}}/>
    </>
  )
}

export default OrderStatus
