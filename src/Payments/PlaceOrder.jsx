import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Grid, TextField, CircularProgress } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import api from "../api";
import { fetchShoppingDataOnPageRefresh } from "../store/store";
import useRazorpay from "react-razorpay";
import logo from '../asserts/logo.png';
const PlaceOrder = () => {
  const selectOrderDetails = useSelector((state) => state.order.orderDetails);
  const shoppingData = useSelector((state) => state.shopping);
  const [Razorpay] = useRazorpay();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showBillingAddress, setShowBillingAddress] = useState(true);
  const [billingAddress,setBillingAddress]=useState({origin:'redux'})
  const [isticked,setIsTicked]=useState(true);
  const currentDate = new Date().toISOString();
  //let dispatch = useDispatch();
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    address: "",
    mobile: "",
    pincode: "",
    origin:"redux"
  });
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  useEffect(() => {
    if (!selectOrderDetails) {
      navigate(-1);
    } else {
      const parsedShippingAddress = JSON.parse(selectOrderDetails.ShippingAddress);
      const address = `${parsedShippingAddress.housenumber},${parsedShippingAddress.street},${parsedShippingAddress.village},${parsedShippingAddress.city},${parsedShippingAddress.state}`;
      setBillingAddress({
        ...parsedShippingAddress,
        address: address,
        origin: "redux"
      });
    }
  }, [selectOrderDetails, navigate]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAdd = () => {
    setShowBillingAddress(true)
    setIsTicked(false)
    setBillingAddress({...billingDetails, origin:"manual"})
  };

  const HandleProceed = async () => {
    console.log(JSON.parse(selectOrderDetails.items).map((x)=>x))
    let receiptId=uuidv4().slice(0, 12)
    if (selectedOption === "pay online") {
     var responseorder= await api.post('/user/makeorder',{ amount:1*100, currency:"INR" ,receiptId});   
      const options = {
        key: 'rzp_test_FrveltuTUTeWhr', 
        amount:1*100,
        //  selectOrderDetails.TotalAmount * 100, 
        currency: 'INR',
        name: 'Gunturu Karam',
        description: 'Purchase Description',
        image: logo,
        order_id: responseorder.id, 
        handler: function (response) {
          // On success
          console.log('order response',response);
          // Proceed with the order placement
         return 
        },
        prefill: {
          name: billingDetails.name,
          email: 'sathyasoftechin@gmail.com',
          contact: billingDetails.mobile
        },
        notes: {
          address: billingDetails.address
        },
        theme: {
          color: '#F37254'
        }
      };
      const paymentObject = new Razorpay(options);
      paymentObject.open();
    } 
    console.log('created ',responseorder)
  
    let orderData = {
      UserID: shoppingData.userId,
      OrderID : receiptId,
      BillingAddress: JSON.stringify(billingAddress),
      ShippingAddress: selectOrderDetails.ShippingAddress,
      Items: selectOrderDetails.items,
      PaymentMethod: selectedOption,
      OrderStatus: "Placed",
      TotalAmount: selectOrderDetails.TotalAmount,
      DiscountAmount: selectOrderDetails.DiscountAmount,
      PromoCode: selectOrderDetails.PromoCode,
      TransactionID: "TRANS123",
      IsDeleted: false,
      orderDetails: JSON.stringify([{ status: "Placed", date: currentDate }])
    };
    
    try {
      setIsLoading(true); 
      const response = await api.post('/user/create-order',{orderData});
      if (response.success) {
      const { OrderID } = response.order; 
      JSON.parse(selectOrderDetails.items).map(async(x)=>{
         await api.put('/user/get-items',{filter:{id:x.id}})
      })
     
        fetchShoppingDataOnPageRefresh()
        navigate(`/OrderStatus/${OrderID}`,{ replace: true });
      } else {      
        navigate('/viewcart');
      }
    } catch (error) {
      navigate('/viewcart');
    } finally {
      setIsLoading(false); 
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return Object.values(billingDetails).every(value => value.trim() !== '');
  };

  const handleCheckboxChange = (e) => {
    setIsTicked(!isticked);
    setShowBillingAddress(!showBillingAddress);
    const parsedShippingAddress = JSON.parse(selectOrderDetails.ShippingAddress);
    const address = `${parsedShippingAddress.housenumber},${parsedShippingAddress.street},${parsedShippingAddress.village},${parsedShippingAddress.city},${parsedShippingAddress.state}`;
    setBillingAddress({
      ...parsedShippingAddress,
      address: address,
      origin: "redux"
    });
  };
  
  useEffect(() => {
    if (billingAddress.origin === "redux" && showBillingAddress) {
      setIsTicked(true);
    } else {
      setIsTicked(false);
    }
  }, [showBillingAddress]);

  // Define options array
  const options = ["pay online", "Cash on Delivery"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        background: "#f0f0f0", // Matched background color
      }}
    >
      <Card style={{ maxWidth: 800, width: "100%", padding: 20,margin:"10px 0px" }}>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {/* Billing Address */}
              <div style={{ flex: "1 1 50%", minWidth: 0 }}>
                <Typography variant="h5" gutterBottom align="center">
                  Billing Address
                </Typography>
                <label style={{marginBottom:"10px"}}>
                  <input type="checkbox" checked={isticked} onChange={handleCheckboxChange} /> Billing Address same as Shipping Address
                </label>
                {showBillingAddress ? (
                  <Card style={{ maxWidth: '100%', width: 'auto' }}>
                    <CardContent style={{ wordWrap: 'break-word' }}>
                      <Typography gutterBottom>{billingAddress?.name}</Typography>
                      <Typography gutterBottom>Mobile: {billingAddress?.mobile}</Typography>
                      <Typography gutterBottom>Address: {billingAddress?.address}</Typography>
                      <Typography gutterBottom>Pincode: {billingAddress?.pincode}</Typography>
                    </CardContent>
                  </Card>
                ) : (
                  <form>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <TextField name="name" label="Name" fullWidth size="small" onChange={handleInputChange} />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField name="mobile" label="Mobile" fullWidth size="small" onChange={handleInputChange} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField name="address" label="Address" fullWidth size="small" onChange={handleInputChange} />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField name="pincode" label="Pincode" fullWidth size="small" onChange={handleInputChange} />
                      </Grid>
                    </Grid>
                    <Button
                      variant="contained"
                      color="success"
                      disabled={!isFormValid()}
                      style={{ marginTop: "10px" }}
                      onClick={handleAdd}
                    >
                      Add
                    </Button>
                  </form>
                )}
              </div>
              {/* Payment Options */}
              <div style={{ flex: "1 1 50%", minWidth: 0 }}>
                <Typography variant="h5" gutterBottom align="center">
                  Select Payment Option
                </Typography>
                <Grid container spacing={2}>
                  {options.map((option) => (
                    <Grid item xs={12} key={option}>
                      <Button
                        variant={selectedOption === option ? "contained" : "outlined"}
                        onClick={() => handleOptionSelect(option)}
                        fullWidth
                      >
                        {option}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                {/* Proceed Button with loading indicator */}
                <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={HandleProceed}
                    disabled={!selectedOption || isLoading} // Disable the button if no option is selected or if loading is in progress
                  >
                    {isLoading ? <CircularProgress size={24} color="inherit" /> : "Proceed"} {/* Show loading indicator if isLoading is true */}
                  </Button>
                </Grid>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceOrder;
