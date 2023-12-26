import React, { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSwipeable } from 'react-swipeable'; // Updated import
import ProductCard from './productCard';

const CarouselSmall = ({ data, Component }) => {
  const cardWidth = 300; // Update with the actual width of your cards
  const step = 1; // Number of cards to show in each swipe
  const [cardsToShow, setCardsToShow] = useState(0);
  const totalCards = data.length;
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updateCardsToShow = () => {
      const screenWidth = window.innerWidth;
      const newCardsToShow = Math.floor(screenWidth / cardWidth);
      setCardsToShow(newCardsToShow);
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, [cardWidth]);

  const handlers = useSwipeable({
  
    onSwipedLeft: () => {
      if(!(position <= -(((totalCards - cardsToShow) * cardWidth)-1000))){
        handleSwipe('right')
      }
    
  },
    onSwipedRight: () => {
      handleSwipe('left')
    },
  });

  const handleSwipe = (direction) => {
    console.log(position <=-(((totalCards - cardsToShow) * cardWidth)-1000))
    if (direction === 'left') {
      const nextPosition = position + step * cardWidth;
      setPosition(nextPosition >= 0 ? 0 : nextPosition);
    } else {
      const nextPosition = position - step * cardWidth;
      const maxPosition = -((totalCards - cardsToShow) * cardWidth);
      setPosition(nextPosition <= maxPosition ? maxPosition : nextPosition);
    }
  };

  return (
    <div {...handlers} style={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden', marginBottom: '20px' }}>
      <ArrowBackIosNewIcon
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          backgroundColor: 'lightgray',
          zIndex: '100',
          cursor: position >= 0 ? 'not-allowed' : 'pointer',
        }}
        onClick={() => position >= 0 ? null : handleSwipe('left')}
      />

      <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(${position}px)`, justifyContent: 'space-between' }}>
        {data.map((card, index) => (
          <div key={index} style={{ width: cardWidth }}>
            <Component productdetails={card} />
          </div>
        ))}
      </div>

      <ArrowForwardIosIcon
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          backgroundColor: 'lightgray',
          cursor: position <= -(((totalCards - cardsToShow) * cardWidth)-1000) ? 'not-allowed' : 'pointer',
        }}
        onClick={() => position <= -(((totalCards - cardsToShow) * cardWidth)-1000) ? null : handleSwipe('right')}
      />
    </div>
  );
};

export default CarouselSmall;
