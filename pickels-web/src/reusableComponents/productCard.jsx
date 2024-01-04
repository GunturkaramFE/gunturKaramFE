import React, { useState } from 'react';
import { AddShoppingCart, AttachMoney } from '@mui/icons-material'; // Import icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import '../styles/productCard.css';

const ProductCard = ({ productdetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      style={{ width: '14rem', height: '38vh', marginTop: '10px', marginLeft: '12px', position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="overlay">
          <div className="overlay-content">
            <span className="animate__animated animate__headShake"> <AddShoppingCart className="icon" /><h6>Add</h6></span>
            <span className="animate__animated animate__headShake">
      <VisibilityIcon className="icon"/>
        <h6>View</h6>
      </span>            
          </div>
        </div>
      )}

      <div style={{ height: '60%' }}>
        <img
          src={productdetails.imageSrc}
          className="card-img-top"
          alt="..."
          style={{
            marginTop: '3px',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      <div
        className="card-body"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
       <h5 className="card-title">{productdetails.title}</h5>
        <p className="card-text">Price: &#x20B9;{productdetails.startingPrice} </p>
      </div>
    </div>
  );
};

export default ProductCard;
