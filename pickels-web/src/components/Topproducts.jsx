
import React from 'react';
import '../styles/topproducts.css'
import { Button, Card, CardActionArea, FormControl, InputLabel, MenuItem, Rating, Select, Stack } from '@mui/material';
import { bestSellers } from '../asserts/benifits';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useNavigate } from 'react-router-dom';
const Bestseller = () => {
  const navigate=useNavigate()
  const handleView=()=>{
   navigate('/ViewProduct')
  }
  return (
    <>
      <div className="Best-Seller-Container">    
      <p class="lead">
    Top Best Sellers For You ...!
    </p>
    <div className='Best-seller-inner-card'>

    {
     bestSellers.map((x)=>{
        return(
          <div className='item-card'>    
           <img src={x.img} alt="" /> 
           
  <Card  sx={{
    height: '70%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
   
  }}
> 
<CardActionArea>

    <div className="card-body class-body-text-container">
      <h5 className="card-title">{x.title}</h5> 
      <p className="card-text">
  <s style={{ color: 'red', textDecoration: 'line-through' }}>&#x20B9;500</s> &#x20B9;<span style={{ fontSize: '1.5em' }}>300</span></p>
<div className='select-container'>
<select class="form-select form-select-sm" aria-label="Small select example">
  <option selected value="0">1kg--₹200</option>
  <option value="1">2kg--₹350</option>
  <option value="2">3kg--₹500</option>
  <option value="3">4kg--₹600</option>
</select>
</div>
<div className='buttons-container'>
   <Stack spacing={2} direction="row">
   <Button variant="outlined" onClick={handleView}><VisibilityIcon/>View</Button>
   <Button variant="outlined"><ShoppingCartIcon/>Add</Button>
    </Stack>
    </div>
    </div>
  </CardActionArea>
</Card>      
          </div>

        )
      })
   
}
    </div>

      </div>
    </>
  );
};

export default Bestseller;
