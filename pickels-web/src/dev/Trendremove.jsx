import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Rating,
  IconButton,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../api';

const Trendremove = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const[trigger,setTrigger]=useState(true)

  useEffect(() => {
    const fetchAllTrendingItems = async () => {
      try {
        const result = await api.get('user/trending-items/get');
        if (result?.originalProducts?.success) {
          setItems(result?.originalProducts?.items || []);
        }
        console.log('cfrdresponse', result);
      } catch (error) {
        console.error('Error fetching trending items:', error);
      } finally {
        setLoading(false);
        
      }
    };

    fetchAllTrendingItems();
  }, [trigger]);

  const handleDeleteTrend = async (itemId) => {
    if(items.length<7){
      alert('maintain atleast 6 products ')
      return
    }
    await api.delete(`/user/trending-items/remove/${itemId}`);
    setTrigger(!trigger)
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 1200 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Trending Items
        </Typography>
        {loading ? (
          <Box display="flex" justifyContent="center" my={3}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card sx={{ minWidth: 250, minHeight: 400 }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                      }}
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <img
                          src={item.url}
                          alt={item.title}
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '200px',
                            objectFit: 'contain',
                          }}
                        />
                        <Typography variant="h6" gutterBottom mt={2}>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={2}>
                          Price: ${item.startingPrice}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={2}>
                          Available Stock: {item.stock}
                        </Typography>
                        <select
                          aria-label="Small select example"
                          style={{ border: '1px solid #0d6efd', borderRadius: '3px' }}
                        >
                          {JSON.parse(item.pricelist).map((x, y) => (
                            <option key={y} value={y}>
                              {x.price + ' --- ' + x.quantity}
                            </option>
                          ))}
                        </select>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Rating name={`rating-${item.id}`} value={item.rating} readOnly />
                        <Tooltip title="Delete">
                          <IconButton sx={{ color: 'red' }} onClick={() => handleDeleteTrend(item.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Trendremove;
