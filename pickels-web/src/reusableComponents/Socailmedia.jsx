import { Grid } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, WhatsApp } from '@mui/icons-material';
const Socailmedia = () => {
  return (
    <>
        <Grid sx={{ width: '100%', display: 'flex', color: 'grey' }}>
      <a href="https://www.facebook.com">
        <FacebookIcon />
      </a>
      <a href="https://web.whatsapp.com">
        <WhatsApp />
      </a>
      <a href="https://www.instagram.com/sathyasoftechin?igsh=MWM3azNubWlwbjhobw==">
        <Instagram />
      </a>
    </Grid>
    </>
  )
}

export default Socailmedia
