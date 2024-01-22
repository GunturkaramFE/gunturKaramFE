import React, { useState } from 'react';
import NavBar from '../navComponents/mainNav';
import ClearIcon from '@mui/icons-material/Clear';
import { Grid, Container, Typography, Button, Select, MenuItem, Paper,Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RatingComponent from '../ProductStore/RatingComponent';
import Socailmedia from './Socailmedia';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const View = () => {
  const [count, setCount] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('100gram');
  const [showClearButton, setShowClearButton] = useState(false);
  const handleDecrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrementCount = () => {
    setCount(count + 1);
  };
  const handleWeightChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedWeight(selectedValue);
    setShowClearButton(Boolean(selectedValue));
  };
  const handleClearSelection = () => {
    setSelectedWeight('');
    setShowClearButton(false);
  };
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" >
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} style={{ padding: '20px' }}>
            <img
              src='https://dwarakapickles.com/wp-content/uploads/2022/05/Dabbakaya-1.png'
              alt='$/'
              sx={{ width: '100%',height:'100vh', maxWidth: '100%' }}
            />
          </Grid>
           <Grid item xs={12} sm={6} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="h4">Chicken Pickle</Typography>
            <Typography variant="h5">$120.00</Typography>
            <div>
              <label style={{marginRight:'10px',fontWeight:'bold',fontSize:14}}>Weight :</label>
              <Select style={{ width: '40%',height:'40px' }} value={selectedWeight} onChange={handleWeightChange}>
                <MenuItem value="100gram">100gram</MenuItem>
                <MenuItem value="200gram">200gram</MenuItem>
                <MenuItem value="1000gram">1000gram</MenuItem>86
              </Select>
              {showClearButton && (
                <Button
                  variant="outlined"
                  color="error"
                  style={{ marginLeft: '10px' ,border:'none'}}
                  onClick={handleClearSelection}
                  startIcon={<ClearIcon />}
                >Clear</Button>
              )}
            </div>
            <Typography variant="h5"><del style={{ color: 'red', marginRight: '5px' }}>$180.00</del> $120.00</Typography>
            <Grid sx={{ width: "100%", display: 'flex', gap: '30px', flexDirection: ['column', 'row'] }}>
<Grid>            
<Grid sx={{ width: '140px', display: 'flex', alignItems: 'center' }}>
  <IconButton sx={{ border: '1px solid lightgray', borderRadius: '4px',width:'35px',height:'35px',borderTopRightRadius:'0px',borderBottomRightRadius:'0px' }} onClick={handleDecrementCount}>
    <RemoveIcon />
  </IconButton>

  <Paper elevation={0} sx={{ border: '1px solid lightgray', width: '30%', textAlign: 'center',padding: '6px 0px',borderRight:'none',borderLeft:'none' ,borderRadius: '0px', fontSize: '14px' }}>
    {count}
  </Paper>

  <IconButton sx={{ border: '1px solid lightgray', borderRadius: '4px' ,width:'35px',height:'35px',borderTopLeftRadius:'0px',borderBottomLeftRadius:"0px"}} onClick={handleIncrementCount}>
    <AddIcon />
  </IconButton>
</Grid>
 </Grid>  

      <Button variant="contained" color="primary" sx={{fontSize:12}}>
                Add to Cart
              </Button>
            </Grid>
            <div style={{ display: 'flex', width: '100%',gap:'10px' }}>
              <FavoriteBorderIcon  style={{color:'red',cursor: 'pointer'}} />
              <Typography sx={{fontSize:15}}>Add to wishlist</Typography>
            </div>
            <RatingComponent sx={{ margin: 0 }} />
            <hr/>
  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
  <Box sx={{ display: 'flex' }}>
    <Typography variant="subtitle1"><b>SKU :  </b></Typography>
    <Typography color="grey">MIXUP967</Typography>
  </Box>

  <Box sx={{ display: 'flex' }}>
    <Typography variant="subtitle1"><b>Category : </b></Typography>
    <Typography color="grey">NAMKEEN</Typography>
  </Box>

  <Box sx={{ display: 'flex' }}>
    <Typography variant="subtitle1"><b>Brand : </b></Typography>
    <Typography color="grey">Guntur Karam</Typography>
  </Box>

  <Box sx={{ display: 'flex' }}>
    <Typography variant="subtitle1"><b>Share : </b></Typography>
    <div style={{ width: '30%','@media (max-width:600px)': { width: '100%' }}}>
      <Socailmedia/>
    </div>
  </Box>
</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default View;
