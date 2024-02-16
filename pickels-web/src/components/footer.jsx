import React from 'react';
import { Typography, Grid, Box, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import '../styles/foot.css';

const Footer = () => {
  const containerStyle = {
    backgroundImage: `url('https://www.pikpng.com/pngl/m/176-1765669_5000-x-1358-0-farm-footer-png-clipart.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };
  
  
  return (
    <Grid container className="mt-5 w-100 h-auto"  style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
      
      <Grid item xs={12} sm={11} md={12} className="contact-container" sx={{paddingTop:'10px 0'}} >
        <Grid container sm={4} xs={5} sx={{paddingLeft:{xs:'10px',sm:'20px'},marginTop:'10px'}}>
        <Box>
          <Typography variant="h6" className="fw-bold text-white">
            GET IN TOUCH
          </Typography>
          <Typography variant="subtitle1" className="fw-semibold text-white">
            With Our Team
          </Typography>
        </Box>
        </Grid>
        <Grid container id="contact-details" xs={7}  sx={{marginTop:'10px'}}>
          <Grid item xs={12} sm={6}>
            <Box display="flex"  alignItems="center">
              <Box className="rounded-circle bg-white p-3">
                <PhoneIcon color="primary" />
              </Box>
              <Box>
                <Typography variant="h6" className="fw-bold text-white">
                  Call Us
                </Typography>
                <Typography variant="subtitle1" className="fw-semibold text-white">
                  +91 7339793979
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex"  alignItems="center">
              <Box className="rounded-circle bg-white p-3">
                <MailIcon color="primary" />
              </Box>
              <Box sx={{width:"70%"}}>
                <Typography variant="h6" className="fw-bold text-white">
                  Mail
                </Typography>
                <Typography
  variant="subtitle1"
  className="fw-semibold text-white"
  sx={{
    wordWrap: 'break-word',
    overflowWrap: 'break-word'
  }}
>
  subhashvarma@gmail.com
</Typography>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="black-line"></div>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={12}  className="foot-ter">
          <Grid container sm={11} xs={11} spacing={2} sx={{ justifyContent: 'space-evenly' }}>
          <Grid item xs={4} md={3}>
          <Box>
      <Typography variant="h6" className="fw-bold text-white">
        Policies
      </Typography>
      <ul className="footer-links list-unstyled">
        <li>
          <Typography variant="subtitle1" className="text-white policy-link">
            Privacy Policy
          </Typography>
        </li>
        <li>
          <Typography variant="subtitle1" className="text-white policy-link">
            Terms & Conditions
          </Typography>
        </li>
        <li>
          <Typography variant="subtitle1" className="text-white policy-link">
            Payment Options
          </Typography>
        </li>
        <li>
          <Typography variant="subtitle1" className="text-white policy-link">
            Delivery Options
          </Typography>
        </li>
        <li>
          <Typography variant="subtitle1" className="text-white policy-link">
            Cancellation Policy
          </Typography>
        </li>
      </ul>
    </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box>
              <Typography variant="h6" className="fw-bold text-white">
                Quick Links
              </Typography>
              <ul className="footer-links list-unstyled">
                <li>
                  <Typography variant="subtitle1" className="text-white policy-link">
                    Home
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1" className="text-white policy-link">
                    Items
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1" className="text-white policy-link">
                    Cart
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1" className="text-white policy-link">
                    Favorites
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1" className="text-white policy-link">
                    Profile
                  </Typography>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box>
              <Typography variant="h6" className="fw-bold text-white">
                Location
              </Typography>
              <Typography variant="subtitle1" className="d-flex align-items-center text-white policy-link">
                <RoomIcon fontSize="small" />
                Mounica Towers
              </Typography>
              <address className="text-white">
                <Typography variant="subtitle1 policy-link">kavuri hills, madhapur</Typography>
                <Typography variant="subtitle1">HYDERABAD, TELANGANA 500081</Typography>
                <Typography variant="subtitle1">India</Typography>
              </address>
            </Box>
          </Grid>
        <Box>
          <Typography variant="h6" className="fw-bold text-white">
            Subscribe
          </Typography>
          <div className="input-group mb-2 h-5">
            <input type="email" className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon2" />
            <button type="button" style={{ background: 'black', color: 'white', width: '60px' }}>
              Get
            </button>
          </div>
        </Box>
        </Grid>
       
      </Grid>

      <Grid item xs={12} className="outer-div pb-4 vh-20">
        <Box className="inner-div d-flex flex-column justify-content-center align-items-center">
          <Typography variant="h6" className="fw-bold text-white mb-0">
            FOLLOW US
          </Typography>
          <div className="social-icons mt-2">
      <IconButton href="#" className="btn btn-outline-light mx-1" style={{ color: 'white' }}>
        <WhatsAppIcon />
      </IconButton>
      <IconButton href="#" className="btn btn-outline-light mx-1" style={{ color: 'white' }}>
        <FacebookIcon />
      </IconButton>
      <IconButton href="https://www.instagram.com/sathyasoftechin?igsh=MWM3azNubWlwbjhobw==" className="btn btn-outline-light mx-1" style={{ color: 'white' }}>
        <InstagramIcon />
      </IconButton>
    </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
