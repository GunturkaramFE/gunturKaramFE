import React from 'react';
import { Landing_page_banner1, Landing_page_banner2 } from '../asserts/banners';

const BannerWrapper = () => {
  return (
    <div style={{ margin: '3%', display: 'flex',flexDirection:"row",justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <img
        src={Landing_page_banner1}
        style={{ width: '500px',marginBottom:"2%", height: '100%', }}
        draggable="false" 
      />
      <img
        src={Landing_page_banner2}
        style={{ width: '500px', height: '100%',  }}
        draggable="false" 
      />
    </div>
  );
};

export default BannerWrapper;
