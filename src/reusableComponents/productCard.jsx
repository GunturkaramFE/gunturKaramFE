import React, { useState } from 'react';
import { AddShoppingCart, Visibility } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import PopupForm from '../Pop-up/PopupForm';
import AddToCart from '../ProductStore/AddToCart';
import { parseProduct } from '../helpers/parser';
import '../styles/productCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { draweropen } from '../store/lsDrawer';
import OutStock from '../asserts/OutStock.png'
const ProductCard = ({ productdetails, PopUpHandler }) => {
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch= useDispatch()
  return (
    <Card
      className="card"
      sx={{ width: {xs:"18rem",sm:'14rem',md:"14rem"}, height: '40vh', marginTop: '10px', marginLeft: '12px', position: 'relative',marginBottom:'8px'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="overlay">
          <div className="overlay-content">
            <span className="animate__animated animate__headShake" onClick={() => 
              {
                user.id?PopUpHandler(parseProduct(productdetails)):dispatch(draweropen()) 
              }}>
              <AddShoppingCart className="icon" />
              <h6>Add</h6>
            </span>
            <span className="animate__animated animate__headShake" onClick={() => window.open(`/ViewProduct/${productdetails.id}`, '_blank')}>
              <Visibility className="icon" />
              <h6>View</h6>
            </span>
          </div>
        </div>
      )}

      <CardMedia
        component="img"
        alt="Product Image"       
        image={productdetails.url}
        sx={{ marginTop: '3px', objectFit: 'contain', height:{xs:"65%",md:"60%",sm:'60%',lg:"57%"} }}
      />

      <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Grid>
      {productdetails.stock ==0 && (
        <img style={{ width: '100px', height: '23px' }} src={OutStock} alt='$/' />
          )}
      </Grid>
       <Typography variant="h6" component="div">
               {productdetails.title.length > 18 ? `${productdetails.title.slice(0, 18)}...` : productdetails.title}
       </Typography>
        <Typography variant="body1" color="textSecondary">
          From: &#x20B9;{productdetails.startingPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
