// PaperCard.js
import React from 'react';
import { Paper, useMediaQuery } from '@mui/material';
import '../styles/paperCart.css'; 
import {useNavigate} from 'react-router-dom'
const PaperCard = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
const navigate= useNavigate()
  return (
    <Paper elevation={3} className="paper-card" style={{ width: '75%', position: 'absolute', height: isMobile ? 'auto' : '130px', left: '13%', top: isMobile ? '87%' : '90%', zIndex: '100', borderRadius: '0', padding: '10px', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
      <div className="card-container" >
        <div className='card-container-inner'>
          <img src='https://dwarakapickles.com/wp-content/uploads/elementor/thumbs/received-1-1-1-pob1zojtbzy4pg7g92asxu396igsvokm49dvq291eg.png' alt='/' />
        </div>
        <div className="card-text"  onClick={()=>navigate('/MyOrders')}>
          MyOrders
        </div>
      </div>
      <div className="card-container" onClick={()=>{
        navigate('/products')
     window.scrollTo(0, 0);
     }}>
        <div >
          <img src={'https://cdn-icons-png.flaticon.com/512/869/869432.png'} alt='/' />
        </div>
        <div className="card-text">
        ALL PRODUCTS
        </div>
      </div> 
       <div className="card-container" 
        onClick={()=>{
          navigate('/viewcart')
        }}>
        <div >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_yAZss657-IsUISFAZmW95F1YSv7miZqVA0TU-IyRvhMhNRHIkY0sgE2DbTYiBHTfHw&usqp=CAU' alt='/' />
        </div>
        <div className="card-text">
          My Cart
        </div>
      </div>
      <div className="card-container" id='borderhide' >
        <div>
          <img src='https://dwarakapickles.com/wp-content/uploads/elementor/thumbs/delivery-2-1-1-1-pob1zphnitzf12633kpfibuprwc63docge1d7c7n88.png' alt='/' />
        </div>
        <div className="card-text">
          Shipping Products
        </div>
      </div>
    </Paper>
  );
};

export default PaperCard;
