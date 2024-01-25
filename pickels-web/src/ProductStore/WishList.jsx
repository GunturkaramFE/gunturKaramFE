import React from 'react';
import {
  Box,
  Card,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  ButtonBase,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import NavBar from '../navComponents/mainNav';

const Wishlist = () => {
  const defaultData = {
    id: 1,
    title: 'Product Title',
    url: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-pickle-jar-png-image_6976662.png',
    startingPrice: '$19.99',
    stock: 50,
    pricelist: '[{"price": "19.99", "quantity": "10"}, {"price": "15.99", "quantity": "20"}]',
    rating: 4,
  };

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <NavBar />
      <Grid sx={{height:'100%',display:'flex',flexDirection:{xs:'column',sm:'row'}}}>
      <Grid variant="elevation" sx={{ width: {xs:'100%',sm:'15%'},height:{xs:'4%',sm:'10%'},display:'flex',justifyContent:'center',alignItems:'center'  }}>
        <Typography sx={{fontSize:'18px'}}>MyWhislist (26)</Typography>
      </Grid>
      <Paper
        sx={{
          width: { xs: '100%', sm: '85%' },
          height: { xs: '100%', sm: '100%' },
          padding: '20px',
          overflowY: 'auto', 
          gap:'10px'
          }}
      >
        <ButtonBase sx={{width:'100%'}}>
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
              <Box>
                <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" marginTop="1px">
                  {defaultData.title}
                </Typography>
                <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                  Price: {defaultData.startingPrice}
                </Typography>
                <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                  Available Stock: {defaultData.stock}
                </Typography>
                <Box component="fieldset" borderColor="transparent" sx={{ marginTop: '1px' }}>
                  <Rating
                    name={`rating-${defaultData.id}`}
                    value={defaultData.rating}
                    readOnly
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Tooltip title="Delete">
                <IconButton style={{ color: '#ff4d4f', height: '40px' }}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Grid>
           </Grid>
          </Grid>
        </Card>
        </ButtonBase>       
      </Paper>
      </Grid>
     
    </div>
  );
}

export default Wishlist;
