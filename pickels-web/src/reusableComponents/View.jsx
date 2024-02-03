import React, { useEffect, useState } from 'react';
import NavBar from '../navComponents/mainNav';
import { Grid, Container, Typography, Button, Select, MenuItem, Paper, Box, CircularProgress } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RatingComponent from '../ProductStore/RatingComponent';
import Socailmedia from './Socailmedia';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import api from '../api';
import { parseProduct, parseShoppingData } from '../helpers/parser';
import { green } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux';
import { setShoppingData } from '../store/shoppingSlicer';
import {updateUserWishList} from '../helpers/AddToWishlist'
import Footer from '../components/footer';
const View = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const[isWishlist,setIsWishlist]= useState(false)
  const [selectedQuantity, setSelectedQuantity] = useState();
  const [cartLoading, setCartLoading] = useState(false)
  const [isadded, setisadded] = useState(false)
  const dispatch = useDispatch()
  const shoppingData = useSelector((state) => state.shopping);
  const checkProductInCart = async () => {
    let parsedData = await parseShoppingData(shoppingData)
    let filtered = parsedData?.cart.filter((x) => x.id == product.id)
    if (filtered.length) {
      let isSameCart = filtered.find((x) => JSON.stringify(x.selectedQuantity) == selectedQuantity)
      if (isSameCart) {
        setisadded(true)
      } else {

        setisadded(false)
      }
    } else {
      setisadded(false)
    }

    let isItemInWishlist=parsedData?.wishlist.find((x)=>x.id==product.id)  
    if(isItemInWishlist){
 setIsWishlist(true)
    }else{
 setIsWishlist(false)
    }
  }

  useEffect(() => {
    if (selectedQuantity) {
      const parsedQuantity = JSON.parse(selectedQuantity);
      const calculatedPrice = parsedQuantity.price * count;
      setPrice(calculatedPrice);
    }
    checkProductInCart()
  }, [selectedQuantity, count]);

  const { id } = useParams();
  const buttonSx = {
    ...(isadded && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const updateCart = async (data) => {
    setCartLoading(true)
    try {
      let response = await api.put('/user/updateUserShoppingList', { document: { cart: data } });
      if (response.success) {
        let obj = { ...shoppingData }
        obj.cart = data
        dispatch(setShoppingData(obj))

      }
    } catch (error) {

    } finally {
      setCartLoading(false)
      setisadded(true)
    }

  }
   const HandleAddToCart = async () => {
    let cartitem = {
      id: product.id,
      category: product.category,
      rating: product.rating,
      subCategory: product.subCategory,
      title: product.title,
      url: product.url,
      price: price,
      quantity: count,
      selectedQuantity: JSON.parse(selectedQuantity)
    }

    let parsedData = await parseShoppingData(shoppingData)
    cartitem.cartId = parsedData.cart.length + 1;
    let filtered = parsedData?.cart.filter((x) => x.id == cartitem.id)
    if (filtered.length) {
      let isSameCart = filtered.find((x) => x.selectedQuantity.price == cartitem.selectedQuantity.price)

      if (isSameCart == undefined) {
        let jsonobj = JSON.stringify([cartitem, ...parsedData.cart])

        let obj = { ...shoppingData }
        obj.cart = jsonobj
        await updateCart(jsonobj)

      }

    } else {
      let jsonobj = JSON.stringify([cartitem, ...parsedData.cart])
      let obj = { ...shoppingData }
      obj.cart = jsonobj
      await updateCart(jsonobj)

    }
  }
  useEffect(() => {
    if (Array.isArray(product?.pricelist) && product?.pricelist.length > 0) {
      
      setSelectedQuantity(JSON.stringify(product.pricelist[0]));
    }
    

  }, [product.pricelist, product]);
const HandleRemoveFromWhishList = async ()=>{
  let wishlist;
  let WishlistItems= JSON.parse(shoppingData.wishlist).filter((x)=>x.id!=product.id)
  wishlist=JSON.stringify(WishlistItems)
  await updateUserWishList(wishlist)
  window.location.reload();
}
  const HandleAddToWhishList =async () => {
    let wishlist;
    let WishlistItems= JSON.parse(shoppingData.wishlist)
    WishlistItems.push(product)
    wishlist=JSON.stringify(WishlistItems)
    await updateUserWishList(wishlist)     
      window.location.reload(); 
  }

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/user/get-items/${id}`);
      if (response.success) {
        setProduct(parseProduct(response.items));

      }
    } catch (error) {
      // Handle error if needed
    } finally {
      setLoading(false);
    }
  };

  const handleDecrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrementCount = () => {
    setCount(count + 1);
  };



  return (
    <>
      <NavBar />
      {loading ? (
        <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <Container maxWidth="lg">
          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6} style={{ padding: '20px' }}>
              <img src={product.url} alt='$/' sx={{ width: '100%', height: '100vh', maxWidth: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Typography sx={{fontFamily:'Verdana'}} variant="h4">{product.title}</Typography>
              <Typography variant="h5">
                <del style={{ color: 'red', marginRight: '5px', fontSize: "19px" }}>&#x20B9;{(price * 1.3).toFixed(2)}</del>&#x20B9;{price.toFixed(2)}

              </Typography>
              <div>
                <label style={{ marginRight: '10px', fontWeight: 'bold', fontSize: 14 }}>Weight :</label>
                <Select
                  style={{ width: '40%', height: '40px' }}
                  value={selectedQuantity || (product.pricelist && JSON.stringify(product.pricelist[0]))}
                  onChange={(e) => setSelectedQuantity(e.target.value)}
                >
                  {product.pricelist &&
                    product.pricelist.map((x, index) => (
                      <MenuItem key={index} value={JSON.stringify(x)}>
                        {`price: ${x.price} ---- quantity: ${x.quantity}`}
                      </MenuItem>
                    ))}
                </Select>
              </div>

              <Grid sx={{ width: '100%', display: 'flex', gap: '30px', flexDirection: ['column', 'row'] }}>
                <Grid>
                  <Grid sx={{ width: '140px', display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      sx={{ border: '1px solid lightgray', borderRadius: '4px', width: '35px', height: '35px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
                      onClick={handleDecrementCount}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Paper
                      elevation={0}
                      sx={{ border: '1px solid lightgray', width: '30%', textAlign: 'center', padding: '6px 0px', borderRight: 'none', borderLeft: 'none', borderRadius: '0px', fontSize: '14px' }}
                    >
                      {count}
                    </Paper>

                    <IconButton
                      sx={{ border: '1px solid lightgray', borderRadius: '4px', width: '35px', height: '35px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
                      onClick={handleIncrementCount}
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                </Grid> <Box sx={{ m: 1, position: 'relative' }}>
                  <Button
                    variant="contained"
                    sx={buttonSx}
                    disabled={cartLoading}
                    onClick={() => { !isadded && HandleAddToCart() }}
                  >
                    {isadded ? 'Added TO Cart' : "Add To Cart"}
                  </Button>
                  {cartLoading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: green[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                  )}
                </Box>
              </Grid>
             {!isWishlist?<div style={{ display: 'flex', width: '100%', gap: '10px' }}>
                <FavoriteBorderIcon style={{ color: 'red', cursor: 'pointer' }} onClick={HandleAddToWhishList} />
                <Typography sx={{ fontSize: 15 }}>Add to wishlist</Typography>
              </div>:
              <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
                <FavoriteIcon style={{ color: 'green', cursor: 'pointer' }} onClick={HandleRemoveFromWhishList} />
                <Typography sx={{ fontSize: 15 }}>Added to wishlist</Typography>
              </div>}
              <RatingComponent initialRating={product.rating} sx={{ margin: 0 }} />
              <hr />
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle1"><b>Product Code:  </b></Typography>
                  <Typography color="grey">{product.id}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle1"><b>Brand : </b></Typography>
                  <Typography color="grey">Guntur Karam</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle1"><b>Category : </b></Typography>
                  <Typography color="grey">{product.category}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle1"><b>sub Category : </b></Typography>
                  <Typography color="grey">{product.subCategory}</Typography>
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <Typography variant="subtitle1"><b>Share : </b></Typography>
                  <div style={{ width: '30%', '@media (max-width:600px)': { width: '100%' } }}>
                    <Socailmedia />
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
      <Footer/>
    </>
  );
};

export default View;
