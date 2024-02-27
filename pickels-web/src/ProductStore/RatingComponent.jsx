import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

const RatingComponent = ({rating}) => {
  return (
    <div className="container">
<Rating name="read-only" value={rating} readOnly />
    </div>
  );
};

export default RatingComponent;
