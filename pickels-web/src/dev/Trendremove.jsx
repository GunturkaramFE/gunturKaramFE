import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Rating,
  IconButton,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DeletePop from './DeletePop';
import PopupForm from '../Pop-up/PopupForm';

const Trendremove = ({ product, handleDelete, handledeletePopup }) => {
  const [deleteTrend,setDeleteTrend]=useState(false)
 const handledeleteTrend=()=>{
  setDeleteTrend(!deleteTrend)
 }

  // Default data for the card
  const defaultData = {
    id: 1,
    title: 'Default Product',
    url: 'https://via.placeholder.com/150',
    startingPrice: '$19.99',
    stock: 100,
    pricelist: '[{"price":19.99,"quantity":1},{"price":29.99,"quantity":2}]',
    rating: 4,
  };
 
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card
        key={defaultData.id}
        sx={{ width: '100%', marginBottom: 2, padding: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box style={{ height: '25vh' }}>
                <img
                  src={defaultData.url}
                  alt={defaultData.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} style={{ paddingLeft: '15px',display:"flex" }}>
              <Grid sx={{width:"80%"}}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold', fontSize: '16px',marginTop:'3px' }}>
                {defaultData.title}
              </Typography>
              <Typography variant="body2" style={{ fontSize: '14px', color: '#666',marginTop:'3px'  }}>
                Price: {defaultData.startingPrice}
              </Typography>
              <Typography variant="body2" style={{ fontSize: '14px', color: '#666',marginTop:'3px'  }}>
                Available Stock: {defaultData.stock}
              </Typography>
              <select
                aria-label="Small select example"
                style={{ border: "1px solid #0d6efd", borderRadius: "3px",marginTop:'3px'  }}
              >
                {JSON.parse(defaultData.pricelist).map((x, y) => (
                  <option key={y} value={y}>
                    {x.price + ' --- ' + x.quantity}
                  </option>
                ))}
              </select>
              <Box component="fieldset" borderColor="transparent" sx={{marginTop:'5px' }}>
                <Rating
                  name={`rating-${defaultData.id}`}
                  value={defaultData.rating}
                  readOnly
                />
              </Box>
              </Grid>
            
              <Grid container justifyContent="flex-end" marginTop="1rem" sx={{width:"20%", display:'flex',alignItems:"center"}}>
                <Tooltip title="Delete">
                  <IconButton onClick={handledeleteTrend} style={{ color: '#ff4d4f' ,height:'40px'}}>
                    <DeleteIcon />
                    <PopupForm ispop={deleteTrend} formData={<DeletePop onConfirm={handledeleteTrend} onCancel={handledeleteTrend} />} fun={handledeleteTrend} width='400px' height='150px'/>
                  </IconButton>
                </Tooltip>

              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Trendremove;
