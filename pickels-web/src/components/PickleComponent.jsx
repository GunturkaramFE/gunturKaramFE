import React from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import '../styles/PickleComponent.css';

const PickleComponent = () => {
  const cardsData = [
    {
      id: 2,
      title: 'Top Rating Pickle',
      imageUrl: 'https://media4.giphy.com/media/Ye6tooWtbvwBCIxOhG/200w.gif',
      details: 'Details about Card 2',
      rating: '3.8',
    },
    {
      id: 1,
      title: 'Fast Delivery',
      imageUrl: 'https://media4.giphy.com/media/hWco3fzBujt2CqaQBB/200.gif?cid=790b7611cpmv42ei3kh48p981fbp7nwopg6e5snp9xeef4p3&ep=v1_gifs_search&rid=200.gif&ct=s',
      details: 'Details about Card 1',
      rating: '4.5',
    },
  
    {
      id: 3,
      title: 'World Wide Delivery',
      imageUrl: 'https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif',
      details: 'Details about Card 3',
      rating: '4.2',
    },
  ];

  return (
    <Grid sx={{ height:{xs:'auto',sm:'20vh',md:"20vh"}, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' ,backgroundColor:'#00A877'}}>
      <Grid item xs={12} sm={12} md={12} sx={{  display: 'flex', width: '90%', justifyContent: 'space-evenly' }}>
        {cardsData.map((card) => (
          <Grid sm={3} >
            <Grid className="card" sx={{display:'flex',flexDirection:'column', width: {xs:'100px',sm:'250px',md:'250px'},border:"none",backgroundColor:'#00A877', transition: 'transform 0.5s ease-in-out' }} key={card.id}>
              <CardMedia
                className="media"
                component="img"
                alt={card.title}
                image={card.imageUrl}
                style={{ height:{xs:"50px",sm:"130px",md:"130px"}, objectFit: 'contain' }}
              />
               <Typography  component="div" sx={{textAlign:'center',height:'auto',color:'white',fontFamily:"Tahoma",fontSize:{xs:"13px",sm:"20px",md:"20px"}}}>
                  {card.title}
                </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PickleComponent;
