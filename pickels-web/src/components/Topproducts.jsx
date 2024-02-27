import React, { useEffect, useState } from 'react';
import '../styles/topproducts.css';
import { Button, Card, CardActionArea,Grid, Stack, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import RatingComponent from '../ProductStore/RatingComponent';
import OutStock from '../asserts/OutStock.png';
const Bestseller = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const handleView = (id) => {
    window.open(`/ViewProduct/${id}`, '_blank');
  };
   
  const fetchItems = async () => {
    const response = await api.get(`/user/sort-items/${4}`);
    console.log(response);
    if (response.success) {
      setItems(response.items);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Grid className="Best-Seller-Container" sx={{display:'flex',flexDirection:'column'}}>
      <Grid sx={{height:{xs:'10vh',sm:"15vh",md:"10vh"}}}>
      <Typography variant="h6" className="lead" sx={{padding:"10px 5px"}}>
        Top Best Sellers For You ...!
      </Typography>
      </Grid>
      <Grid className="Best-seller-inner-card"  sx={{height:{xs:'auto',sm:'auto',md:'50vh',lg:'50vh'},gap:{xs:"60px",sm:"45px",md:"0px"}}}>
        {items.map((x) => (
          <Grid  className="item-card" key={x.id} sx={{width:{xs:'80%',sm:"15%",md:"15%"},marginTop:{xs:"50px"}}}>
            <img src={x.url} alt="" />
     <Card sx={{ height:{xs:"85%",sm:"90%",md:"90%",lg:'90%'}, width: '100%' }}>
    
    <Grid className="card-body class-body-text-container" sx={{display:'flex',flexDirection:'column'}}>
      <Grid sx={{height:"80px"}}>
      <Typography  variant="h6" className="card-title" sx={{fontFamily:'Comic Sans MS',marginTop:"20px"}}>
      { x.title.length > 25 ? `${x.title.slice(0, 25)}...` : x.title }
      </Typography>
      </Grid>   
      <Grid>
      {x.stock==0 ? (
                  <Grid>
                    <img style={{ width: '100px', height: '23px' }} src={OutStock} alt='$/' />
                  </Grid>
                ) : (
                  <Typography variant="body1" sx={{ fontFamily: "Tahoma", fontSize: '14px' }}>
                    From &#x20B9;<span style={{ fontSize: '1.3em', fontFamily: 'Tahoma' }}>{x.startingPrice}</span>
                  </Typography>
                )}
      </Grid>                
      <Grid>
        <RatingComponent rating={x.rating}/>
      </Grid>   
      <div className="buttons-container">
        <Stack spacing={1} direction="row"> {/* Decreased spacing from 2 to 1 */}
          <Button variant="outlined" onClick={() => handleView(x.id)}>
            <VisibilityIcon /> Explore
          </Button>
        </Stack>
      </div>
    </Grid>

</Card>

          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Bestseller;
