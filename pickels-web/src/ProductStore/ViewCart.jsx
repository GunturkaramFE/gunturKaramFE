import React, { useEffect, useState } from 'react';
import PopupForm from '../Pop-up/PopupForm';
import AddressPopup from './AddressPopup';
import { useDispatch, useSelector } from 'react-redux';
import { parseShoppingData } from '../helpers/parser';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { setShoppingData } from '../store/shoppingSlicer';
import api from '../api';
import AdressCard from '../reusableComponents/addressCard';
import { Button, Card, CardContent, Grid, IconButton, Input, TextField, Typography } from '@mui/material';
import { List, ListItem} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';
import { X } from '@mui/icons-material';
import EmptyData from '../reusableComponents/EmptyData';
const ViewCart = () => {
  const [isaddressPopup, setIsAddressPopup] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCharges,setShippingCharges] = useState(0)
  const [discount,setdiscount]=useState(0)
  const [defaultAddress, setDefaultAddress] = useState(false);
  const [couponCode,setCouponCode]=useState('')
  const[isCouponVerified,setIsCouponVerified]=useState(false)
const[iscoupon,setIsCoupon]=useState(true)
  let dispatch = useDispatch();
const handleCoupouns=()=>{
  if(isCouponVerified){
setCouponCode('')
setIsCouponVerified(false)
setIsCoupon(true)
return
  }
   if(couponCode){
    setIsCouponVerified(true)
  }else{
    setIsCoupon(true)
  }

}

  const fetchAddress = async () => {
    const response = await api.get('/user/getShippingAddress');
    if (response.success) {
  
      const defaultAddress = response?.shippingAddresses?.find((x) => x.is_default) || response?.shippingAddresses?.[0];
      setDefaultAddress(defaultAddress);
    }
  };

  const shoppingData = useSelector((state) => state.shopping);
  const [parsedData, setParsedData] = useState();

  useEffect(() => {
    setTotalPrice(0);
    setParsedData(parseShoppingData(shoppingData));
    }, [shoppingData]);

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    let total = 0;
    if (parsedData?.cart) {
      parsedData?.cart.forEach((item) => {
        total += item.price*item.quantity;
      });
    }
    setTotalPrice(total);
  }, [parsedData]);

  const updateCart = async (data) => {
    try {
      let response = await api.put('/user/updateUserShoppingList', { document: { cart: data } });
    } catch (error) {
      console.log(error);
    }
  };

  const HandleChange = async (property, cartId) => {
    try {
      let modifiedCart = [...parsedData.cart]; // Create a copy of the cart array
  
      if (property === 'delete') {
        modifiedCart = modifiedCart.filter(item => item.cartId !== cartId);
        console.log(modifiedCart,'ca')
      } else if (property === 'Add' || property === '-') {
        modifiedCart = modifiedCart.map(item => {
          if (item.cartId === cartId) {
            let count = property === 'Add' ? item.quantity + 1 : item.quantity - 1;
            // Ensure quantity doesn't go below 1
            count = Math.max(count, 1);
            return { ...item, quantity: count }; // Update quantity for the specific item
          }
          return item;
        });
      }
  
      // Calculate total price based on modifiedCart
      let total = 0;
      modifiedCart.forEach(item => {
            total += item.price * item.quantity;
      });
  
      // Update state with the modified cart and total price
      setParsedData({ ...parsedData, cart: modifiedCart });
      setTotalPrice(total);
  
      // Update cart data in the backend
      await updateCart(JSON.stringify(modifiedCart));
  
      // Dispatch updated shopping data to Redux store
      dispatch(setShoppingData({ ...shoppingData, cart: modifiedCart }));
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleSelectAdressFromPopUp = (data) => {
    setDefaultAddress(data);
  };

  const HandleChangeAddress = () => {
    setIsAddressPopup(!isaddressPopup);
  };

  return (
    <>
      {parsedData?.cart.length ? (
       <div style={{ width: '100%', display: 'flex', flexDirection: 'column'}} id='main'>
            <div style={{ flex: 1,minWidth:"50%" }}>
            <div className="container py-3">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-11">
                  <div className="d-flex justify-content-center align-items-center">
                    <Typography variant="h6" gutterBottom>Product Summary</Typography></div>
              
                  <div style={{ overflowY: 'scroll', overflowX: 'hidden', width: '100%', height: '58vh' }}>
                    {parsedData.cart.map((item, index) =>(
                      
                      <Card key={index} className="mb-1">
                        <CardContent>
                          <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item xs={2}>
                              <img src={item.url} alt="Cotton T-shirt" style={{ width: '60px' }} />
                            </Grid>
                            <Grid item xs={5}>
                              <Typography variant="h6" gutterBottom>
                                {item.title}
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                <span className="text-muted">Item: </span>{item.subCategory}{' '}                            
                              </Typography>
                            </Grid>
                            <Grid item xs={3} className="d-flex" style={{ alignItems: 'center' }}>
                              <button
                                type="button"
                                className="btn btn-link px-2"
                                onClick={() => {
                                  if(item.quantity>1){
                                    HandleChange('-', item.cartId)
                                  }}                                 
                                  }
                                style={{ textDecoration: 'none' }}
                              >
                                <i className="fas fa-minus">-</i>
                              </button>
                              <input
                                id="form1"
                                min="1"
                                name="quantity"
                                value={item.quantity}
                                className="form-control form-control-sm"
                                style={{ height: '20px', width: '40px', textAlign: 'center' }}
                              />
                              <button
                                type="button"
                                className="btn btn-link px-2"
                                onClick={() =>  HandleChange('Add', item.cartId)}
                                style={{ textDecoration: 'none' }}
                              >
                                <i className="fas fa-plus">+</i>
                              </button>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-end">
                              <Typography variant="h6" gutterBottom>
                                &#x20B9;{item.price*item.quantity}
                              </Typography>
                            </Grid>
                            <Grid item xs={1} container justifyContent="center" alignItems="center">
                              <IconButton onClick={() => HandleChange('delete', item.cartId)} size="small">
                                <DeleteForeverIcon style={{ color: 'red' }} />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cart summary section */}
          <div style={{ flex: 1, marginTop: '20px',minWidth:"50%" }}>
            <div className="card" style={{ border: 'none' }}>       
               <div className="card shadow" style={{ width: '100%', margin: 'auto', minHeight: '32vh', height: 'auto', }}>
              <div style={{width:"100",display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white"}}>                 
                  <div style={{ width:"40%",display: 'flex',alignItems:"center", flexDirection:"column", marginLeft:"5%"}}>
                    <Typography variant="h6" gutterBottom>Shipping Address</Typography>
                    <AdressCard data={defaultAddress} pop={HandleChangeAddress}/>
                  </div>
              
      <div style={{ width: "100%", maxWidth: "40%", marginRight: "5%", display: 'flex', alignItems: "center", flexDirection: "column" }}>
        <Typography variant="h6" gutterBottom>
          Payment Summary
        </Typography>
        <List sx={{ width: '100%', minHeight: "230px", maxWidth: 360, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
  <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography>Sub-total</Typography>
    <Typography>₹{totalPrice}</Typography>
  </ListItem>
  <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography>Discount</Typography>
    <Typography>{discount}</Typography>
  </ListItem>
  <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography>Shipping charges</Typography>
    <Typography>{shippingCharges?`₹${shippingCharges}`:"Free"}</Typography>
  </ListItem>
  <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography>Grand Total</Typography>
    <Typography>{totalPrice-shippingCharges-discount}</Typography>
  </ListItem>
  <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between' }}>
  {iscoupon&&(!isCouponVerified) ? (
        <a onClick={()=>{setIsCoupon(false)}} style={{ font: 'menu' }}>Do You Have a Coupon?</a>)
       : (
        <div style={{marginTop:"15px"}}>
          <TextField
            variant="outlined"
            placeholder="Enter Coupon Code"
            size="small" 
            disabled={isCouponVerified}
            onChange={(e)=>setCouponCode(e.target.value)}           
          />
          <Button onClick={handleCoupouns}color="primary">
           {!isCouponVerified?"Apply":<CloseIcon/>}
          </Button>
        </div>
      )}
  </ListItem>
  {isCouponVerified&&<> <ListItem  disablePadding sx={{ display: 'flex',Color:'green',fontSize:"10px", justifyContent: 'space-between' }}>
    <Typography>$20000 Applied Successfully</Typography>
     </ListItem></>}
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: "30px", width: '100%' }}>
    <Button variant="outlined" color="success" size="small" disabled={!defaultAddress}>
      Checkout
    </Button>
  </div>
</List>

      </div>
        
                </div>
                <PopupForm ispop={isaddressPopup} selectAddress={handleSelectAdressFromPopUp} fun={HandleChangeAddress} width="90%" />
                <hr />             
              
              </div>
            
            </div>
          </div>
        </div>
      ) : (
        <><EmptyData text={"Your cart is currently empty"} buttonText={'Shop Now'} navlink={'/products'}/></>
      )}
    </>
  );
};

export default ViewCart;
