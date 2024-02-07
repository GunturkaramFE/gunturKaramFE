import '../styles/nav.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchFilter from '../reusableComponents/filter';
import logo from '../asserts/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import BasicTabs from './Tabs';
import { useDispatch, useSelector } from 'react-redux'; // Assuming you have shoppingData in redux state
import { parseShoppingData } from '../helpers/parser';
import Logout from './Logout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { clearShoppingData } from '../store/shoppingSlicer';

type Anchor = 'right';

const NavBar = () => {
  const [state, setState] = React.useState({ right: false });
  const [navData, setNavData] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isNewSliderOpen, setIsNewSliderOpen] = useState(false);
   const[SmLoginForm,SetSmLogin]=useState(false)
  const logoutRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();
  const shoppingData = useSelector((state) => state.shopping); // Assuming shoppingData is in redux state
  const dispatch= useDispatch()
  const handleLogout = (mode) => {
    setIsLogoutOpen(true);
  };
  const handleMobileLogout = () => {
    localStorage.removeItem('Auth');
    dispatch(clearShoppingData())
     setIsNewSliderOpen(!isNewSliderOpen);
  };

  const handleLogoutClose = () => {
    setIsLogoutOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      logoutRef.current &&
      !logoutRef.current.contains(event.target) &&
      !event.target.closest('.nav')
    ) {
      handleLogoutClose();
    }
  };
  const handleSmLogin=()=>{
    SetSmLogin(true)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setNavData(parseShoppingData(shoppingData));
  }, [shoppingData]);


  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  const toggleNewSlider = () => {
    setIsNewSliderOpen(!isNewSliderOpen);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'right' ? 450 : 'auto' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
    </Box>
  );
const handleSmFormBack=()=>{

  setIsNewSliderOpen(!isNewSliderOpen)  
  SetSmLogin(false);
}
  const handleBack = () => {
    if(SmLoginForm){
      SetSmLogin(false)
      setIsNewSliderOpen(false)
    }
    toggleDrawer('right', false)()
  };

  return (
    <Box className="nav">
      <Grid container>
        <Grid item xs={2} sm={3} sx={{ width: '100%', height: { xs: 'auto', sm: '17vh' }, display: 'flex', alignItems: { sm: "start" } }}>
          <img
            src={logo}
            alt=""
            style={{ width: { xs: "100%", sm: "70%" }, height: '100%', objectFit: 'contain' }}
          />
        </Grid>

        <Grid item sm={6} xs={8} className="filter-container" sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchFilter />
        </Grid>

        <Grid item xs={2} sm={3} className="carts" sx={{ display: 'flex', alignItems: 'center', justifyContent: "end",height: { xs: '6vh', sm: '17vh' } }}>
        <Drawer
                    anchor="right"
                    open={state.right}
                    onClose={toggleDrawer('right', false)}
                    style={{ width: '100%', height: 'auto' }}
                  >
                    {list('right')}
                    <Box style={{ width: '100%', height: '100%' }}>
                      <Box style={{ width: '100%', paddingLeft: '20px', height: '6%', display: 'flex', alignItems: 'end' }}>
                        <KeyboardBackspaceIcon onClick={handleBack} style={{ color: '#8B8589' }} />
                      </Box>
                      <Box style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center' }}>
                        <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
                      </Box>
                      <Box style={{ width: '100%', height: '74%', display: 'flex', justifyContent: 'center' }}>
                        <Box style={{ width: '80%', height: '100%' }}>
                          <BasicTabs closeDrawer={handleBack} />
                        </Box>
                      </Box>
                    </Box>
                  </Drawer>
          {isMobile ? (<>
            <IconButton color="inherit" onClick={toggleNewSlider}>
              <MenuIcon />
            </IconButton></>
          ) : (
            <>
              <Grid sx={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
                <Badge badgeContent={navData?.wishlist?.length} onClick={() => navigate('/WishlistProduct')} color="success">
                  <FavoriteBorderIcon color='grey' />
                </Badge>
                <Badge badgeContent={navData?.cart?.length} color="success">
                  <ShoppingCartIcon onClick={() => navigate('/viewcart')} />
                </Badge>
              </Grid>
              <Grid>
                <Box>
                  <Box style={{ position: 'relative' }}>
                    {navData?.isuser ? (<>
                      <PersonIcon onClick={handleLogout} /></>
                    ) : (
                      <a onClick={toggleDrawer('right', true)}>Log/Signup</a>
                    )}
                    <Box style={{ width: '100%', position: 'absolute', top: '150%', right: '550%' }}>
                      {isLogoutOpen && (
                        <Box ref={logoutRef}>
                          <Logout onLogout={handleLogoutClose} />
                        </Box>
                      )}
                    </Box>
                  </Box>
                  </Box>
              </Grid>
             
            </>
          )}
        </Grid>
      </Grid>
      {isMobile && (
  <Drawer
    anchor="right"
    open={isNewSliderOpen}
    onClose={toggleNewSlider}
    style={{ width: '100%', height: 'auto' }}
  >
    <Box style={{ width: '100%', height: '100%' }}>
      {SmLoginForm ? (
          <Box sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ width: '100%', paddingLeft: '20px', height: '6%', display: 'flex', alignItems: 'end' }}>
            <KeyboardBackspaceIcon onClick={handleSmFormBack} style={{ color: '#8B8589' }} />
          </Box>
          <Box sx={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
          </Box>
          <Box sx={{ width: '100%', height: '74%', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', height: '100%'}}>
              <BasicTabs closeDrawer={handleBack} />
            </Box>
          </Box>
        </Box>
      ) : (
        <>
        <Grid sx={{width:'300px'}}>
          <Grid sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',height:"100px"}}>
          <Avatar size='large' >N</Avatar>
          </Grid>
          <Grid onClick={() => navigate('/WishlistProduct')} color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',borderTop:'1px solid #DADFDE',borderBottom:'1px solid #DADFDE'}}>
            <FavoriteBorderIcon style={{color:'red'}} /> <Typography> Whislist  ({navData?.wishlist?.length})</Typography> 
          </Grid>
          <Grid onClick={() => navigate('/viewcart')}  color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',borderBottom:'1px solid #DADFDE'}}>
          <ShoppingCartIcon /> <Typography> AddtoCart  ({navData?.wishlist?.length})</Typography> 
          </Grid>
          {navData?.isuser ? (
            <>
              <Grid onClick={handleMobileLogout}  color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',marginTop:"667px",justifyContent:'center',alignItems:'center',backgroundColor:'#DADFDE'}}>
              <Button sx={{color:"white"}} >LOGOUT</Button>
              </Grid>
            </>
          ) : (
            <Grid  onClick={handleSmLogin} color="success" sx={{display:'flex',padding:"2px 0px",gap:'10px',justifyContent:'center',alignItems:'center',borderBottom:'1px solid #DADFDE'}}>
          Log/Signup
            </Grid>
          )}
          </Grid>
        </>
      )}
    </Box>
  </Drawer>
)}


    </Box>
  );
};

export default NavBar;
