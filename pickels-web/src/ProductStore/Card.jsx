import React, { useState } from 'react';
import './Card.css';
import PopupForm from '../Pop-up/PopupForm';
import AddToCart from './AddToCart';
import { useNavigate } from 'react-router-dom';
import RatingComponent from './RatingComponent';
import { parseProduct } from '../helpers/parser';

const Card = ({ data, PopUpHandler }) => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(JSON.parse(data.pricelist)[0]?.price || 0);


  return (
    <div style={{ width: '20%', height: '30%', position: 'relative', zIndex: 0 }}>
      <div className="card" style={{ width: '300px', height: 'auto', margin: '0', padding: '0' }}>
        <div className="card-body" style={{ margin: '0', padding: '0', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '100%', height: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img id='ImageHover' src={data.url || ''} alt="" style={{ objectFit: 'contain', height: '250px' }} />
            </div>
          </div>
          <div style={{ width: '100%', height: '40%', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
            <p style={{ margin: '0', fontWeight: 'bold', color: 'grey' }}>{data.title}</p>
            <div className='select-container'>
              <select
                className="form-select form-select-sm"
                aria-label="Small select example"
                onChange={(e) => {
                  const selectedIndex = e.target.value;
                  const selectedPriceAndQuantity = JSON.parse(data.pricelist)[selectedIndex];
                       setPrice(selectedPriceAndQuantity.price)
                }}
              >
                {JSON.parse(data.pricelist).map((x, y) => (
                  <option key={y} value={y}>
                    {`Price: ${x.price} - Quantity: ${x.quantity}`}
                  </option>
                ))}
              </select>
            </div>
            <bdi style={{ margin: '0', color: 'green', fontWeight: 'bold' }}><span>₹ </span>{price}</bdi>
            <div>
              <RatingComponent />
            </div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', padding: '6px' }}>
              <button
                className="btn btn-success btn-block "
                type="button"
                style={{ backgroundColor: 'green', color: 'white', width: '35%' }}
                onClick={() => {
                  window.open(`/ViewProduct/${data.id}`, '_blank');
                }}
              >
                View
              </button>
              <button
                className="btn btn-success btn-block "
                type="button"
                style={{ backgroundColor: 'green', color: 'white', width: '35%' }}
                onClick={() => { PopUpHandler(parseProduct(data)) }}
              >
                ADD+
              </button>
            </div>
            <div style={{ width: '100%', height: 'auto' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
