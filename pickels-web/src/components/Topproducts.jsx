
import React, { useEffect, useState } from 'react';
import '../styles/topproducts.css'
import { Button, Card, CardActionArea, FormControl, InputLabel, MenuItem, Rating, Select, Stack } from '@mui/material';
import { bestSellers } from '../asserts/benifits';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useNavigate } from 'react-router-dom';
import api from '../api';
const Bestseller = () => {
    const[items,setItems]=useState([])
  const handleView=(id)=>{
    window.open(`/ViewProduct/${id}`, '_blank')
  }

const fetchItems= async()=>{
  const response = await api.get(`/user/sort-items/${4}`)
  console.log(response)
  if(response.success){
    setItems(response.items)
  }
}
useEffect(()=>{
fetchItems()
},[])

  return (
    <>
      <div className="Best-Seller-Container">    
      <p class="lead">
    Top Best Sellers For You ...!
    </p>
    <div className='Best-seller-inner-card'>

    {
     items.map((x)=>{
        return(
          <div className='item-card'>    
           <img src={x.url} alt="" /> 
           
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
  From &#x20B9;<span style={{ fontSize: '1.5em' }}>{x.startingPrice}</span></p>
<div className='buttons-container'>
   <Stack spacing={2} direction="row">
   <Button variant="outlined" onClick={()=>handleView(x.id)}><VisibilityIcon/>Explore</Button>
 
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
