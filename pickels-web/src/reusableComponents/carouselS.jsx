import React, { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSwipeable } from 'react-swipeable'; // Updated import
import ProductCard from './productCard';
import PopupForm from '../Pop-up/PopupForm';
import AddToCart from '../ProductStore/AddToCart';
import AddToCartPopUp from './addToCartPopUp';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
// ... (imports)

const CarouselSmall = ({ data, Component }) => {
  const cardWidth = 300;
  const step = 1;
  const [cardsToShow, setCardsToShow] = useState(0);
  const totalCards = data?.length;
  const [position, setPosition] = useState(0);
  const[pop,setPopUp]=useState(false)
  const[popUpData,setPopUpData]=useState({})

  useEffect(() => {
    const updateCardsToShow = () => {
      const screenWidth = window.innerWidth;
      const newCardsToShow = Math.floor(screenWidth / cardWidth);
      setCardsToShow(newCardsToShow);
    };

    if (data?.length > 0) {
      updateCardsToShow();
    }

    window.addEventListener('resize', updateCardsToShow);

    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, [cardWidth, data]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleSwipe = (direction) => {
    if (direction === 'left' && position < 0) {
      const nextPosition = position + step * cardWidth;
      setPosition(nextPosition >= 0 ? 0 : nextPosition);
    } else if (direction === 'right' && position > -((totalCards - cardsToShow) * cardWidth)) {
      const nextPosition = position - step * cardWidth;
      setPosition(nextPosition <= -((totalCards - cardsToShow) * cardWidth) ? -((totalCards - cardsToShow) * cardWidth) : nextPosition);
    }
  };
  const HandlePopup=(data)=>{
    console.log(data)
    setPopUpData(data)
    setPopUp(!pop)
    }
  if (!data) {
    
    return <div> <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box></div>;
  }

  return (
    <>
    <Box {...handlers} sx={{ position: 'relative', width: '100%', height: '50vh', overflow: 'hidden', marginBottom: '20px' }}>
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

<Box sx={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(${position}px)`, justifyContent: "space-between", alignItems: "center", height: '100%' }}>
  {data?.map((card, index) => (
    <Box key={index} sx={{ width: cardWidth, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Component productdetails={card} PopUpHandler={HandlePopup} />
    </Box>
  ))}
</Box>


      <ArrowForwardIosIcon
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          backgroundColor: 'lightgray',
          cursor: position <= -((totalCards - cardsToShow) * cardWidth) ? 'not-allowed' : 'pointer',
        }}
        onClick={() => position <= -((totalCards - cardsToShow) * cardWidth) ? null : handleSwipe('right')}
      />
    </Box>
    {pop&& (
      <AddToCartPopUp ispop={pop} formData={<AddToCart data={popUpData} fun={HandlePopup}/>} fun={HandlePopup}  />
    )}
    </>
  );
};

export default CarouselSmall;
