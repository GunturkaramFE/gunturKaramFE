import { Grid, Typography } from '@mui/material'
import React from 'react'

const Alertpage = ({ navigateToHomePage }) => {
  return (
    <>
      <Grid sx={{width:'100%',height:"100vh",display:'flex',justifyContent:'center',alignItems:'center'}}>
       <Grid sx={{height:'60%',width:'50%'}}>
         <Grid sx={{height:'50%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
         <img src='https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg' alt='/$' style={{objectFit:'contain',width:"50%",height:'50%'}}/>
         </Grid>
         <Grid sx={{height:'auto',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'Tahoma'}}><Typography sx={{fontFamily:"Tahoma",fontSize:{xs:"24px",sm:"35px",md:'35px',lg:"44px"}}}>Page Not Found !!</Typography></Grid>
         <Grid sx={{height:'20%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'Tahoma',cursor:'pointer'}}>
            <u style={{color:'blue'}} onClick={navigateToHomePage} >Click on this Link to Navigate</u>
         </Grid>
       </Grid>
      </Grid>
    </>
  )
}

export default Alertpage
