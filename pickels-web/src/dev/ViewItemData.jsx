import { Card, Grid, Paper,Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Button, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RatingComponent from '../ProductStore/RatingComponent.jsx';
import { parseProduct } from '../helpers/parser';
const ViewItemData = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
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
      <Grid sx={{ width: '100%',height:'100vh'}}>
        <Grid item sm={12} md={12} container sx={{ display: 'flex',height:{xs:"auto",sm:'30vh',md:"30vh"}, width: '100%', justifyContent: 'space-evenly',alignItems:'center'}}>
          <Grid item sm={2} md={2}>
            <Card sx={{ width: '100%', padding: '10px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Typography sx={{ fontSize: '20px' }}>Shipping Details</Typography>
              <Typography sx={{ margin: '0px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Mobile: 9849765863 ,Address: 85-155, Ramalayam, visakhapatnam, Andhra Pradesh, India ,pincode: 531011</Typography>
            </Card>
          </Grid>
          <Grid item sm={2} md={2}>
            <Card sx={{ width: '100%', padding: '10px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Typography sx={{ fontSize: '20px' }}>Delivery Details</Typography>
              <Typography sx={{ margin: '0px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Mobile: 9849765863 ,Address: 85-155, Ramalayam, visakhapatnam, Andhra Pradesh, India ,pincode: 531011</Typography>
            </Card>
          </Grid>
          <Grid item sm={2} xs={12} md={2} >
            <Card sx={{ width: '100%', padding: '10px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Typography sx={{ fontSize: '20px' }}>Billing Details</Typography>
              <Grid sx={{ height: '120px', display: 'flex', paddingTop: '10px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <Grid sx={{ margin: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Typography>Sub-total</Typography>
                  <Typography>$500</Typography>
                </Grid>
                <Grid sx={{ margin: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Typography>Discount</Typography>
                  <Typography>0</Typography>
                </Grid>
                <Grid sx={{ margin: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Typography>Shipping Charges</Typography>
                  <Typography>$500</Typography>
                </Grid>
                <Grid sx={{ margin: '0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <Typography>Grand-total</Typography>
                  <Typography>$500</Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid sx={{ height: {xs:'auto',sm:'15vh',md:'15vh'}, display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:{xs:'10px',sm:'0px',md:'0px'} }}>
      <Card
        key={defaultData.id}
        sx={{ width:{xs:'100%',sm:'75%',md:"75%"}, height: { xs: 'auto', sm: '20vh',md:"15vh" }, display: 'flex', justifyContent: 'center',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
      >
        <Grid container sm={12}>
          <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ height: '100%', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={defaultData.url} style={{ height: 'auto', maxWidth: '100%' }} alt='Product' />
            </Box>
          </Grid>
          <Grid sm={10} xs={12} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '10px', sm: '0px' } }}>
            <Grid item xs={12} sm={2} style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" marginTop="1px">
                  {defaultData.title}
                </Typography>
                <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                  Price: {defaultData.startingPrice}
                </Typography>
                <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                  Category: {defaultData.stock}
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} item sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '100%', flexWrap: 'wrap' }}>
                <Stepper activeStep={2} alternativeLabel style={{ width: '100%' }}>
                  {steps.map((step, index) => (
                    <Step key={index}>
                      <StepLabel>
                        <Grid sx={{ textAlign: 'center' }}>
                          <Grid sx={{ fontSize: { xs: '0.8em', sm: '1.3em' } }}>{step.label}</Grid>
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
<Grid sx={{display:'flex',justifyContent:'center',padding:'20px 0px'}}>
 <Grid container item sm={9} md={9} xs={12} sx={{ height: "auto", display: "flex", gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
    <Grid  item xs={12} sm={12} md={3} sx={{ padding: '10px' }}>
      <Card sx={{ padding: '16px', width: '100%', height: 'auto' ,boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item xs={12} sx={{ position: 'relative', height: '50%', overflow: 'hidden' }}>
            <img id="ImageHover" src={defaultData.url || ''} alt="" style={{ objectFit: 'contain', height: '230px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ margin: '0', fontWeight: 'bold', color: 'grey' }}>
              {defaultData.title}
            </Typography>
            <Typography sx={{fontSize:'14px',color:'grey'}}>Weight: 200 Grams</Typography>
            <div className="select-container">
              <Typography sx={{fontSize:'14px',color:'grey'}}>Quantity: 22</Typography>
            </div>
            <Typography variant="body1" sx={{ margin: '0', color: 'green', fontWeight: 'bold' }}>
              <span>₹ </span>
              {price}
            </Typography>
            <Grid> <RatingComponent /></Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>     
    <Grid  item xs={12} sm={12} md={3} sx={{ padding: '10px' }}>
      <Card sx={{ padding: '16px', width: '100%', height: 'auto',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item xs={12} sx={{ position: 'relative', height: '50%', overflow: 'hidden' }}>
            <img id="ImageHover" src={defaultData.url || ''} alt="" style={{ objectFit: 'contain', height: '230px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ margin: '0', fontWeight: 'bold', color: 'grey' }}>
              {defaultData.title}
            </Typography>
            <Typography>Weight: 200 Grams</Typography>
            <div className="select-container">
              <Typography>Quantity: 22</Typography>
            </div>
            <Typography variant="body1" sx={{ margin: '0', color: 'green', fontWeight: 'bold' }}>
              <span>₹ </span>
              {price}
            </Typography>
            <Grid> <RatingComponent /></Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>  
    <Grid  item xs={12} sm={12} md={3} sx={{ padding: '10px' }}>
      <Card sx={{ padding: '16px', width: '100%', height: 'auto',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item xs={12} sx={{ position: 'relative', height: '50%', overflow: 'hidden' }}>
            <img id="ImageHover" src={defaultData.url || ''} alt="" style={{ objectFit: 'contain', height: '230px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ margin: '0', fontWeight: 'bold', color: 'grey' }}>
              {defaultData.title}
            </Typography>
            <Typography>Weight: 200 Grams</Typography>
            <div className="select-container">
              <Typography>Quantity: 22</Typography>
            </div>
            <Typography variant="body1" sx={{ margin: '0', color: 'green', fontWeight: 'bold' }}>
              <span>₹ </span>
              {price}
            </Typography>
            <Grid> <RatingComponent /></Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>  
    <Grid  item xs={12} sm={12} md={3} sx={{ padding: '10px' }}>
      <Card sx={{ padding: '16px', width: '100%', height: 'auto' ,boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
        <Grid container>
          <Grid item xs={12} sx={{ position: 'relative', height: '50%', overflow: 'hidden' }}>
            <img id="ImageHover" src={defaultData.url || ''} alt="" style={{ objectFit: 'contain', height: '230px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ margin: '0', fontWeight: 'bold', color: 'grey' }}>
              {defaultData.title}
            </Typography>
            <Typography>Weight: 200 Grams</Typography>
            <div className="select-container">
              <Typography>Quantity: 22</Typography>
            </div>
            <Typography variant="body1" sx={{ margin: '0', color: 'green', fontWeight: 'bold' }}>
              <span>₹ </span>
              {price}
            </Typography>
            <Grid> <RatingComponent /></Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>  
    <Grid  item xs={12} sm={12} md={3} sx={{ padding: '10px' }}>
      <Card sx={{ padding: '16px', width: '100%', height: 'auto' }}>
        <Grid container>
          <Grid item xs={12} sx={{ position: 'relative', height: '50%', overflow: 'hidden' }}>
            <img id="ImageHover" src={defaultData.url || ''} alt="" style={{ objectFit: 'contain', height: '230px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ margin: '0', fontWeight: 'bold', color: 'grey' }}>
              {defaultData.title}
            </Typography>
            <Typography>Weight: 200 Grams</Typography>
            <div className="select-container">
              <Typography>Quantity: 22</Typography>
            </div>
            <Typography variant="body1" sx={{ margin: '0', color: 'green', fontWeight: 'bold' }}>
              <span>₹ </span>
              {price}
            </Typography>
            <Grid> <RatingComponent /></Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>  
    <Grid  item xs={12} sm={12} md={3} sx={{ padding: '10px' }}>
      <Card sx={{ padding: '16px', width: '100%', height: 'auto' }}>
        <Grid container>
          <Grid item xs={12} sx={{ position: 'relative', height: '50%', overflow: 'hidden' }}>
            <img id="ImageHover" src={defaultData.url || ''} alt="" style={{ objectFit: 'contain', height: '230px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ margin: '0', fontWeight: 'bold', color: 'grey' }}>
              {defaultData.title}
            </Typography>
            <Typography>Weight: 200 Grams</Typography>
            <div className="select-container">
              <Typography>Quantity: 22</Typography>
            </div>
            <Typography variant="body1" sx={{ margin: '0', color: 'green', fontWeight: 'bold' }}>
              <span>₹ </span>
              {price}
            </Typography>
            <Grid> <RatingComponent /></Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>  
    <Grid  item xs={12} sm={12} md={3} sx={{ padding: '10px' }}>
      <Card sx={{ padding: '16px', width: '100%', height: 'auto' }}>
        <Grid container>
          <Grid item xs={12} sx={{ position: 'relative', height: '50%', overflow: 'hidden' }}>
            <img id="ImageHover" src={defaultData.url || ''} alt="" style={{ objectFit: 'contain', height: '230px', width: '100%' }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ margin: '0', fontWeight: 'bold', color: 'grey' }}>
              {defaultData.title}
            </Typography>
            <Typography>Weight: 200 Grams</Typography>
            <div className="select-container">
              <Typography>Quantity: 22</Typography>
            </div>
            <Typography variant="body1" sx={{ margin: '0', color: 'green', fontWeight: 'bold' }}>
              <span>₹ </span>
              {price}
            </Typography>
            <Grid> <RatingComponent /></Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>  

      </Grid>
      </Grid>
      </Grid>
    </>
  );
};

export default ViewItemData;
