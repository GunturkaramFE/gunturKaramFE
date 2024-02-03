import React, { useState } from 'react';
import { AddShoppingCart, Visibility } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import PopupForm from '../Pop-up/PopupForm';
import AddToCart from '../ProductStore/AddToCart';
import { parseProduct } from '../helpers/parser';
import '../styles/productCard.css';

const ProductCard = ({ productdetails, PopUpHandler }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="card"
      sx={{ width: {xs:"18rem",sm:'14rem',md:"14rem"}, height: '38vh', marginTop: '10px', marginLeft: '12px', position: 'relative'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="overlay">
          <div className="overlay-content">
            <span className="animate__animated animate__headShake" onClick={() => PopUpHandler(parseProduct(productdetails))}>
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
        sx={{ marginTop: '3px', objectFit: 'contain', height:{xs:"70%",md:"60%",sm:'60%'} }}
      />

      <CardContent style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
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
