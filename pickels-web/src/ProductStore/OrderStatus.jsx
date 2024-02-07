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
import CloseIcon from '@mui/icons-material/Close';
const OrderStatus = () => {
const {id} = useParams();
const[data,setData]=useState()
const[orderdetails,setOrderDetails]=useState()
const[disable,setDisable]=useState(false)
const[loading,setLoading]=useState(false)
const [isEditable, setEditable] = useState(false);
const[activeStep,setActiveStep]=useState(0)
const [steps,setSteps]=useState([
  { label: 'Order Placed', date: '' },
  { label: 'Order Confirmed', date: '' },
  { label: 'Shipped', date: '' },
  { label: 'Out For Delivery', date: '' },
  { label: 'Delivered', date: '' },
  
])
const [Billingaddress, setBillingAddress] = useState({
  name:'',
  housenumber: '',
  street: '',
  village: '',
  landmark: '',
  city: '',
  state: '',
  pincode: '',
  country: '',
  mobile :""
});
const [address, setAddress] = useState({
  name:'',
  housenumber: '',
  street: '',
  village: '',
  landmark: '',
  city: '',
  state: '',
  pincode: '',
  country: '',
  mobile:""
});
const [error, setError] = useState({
  name:false,
  housenumber:false,
  street:false,
  village:false,
  landmark: false,
  city: false,
  state: false,
  pincode:false,
  country:false,
  mobile:false
});

const FetchData=async()=>{  
  try {
    setLoading(true)
    const response = await api.post('/user/getorder',{ OrderID:id })
    if(response.success){
      setData(response.orders[0])
      setAddress(JSON.parse(response.orders[0].ShippingAddress))
      setOrderDetails(JSON.parse(response.orders[0].orderDetails))
      setBillingAddress(JSON.parse(response.orders[0].BillingAddress))
    }
  console.log(response)
  console.log(JSON.parse(response.orders[0].ShippingAddress))
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
    const handleSaveClick = async () => {
      try {
        const response = await api.post('/user/order/update', {
          orderId: data.OrderID, 
          updatedData: {
            ShippingAddress: JSON.stringify(address)
          }
        });   
    
      } catch (error) {
        console.error("Error updating order:", error);
      }finally{
        window.location.reload();
      }
    };
    
    

    const handleInputChange = (e) => {
      setAddress({
        ...address,
        [e.target.name]: e.target.value,
      });
      let validate=['name', 'housenumber', 'street', 'village', 'landmark', 'city', 'state','mobile','country']
      for (const key in address) {
        if (validate.includes(key)) {
          if(address[key].length<3){        
            error[key]=true            
           }else{
            error[key]=false
           }
         
        }
      }
      const hasAnyError = Object.values(error).some(value => value === true);
         setDisable(!hasAnyError)

    };
      
  return (
    <>
     <NavBar/>
      {loading?  <div style={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress/>
        </div>:<Grid sx={{width:"100%",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',gap:'20px',marginTop:"20px"}}>
       <Grid sx={{width:"80%",display:'flex',justifyContent:"space-between",flexDirection:{xs:'column',sm:'row',md:'row'}}}>
       <Card sx={{ width: {xs:'100%',sm:"60%",md:"60%"}, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <Grid>
                <Typography sx={{ fontWeight: 'bold',marginBottom:'10px' }}>Delivery Address</Typography>
                {isEditable? (
                    <Grid>
                        <TextField
                            name="name"
                            label="Name"
                            value={address.name}
                            onChange={handleInputChange}
                            size="small"
                            error={error.name}
                            fullWidth
                            inputProps={{ minLength: 3 }}
                            sx={{ fontSize: '14px', fontWeight: 'bold', mb: 2 }}
                        />
          <Grid sx={{display:'flex',justifyContent:'space-between',flexDirection:{xs:"column",sm:"row",md:'row'}}}>
          <TextField
    name="housenumber" // Corrected field name
    label="H.no"
    value={address.housenumber}
    error={error.housenumber}
    size="small"
    onChange={handleInputChange}
    fullWidth
    sx={{ width: {xs:"100%",sm:"20%",md:'20%'}, fontSize: { xs: '12px', sm: '15px' }, mb: 2 }}
/>

        <TextField
          name="street"
          label="Street"
          value={address.street}
          size="small"
          error={error.street}
          onChange={handleInputChange}
          fullWidth
          sx={{  width: {xs:"100%",sm:"38%",md:'38%'}, fontSize: { xs: '12px', sm: '15px' }, mb: 2 }}
        />
         <TextField
          name="village"
          label="Village"
          value={address.village}
          error={error.village}
          onChange={handleInputChange}
          size="small"
          fullWidth
          sx={{  width: {xs:"100%",sm:"38%",md:'38%'}, fontSize: { xs: '12px', sm: '15px' }, mb: 2 }}
        />
          </Grid >
                     
          <Grid sx={{display:'flex',justifyContent:'space-between',flexDirection:{xs:"column",sm:"row",md:'row'}}}>
         <TextField
          name="landmark"
          label="Landmark"
          error={error.landmark}
          value={address.landmark}
          onChange={handleInputChange}
          size="small"

          fullWidth
          sx={{ width: {xs:"100%",sm:"20%",md:'20%'}, fontSize: { xs: '12px', sm: '15px' }, mb: 2 }}
        />
          <TextField
          name="city"
          label="City"
          value={address.city}
          error={error.city}
          onChange={handleInputChange}
          size="small"
          fullWidth
          sx={{  width: {xs:"100%",sm:"38%",md:'38%'}, fontSize: { xs: '12px', sm: '15px' }, mb: 2 }}
        />
        
         <TextField
          name="country"
          label="Country"
          value={address.country}
          error={error.country}
          onChange={handleInputChange}
          size="small"
          fullWidth
          sx={{  width: {xs:"100%",sm:"38%",md:'38%'}, fontSize: { xs: '12px', sm: '15px' }, mb: 2 }}
        />
        </Grid>
         <Grid sx={{ display: 'flex', gap: '10px', alignItems: 'center',justifyContent:'space-between',width:'100%' }}>
                         <TextField
    name="mobile" 
    label="Mobile"
    value={address.mobile}
    error={error.mobile}
    type="number"
    size="small"
    onChange={handleInputChange}
    sx={{ fontWeight: 'bold', fontSize: '14px', mb: 2 }}
/>
<IconButton onClick={()=>{
  setEditable(false)
}} sx={{ ml: 1 }}>
<CloseIcon style={{color:"red"}}/>
</IconButton>

<IconButton onClick={handleSaveClick} sx={{ ml: 1 }} disabled={!disable}>
<SaveIcon style={disable?{color:'green'}:{color:'grey'}} />
</IconButton>

                        </Grid>
          </Grid>
                ) : (
                    <Grid>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', mb: 2 }}>{address.name}</Typography>
                        <Typography sx={{ width:{xs:"100%",sm:'50%'}, fontSize: { xs: '12px', sm: '15px', flexWrap: 'wrap' }, mb: 2 }}>
                {`Address: ${address.housenumber}, ${address.village}, ${address.street}, ${address.city}, ${address.state}, ${address.country}, pincode: ${address.pincode}`}
                       </Typography>

                        <Grid sx={{ display: 'flex', gap: '10px', alignItems: 'center',justifyContent:'space-between'  }}>
                            <Grid sx={{display:'flex'}}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '14px', mb: 2 }}>Mobile :</Typography>
                            <Typography sx={{ fontSize: '15px', mb: 2,fontFamily:"Tahoma" }}> {address.mobile}</Typography>
                            </Grid>
                           {!steps[1].date&& <IconButton onClick={handleEditClick}>
                                <EditIcon style={{color:'green'}}  />
                            </IconButton>}
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Card>
        <Card sx={{width:{xs:"100%",sm:"38%",md:'38%'},boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',padding:'20px',height:{xs:"auto",sm:"160px",md:'160px'}}}>
          <Typography variant='h6'>Billing address</Typography>
          <Grid sx={{width:'90%',fontFamily:'Tahoma',display:'flex',justifyContent:'center',alignItems:'center',margin:"10px"}}>
          <Typography variant="body1">
        {Billingaddress.name}, Address: {Billingaddress.housenumber ? Billingaddress.housenumber + ',' : ''} {Billingaddress.street ? Billingaddress.street + ',' : ''} {Billingaddress.village ? Billingaddress.village + ',' : ''} {Billingaddress.landmark ? Billingaddress.landmark + ',' : ''} {Billingaddress.city ? Billingaddress.city + ',' : ''} {Billingaddress.state ? Billingaddress.state + ',' : ''} {Billingaddress.country ? Billingaddress.country + ',' : ''} pincode: {Billingaddress.pincode ? Billingaddress.pincode + ',' : ''} Mobile: {Billingaddress.mobile
}
      </Typography>
          </Grid>
        </Card>
        </Grid>
        <Grid sx={{width:'80%'}}>
        <Card
       
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
