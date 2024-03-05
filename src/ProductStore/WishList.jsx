import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  ButtonBase,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import NavBar from '../navComponents/mainNav';
import { parseShoppingData } from '../helpers/parser';
import EmptyData from '../reusableComponents/EmptyData';
import { updateUserWishList } from '../helpers/AddToWishlist';

const Wishlist = () => {
  const shoppingData = useSelector((state) => state.shopping);
  const [parsedData, setParsedData] = useState({ wishlist: [] });

  useEffect(() => {
    setParsedData(parseShoppingData(shoppingData));
  }, [shoppingData]);
const HandleDelete=async(id,event)=>{
  event.stopPropagation();
  let wishlist;
let items= parsedData.wishlist.filter((x)=>x.id!==id)
wishlist=JSON.stringify(items)
await updateUserWishList(wishlist)
window.location.reload();

}
  return (
    <>
      {parsedData.wishlist.length ? (
        <div style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <NavBar />
          <Grid sx={{ height: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Grid variant="elevation" sx={{ width: { xs: '100%', sm: '15%' }, height: { xs: '4%', sm: '10%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '18px' }}>My Whislist {parsedData.wishlist.length}</Typography>
            </Grid>
            <Paper
              sx={{
                width: { xs: '100%', sm: '85%' },
                height: { xs: '100%', sm: '100%' },
                padding: '20px',
                overflowY: 'auto',
                gap: '10px'
              }}
            >
              {parsedData.wishlist.map((item) => (
                <ButtonBase key={item.id} sx={{ width: '100%' }} onClick={()=> window.open(`/ViewProduct/${item.id}`, '_blank')}>
                  <Card sx={{ width: '100%', height: { xs: 'auto', sm: '20%' }, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <Grid container sm={12}>
                      <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ height: '100%', width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={item.url} style={{ height: 'auto' }} alt='Product' />
                        </Box>
                      </Grid>
                      <Grid sm={10} xs={12} sx={{ display: 'flex' }}>
                        <Grid item xs={12} sm={8} style={{ paddingLeft: '15px', display: 'flex', alignItems: 'center' }}>
                          <Box>
                            <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" marginTop="1px">
                              {item.title}
                            </Typography>
                            <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                              Price: {item.pricelist[0].price}
                            </Typography>
                            <Typography variant="body2" fontSize="12px" color="#666" marginTop="1px">
                              Quantity: {item.pricelist[0].quantity}{item.pricelist[0].unit}
                            </Typography>
                            <Box component="fieldset" borderColor="transparent" sx={{ marginTop: '1px' }}>
                              <Rating
                                name={`rating-${item.id}`}
                                value={item.rating}
                                readOnly
                              />
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={2} sm={4} onClick={(event)=>HandleDelete(item.id,event)}style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                          <Tooltip title="Delete">
                            <IconButton style={{ color: '#ff4d4f', height: '40px' }}>
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </ButtonBase>
              ))}
            </Paper>
          </Grid>
        </div>
      ) : (
        <EmptyData text={"Your whishlist is currently empty"} buttonText={'Add more'} navlink={'/products'} />
      )}
    </>
  );
}

export default Wishlist;
