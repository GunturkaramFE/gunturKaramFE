import { Box, Card, CircularProgress, Grid, IconButton, TextField, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../navComponents/mainNav'
import Footer from '../components/footer';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useParams } from 'react-router-dom';
import api from '../api';
import { setOrderDetails } from '../store/orderDetailsSlicer';

const OrderStatus = () => {
const {id} = useParams();
const[data,setData]=useState()
const[orderdetails,setOrderDetails]=useState()
const[loading,setLoading]=useState(false)
const [isEditable, setEditable] = useState(false);
const [address, setAddress] = useState({});
const[activeStep,setActiveStep]=useState(0)
const [steps,setSteps]=useState([
  { label: 'Order Placed', date: '' },
  { label: 'Order Confirmed', date: '' },
  { label: 'Shipped', date: '' },
  { label: 'Out For Delivery', date: '' },
  { label: 'Delivered', date: '' },
  
])

const FetchData=async()=>{  
  try {
    setLoading(true)
    const response = await api.post('/user/getorder',{ OrderID:id })
    if(response.success){
      setData(response.orders[0])
      setAddress(JSON.parse(response.orders[0].ShippingAddress))
      setOrderDetails(JSON.parse(response.orders[0].orderDetails))
    }
  console.log(JSON.parse(response.orders[0].orderDetails))

  } catch (error) {
    
  }finally{
    setLoading(false)
  }


}
useEffect(()=>{
FetchData()
},[])
useEffect(() => {
  if (orderdetails) {
    const updatedSteps = steps.map((step, index) => {
      if (index < orderdetails.length) {
        const formattedDateTime = new Date(orderdetails[index].date).toLocaleString();
        return { ...step, date: formattedDateTime };
      } else {
        return { ...step, date: '' };
      }
    });
    setSteps(updatedSteps);
    setActiveStep(orderdetails.length - 1);
  }
}, [orderdetails]);




  
    const handleEditClick = () => {
      setEditable(!isEditable);
    };
    const handleSaveClick = () => {
        // Save the data or perform any other necessary actions
        setEditable(false);
    };

    const handleInputChange = (e) => {
      setAddress({
        ...address,
        [e.target.name]: e.target.value,
      });
    };
  
    const defaultData = {
        id: 1,
        title: 'Product Title',
        url: 'https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-pickle-jar-png-image_6976662.png',
        startingPrice: '$19.99',
        stock: 50,
        pricelist: '[{"price": "19.99", "quantity": "10"}, {"price": "15.99", "quantity": "20"}]',
        rating: 4,
      };
    
   
      
      
  return (
    <>
     <NavBar/>
      {loading?  <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress/>
        </div>:<Grid sx={{width:"100%",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',gap:'20px',marginTop:"20px"}}>
       <Card sx={{ width: '80%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <Grid>
                <Typography sx={{ fontWeight: 'bold',marginBottom:'10px' }}>Delivery Address</Typography>
                {isEditable? (
                    <Grid>
                        <TextField
                            name="name"
                            label="Name"
                            value={address.name}
                            onChange={handleInputChange}
                            fullWidth
                            sx={{ fontSize: '14px', fontWeight: 'bold', mb: 2 }}
                        />
                        <TextField
                            name="address"
                            label="Address"
                            value={address.address}
                            onChange={handleInputChange}
                            multiline
                            fullWidth
                            sx={{ width: '100%', fontSize: { xs: '12px', sm: '15px' }, mb: 2 }}
                        />
                        <Grid sx={{ display: 'flex', gap: '10px', alignItems: 'center',justifyContent:'space-between',width:'100%' }}>
                            <TextField
                                name="phoneNumber"
                                label="Phone Number"
                                value={address.phoneNumber}
                                onChange={handleInputChange}
                                sx={{ fontWeight: 'bold', fontSize: '14px', mb: 2 }}
                            />
                            <IconButton onClick={handleSaveClick} sx={{ ml: 1 }}>
                                <SaveIcon style={{color:'green'}} />
                            </IconButton>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', mb: 2 }}>{address.name}</Typography>
                        <Typography sx={{ width:{xs:"100%",sm:'50%'}, fontSize: { xs: '12px', sm: '15px', flexWrap: 'wrap' }, mb: 2 }}>
    {`Address: ${address.housenumber}, ${address.street}, ${address.city}, ${address.state}, ${address.country}, pincode: ${address.pincode}`}
</Typography>

                        <Grid sx={{ display: 'flex', gap: '10px', alignItems: 'center',justifyContent:'space-between'  }}>
                            <Grid sx={{display:'flex'}}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', mb: 2 }}>Phone Number :</Typography>
                            <Typography sx={{ fontSize: '15px', mb: 2 }}> {address.mobile}</Typography>
                            </Grid>
                            <IconButton onClick={handleEditClick}>
                                <EditIcon style={{color:'green'}}  />
                            </IconButton>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Card>
        <Grid sx={{width:'80%'}}>
        <Card
        key={defaultData.id} 
        sx={{ width: '100%', height: {xs:'auto',sm:'30vh'},  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',display:'flex',justifyContent:'center' }}
      >
        <Grid container sm={12}>
          
          <Grid sm={10} xs={12} sx={{display:'flex',flexDirection:{xs:'column',sm:'row'},gap:{xs:"10px",sm:"0px"}  }}  >
      <Grid xs={12} item sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%',flexWrap:'wrap' }}>
        <Stepper  activeStep={activeStep} alternativeLabel style={{ width: '100%' }}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Grid sx={{ textAlign: 'center' }}>
                  <Grid sx={{ fontSize: {xs:"0.8em",sm:'1.3em'} }}>{step.label}</Grid>
                  <Grid sx={{ fontSize: '0.8em', color: '#666', marginTop: '8px' }}>{step.date}</Grid>
                </Grid>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Grid>         
         </Grid>
        </Grid>
      </Card>
      </Grid>
      </Grid>}
      <Footer style={{marginTop:"0"}}/>
    </>
  )
}

export default OrderStatus
