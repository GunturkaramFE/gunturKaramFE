import { Paper, useMediaQuery } from '@mui/material';
import React from 'react';

const DeliveryData = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Paper elevation={3} style={{
      width: '75%',
      position: 'absolute',
      height: isMobile ? 'auto' : '130px',
      left: '13%',
      top: isMobile ? '87%' : '90%',
      zIndex: '100',
      borderRadius: '0',
      padding: '10px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <div style={{ width: isMobile ? '25%' : '25%', height: 'auto', display: 'flex',justifyContent:'center', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid #D3D4D9', paddingBottom: isMobile ? '10px' : '0' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_yAZss657-IsUISFAZmW95F1YSv7miZqVA0TU-IyRvhMhNRHIkY0sgE2DbTYiBHTfHw&usqp=CAU' alt='/' style={{ width: '40px', objectFit: 'contain' }} />
        </div>
        <div style={{ paddingTop: '5px', fontWeight: 'bold', textAlign: 'center', fontSize: isMobile ? '10px' : 'inherit' }}>
          All Type Pickles
        </div>
      </div>

      <div style={{ width: isMobile ? '25%' : '25%', height: 'auto', display: 'flex',justifyContent:'center', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid #D3D4D9', paddingBottom: isMobile ? '10px' : '0' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src='https://dwarakapickles.com/wp-content/uploads/elementor/thumbs/delivery-2-1-1-1-pob1zphnitzf12633kpfibuprwc63docge1d7c7n88.png' alt='/' style={{ width: '40px', objectFit: 'contain' }} />
        </div>
        <div style={{ paddingTop: '5px', fontWeight: 'bold', textAlign: 'center', fontSize: isMobile ? '10px' : 'inherit' }}>
          On Time Product Delivery
        </div>
      </div>

      <div style={{ width: isMobile ? '25%' : '25%', height: 'auto', display: 'flex',justifyContent:'center', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid #D3D4D9', paddingBottom: isMobile ? '10px' : '0' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src='https://dwarakapickles.com/wp-content/uploads/elementor/thumbs/received-1-1-1-pob1zojtbzy4pg7g92asxu396igsvokm49dvq291eg.png' alt='/' style={{ width: '40px', objectFit: 'contain' }} />
        </div>
        <div style={{ paddingTop: '5px', fontWeight: 'bold', textAlign: 'center', fontSize: isMobile ? '10px' : 'inherit' }}>
          Fresh and Quality Product
        </div>
      </div>

      <div style={{ width: isMobile ? '25%' : '25%', height: 'auto', display: 'flex',justifyContent:'center', flexDirection: 'column', paddingBottom: isMobile ? '10px' : '0' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src='https://dwarakapickles.com/wp-content/uploads/elementor/thumbs/Untitled_design__1_-removebg-preview-1-1-1-1-pob1zrdbwi1zoa3cslionbdmyo2wirvt4ncc5w4uvs.png' alt='/' style={{ width: '40px', objectFit: 'contain' }} />
        </div>
        <div style={{ paddingTop: '5px', fontWeight: 'bold', textAlign: 'center', fontSize: isMobile ? '10px' : 'inherit' }}>
          Worldwide Shipping
        </div>
      </div>
    </Paper>
  );
};

export default DeliveryData;
