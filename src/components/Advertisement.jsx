import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { useNavigate } from 'react-router-dom';
const Advertisement = () => {
  const navigate=useNavigate() 
  return (
    <>
      <Grid sx={{width:"100%",height:{xs:"auto",sm:'83vh',md:"83vh",lg:'83vh'},backgroundColor:'#cceee4',paddingBottom:{xs:"20px",sm:"0px",md:"0px",lg:"0px"}}}>
       <Grid sx={{width:"100%",height:'60%',display:'flex',flexDirection:{xs:"column",sm:'row',md:'row',lg:'row'},alignItems:'center'}}>
            <Grid sx={{width:"40%",height:'90%',display:'flex',alignItems:'center'}}>
            <img style={{height:"200px",objectFit:'contain',width:'100%'}} src='https://www.bigbasket.com/media/uploads/p/xxl/40178290_4-delight-foods-andhra-special-avakayamango-pickle.jpg' alt='$/'/>
            </Grid>
             <Grid sx={{width:{xs:"100%",sm:'70%',md:'60%',lg:"60%"},height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Grid sx={{width:"90%",height:'90%',display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                <Grid sx={{width:'100%'}}>
                <Typography sx={{fontSize:{xs:'27px',sm:"40px",md:"45px",lg:'45px'},fontWeight:'bold',fontFamily:'Arial Black'}}>Tangy ,Tasty ,Tartness !</Typography>
                </Grid>
                <Grid sx={{width:'100%'}}>
                <Typography sx={{fontSize:"19px",fontFamily:'Tahoma'}}>Tangy Temptations: Together, We Conquer the Pickle Paradise!</Typography>
                </Grid>
                <Grid sx={{width:'100%'}}>
                <Typography sx={{fontSize:"14px",fontFamily:'Verdana'}}>Craving a pickle adventure that guarantees flavor-filled results? Reach out to us today and let PicklePals lead the way to your tangy triumph!</Typography>
                </Grid>
                <Grid>
                <Button   onClick={()=>{navigate('/Knowmore')}} sx={{width:{xs:"50%",sm:'60%',md:'30%',lg:'30%'},marginTop:{xs:"10px",sm:'10px',md:"0px",lg:'0px'},borderRadius:'22px',backgroundColor:'#4dc2a0',fontWeight:'bold'}} variant="contained">Know More ! </Button>
                </Grid>
                </Grid>
            </Grid>
       </Grid>
       <Grid sx={{width:"100%",height:'40%',display:"flex",justifyContent:'center',alignItems:'center',marginTop:{xs:'15px',sm:'20px',md:'0px',lg:'0px'}}}>
        <Grid sx={{width:{xs:"95%",sm:'95%',md:"80%",lg:'80%'},fontWeight:'bold',height:"100%",display:'flex',justifyContent:'space-evenly',alignItems:'start'}}>
 <Card  sx={{ width: {xs:"23%",sm:'24%',md:"20%",lg:'20%'}, height: {xs:"100px",sm:'75%',md:"75%",lg:'75%'}, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: "column", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  <Grid sx={{ height: '75%', width: '100%'}}>
    <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='https://static.vecteezy.com/system/resources/thumbnails/003/678/261/small/quality-badge-icon-design-medal-and-ribbon-illustration-free-vector.jpg' alt='/' />
  </Grid>
  <Grid sx={{height:"30%",width:'100%',display:'flex',justifyContent:'center',alignItems:'start'}}>
  <Typography variant="h6" sx={{fontSize:{xs:'12px',sm:"18px",md:'18px',lg:'18px'}}} >
    Quality Product
  </Typography>
  </Grid>
</Card>

<Card sx={{  width: {xs:"23%",sm:'24%',md:"20%",lg:'20%'}, height: {xs:"100px",sm:'75%',md:"75%",lg:'75%'}, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: "column", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  <Grid sx={{ height: '75%', width: '100%'}}>
    <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='https://static.vecteezy.com/system/resources/thumbnails/014/856/628/small/customer-experience-icon-client-satisfaction-symbol-customer-relationship-management-concept-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-vector.jpg' alt='/' />
  </Grid>
  <Grid sx={{height:"30%",width:'100%',display:'flex',justifyContent:'center',alignItems:'start'}}>
  <Typography variant="h6"  sx={{fontSize:{xs:'12px',sm:"18px",md:'18px',lg:'18px'}}}  >
    More Clients 
  </Typography>
  </Grid>
  
</Card>
<Card sx={{  width: {xs:"23%",sm:'24%',md:"20%",lg:'20%'}, height: {xs:"100px",sm:'75%',md:"75%",lg:'75%'}, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: "column", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  <Grid sx={{ height: '75%', width: '100%'}}>
    <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='https://thumbs.dreamstime.com/b/organic-food-logo-leaf-fork-knife-spoon-icon-abstract-vector-illustration-86291876.jpg' alt='/' />
  </Grid>
  <Grid sx={{height:"30%",width:'100%',display:'flex',justifyContent:'center',alignItems:'start'}}>
  <Typography variant="h6"  sx={{fontSize:{xs:'12px',sm:"18px",md:'18px',lg:'18px'}}} >
    Home Made
  </Typography>
  </Grid>
  
</Card>
<Card sx={{  width: {xs:"23%",sm:'24%',md:"20%",lg:'20%'}, height: {xs:"100px",sm:'75%',md:"75%",lg:'75%'}, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: "column", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
  <Grid sx={{ height: '75%', width: '100%'}}>
    <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='https://i.pinimg.com/236x/51/1d/d8/511dd83be235cc021a66d9ab7728ffa6.jpg' alt='/' />
  </Grid>
  <Grid sx={{height:"30%",width:'100%',display:'flex',justifyContent:'center',alignItems:'start'}}>
  <Typography variant="h6"  sx={{fontSize:{xs:'12px',sm:"18px",md:'18px',lg:'18px'}}} >
    Most Liked 
  </Typography>
  </Grid>
  
</Card>
        </Grid>
       </Grid>
      </Grid>
    </>
  )
}

export default Advertisement
