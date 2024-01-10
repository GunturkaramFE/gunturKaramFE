import React, { useState } from 'react';
import Rating from 'react-rating';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    // Your logic to handle the rating change event and update the rating state
    setRating(value);
  };

  const starStyle = {
    fontSize: '20px', // Adjust the font size as needed
    margin: '0 5px', // Adjust the margin as needed
    color: '#ddd', // Color for empty stars
  };

  const filledStarStyle = {
    color: '#f8d64e', // Color for filled stars
  };

  return (
    <div className="container">
      <Rating
        initialRating={rating}
        emptySymbol={<span style={starStyle}>★</span>}
        fullSymbol={<span style={{ ...starStyle, ...filledStarStyle }}>★</span>}
        onClick={handleRatingChange}
      />
    </div>
  );
};

export default RatingComponent;
