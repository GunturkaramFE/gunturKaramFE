import React, { useEffect, useState } from 'react';
import NavBar from '../navComponents/mainNav';
import ClearIcon from '@mui/icons-material/Clear';
import { Grid, Container, Typography, Button, Select, MenuItem, Paper, Box, CircularProgress } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RatingComponent from '../ProductStore/RatingComponent';
import Socailmedia from './Socailmedia';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import api from '../api';

const View = () => {
  const [count, setCount] = useState(1);
  const [selectedQuantity, setSelectedQuantity] = useState();
  const [showClearButton, setShowClearButton] = useState(false);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
     if (selectedQuantity) {
      const parsedQuantity = JSON.parse(selectedQuantity);
      const calculatedPrice = parsedQuantity.price * count;
      setPrice(calculatedPrice);
    }  }, [selectedQuantity, count]);

  const { id } = useParams();

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/user/get-items/${id}`);
      if (response.success) {
        setProduct(response.items);

        
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleDecrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrementCount = () => {
    setCount(count + 1);
  };


  const handleClearSelection = () => {
    setSelectedQuantity('');
    setShowClearButton(false);
  };

  return (
    <>
      <NavBar />
      {loading ? (
        <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <Container maxWidth="lg">
          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6} style={{ padding: '20px' }}>
              <img src={product.url} alt='$/' sx={{ width: '100%', height: '100vh', maxWidth: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Typography variant="h4">{product.title}</Typography>
                           <Typography variant="h5">
                <del style={{ color: 'red', marginRight: '5px' }}>${product.discountedPrice}</del>${price.toFixed(2)}
              </Typography>
              <div>
                <label style={{ marginRight: '10px', fontWeight: 'bold', fontSize: 14 }}>Weight :</label>
                <Select
                  style={{ width: '40%', height: '40px' }}
                  value={selectedQuantity}
                  onChange={(e) => setSelectedQuantity(e.target.value)}
                >
                  {product.pricelist &&
                    JSON.parse(product.pricelist).map((x, index) => (
                      <MenuItem key={index} value={JSON.stringify(x)}>
                        {`price: ${x.price} ---- quantity: ${x.quantity}`}
                      </MenuItem>
                    ))}
                </Select>
                {showClearButton && (
                  <Button
                    variant="outlined"
                    color="error"
                    style={{ marginLeft: '10px', border: 'none' }}
                    onClick={handleClearSelection}
                    startIcon={<ClearIcon />}
                  >
                    Clear
                  </Button>
                )}
              </div>
             
              <Grid sx={{ width: '100%', display: 'flex', gap: '30px', flexDirection: ['column', 'row'] }}>
                <Grid>
                  <Grid sx={{ width: '140px', display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      sx={{ border: '1px solid lightgray', borderRadius: '4px', width: '35px', height: '35px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
                      onClick={handleDecrementCount}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Paper
                      elevation={0}
                      sx={{ border: '1px solid lightgray', width: '30%', textAlign: 'center', padding: '6px 0px', borderRight: 'none', borderLeft: 'none', borderRadius: '0px', fontSize: '14px' }}
                    >
                      {count}
                    </Paper>

                    <IconButton
                      sx={{ border: '1px solid lightgray', borderRadius: '4px', width: '35px', height: '35px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
                      onClick={handleIncrementCount}
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Button variant="contained" color="primary" sx={{ fontSize: 12 }}>
                  Add to Cart
                </Button>
              </Grid>
              <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
                <FavoriteBorderIcon style={{ color: 'red', cursor: 'pointer' }} />
                <Typography sx={{ fontSize: 15 }}>Add to wishlist</Typography>
              </div>
              <RatingComponent initialRating={product.rating} sx={{ margin: 0 }} />
              <hr />
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
      )}
    </>
  );
};

export default View;
