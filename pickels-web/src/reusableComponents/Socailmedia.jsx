import { Grid } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
const Socailmedia = () => {
  return (
    <>
       <Grid sx={{width:'100%',display:'flex',color:'grey'}}>
        <FacebookIcon />
        <TwitterIcon/>
        <PinterestIcon/>
        <LinkedInIcon/>
        <TelegramIcon/>
       </Grid>
    </>
  )
}

export default Socailmedia
