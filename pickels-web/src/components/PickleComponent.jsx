import React from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import '../styles/PickleComponent.css';

const PickleComponent = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      imageUrl: 'https://via.placeholder.com/300',
      details: 'Details about Card 1',
      rating: '4.5',
    },
    {
      id: 2,
      title: 'Card 2',
      imageUrl: 'https://via.placeholder.com/300',
      details: 'Details about Card 2',
      rating: '3.8',
    },
    {
      id: 3,
      title: 'Card 3',
      imageUrl: 'https://via.placeholder.com/300',
      details: 'Details about Card 3',
      rating: '4.2',
    },
  ];

  return (
    <Grid sx={{ height: '55vh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Grid item xs={12} sm={12} md={12} sx={{  display: 'flex', width: '75%', justifyContent: 'space-evenly' }}>
        {cardsData.map((card) => (
          <Grid sm={3} >
            <Card className="card" sx={{ width: '420px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', transition: 'transform 0.5s ease-in-out' }} key={card.id}>
              <CardMedia
                className="media"
                component="img"
                alt={card.title}
                image={card.imageUrl}
                style={{ height: '230px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.details}
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                  Rating: {card.rating}
                </Typography>
                <Button variant="contained" style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                  Button
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PickleComponent;
