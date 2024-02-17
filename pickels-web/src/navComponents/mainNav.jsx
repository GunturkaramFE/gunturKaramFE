import '../styles/nav.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Grid from '@mui/material/Grid';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
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
import LocalMallIcon from '@mui/icons-material/LocalMall';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { clearShoppingData } from '../store/shoppingSlicer';
import {drawerClose, drawerToggle, draweropen} from '../store/lsDrawer';
import { PowerOffOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
  const shoppingData = useSelector((state) => state.shopping); 
  const user = useSelector((state) => state.user);
  const isOpen = useSelector((state) => state.drawer.isOpen)
   const dispatch= useDispatch()
  const handleLogout = (mode) => {
    setIsLogoutOpen(true);
  };
  const handleMobileLogout = () => {
    localStorage.removeItem('Auth');
    dispatch(clearShoppingData())
    dispatch(drawerClose())
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

  const handleNavigation = (route) => {
    if (user.id) {
        navigate(route);
    } else {    
      handleSmLogin(true)   
      toggleDrawer('right', true)
        }
};

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    if(open){
      dispatch(draweropen())
    }else{
      dispatch(drawerClose())
    }
    setState({ ...state, [anchor]: open });
  };

  const toggleNewSlider = () => {
    setIsNewSliderOpen(!isNewSliderOpen);
  };
  useEffect(()=>{
    if(isOpen){  
      if(isMobile){
         setIsNewSliderOpen(!isNewSliderOpen);
      SetSmLogin(true)
      }else{
        setState({ ...state, ['right']: true });
      }
    
     
    }
   },[isOpen])

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'right' ? 450 : 'auto' }}
      role="presentation"
      onClick={()=>{
        
        toggleDrawer(anchor, false)}}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
    </Box>
  );
const handleSmFormBack=()=>{
  setIsNewSliderOpen(!isNewSliderOpen)  
  SetSmLogin(false);
  dispatch(drawerClose())
}
  const handleBack = () => {
    if(SmLoginForm){
      dispatch(drawerClose())
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
                <Badge badgeContent={navData?.wishlist?.length} onClick={() =>
                   {
                   user.id?navigate('/WishlistProduct'):dispatch(draweropen()) 
                  }
                   
                   } color="success">
                  <FavoriteBorderIcon color='grey' />
                </Badge>
                 <Badge badgeContent={navData?.cart?.length} color="success">
                  <ShoppingCartIcon onClick={() => {
                     user.id?navigate('/viewcart'):dispatch(draweropen())                 
                  
                }
                  }
                     />
                </Badge>
              </Grid>
              <Grid>
                <Box>
                  <Box style={{ position: 'relative' }}>
                    {navData?.isuser ? (<>
                      <PersonIcon onClick={handleLogout} /></>
                    ) : (
                      <Grid sx={{padding:"5px",borderRadius:"3px"}}>
                      <a onClick={toggleDrawer('right', true)} style={{display:'flex',cursor:'pointer',justifyContent:'center',alignItems:'center'}}>
                      <Typography sx={{fontSize:'15px',fontWeight:'bold'}}>Login</Typography>
                      <LoginIcon style={{marginLeft:'5px'}}/>
                      </a>
                      </Grid>
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
    onClose={()=>{
      toggleNewSlider()
      dispatch(drawerClose())
    }}
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
      <Avatar size="large">
      {user.name ? user.name.charAt(0) : 'U'}
     </Avatar>
          </Grid>
          <Grid  onClick={()=>{
              navigate('/')
              handleSmFormBack()
          } } color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',borderTop:'1px solid #DADFDE',borderBottom:'1px solid #DADFDE'}}>
          <HomeIcon style={{color:'grey'}} /> <Typography> Home </Typography> 
          </Grid>
          <Grid onClick={() => handleNavigation('/view-profile')}  color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',borderBottom:'1px solid #DADFDE'}}>
          <AccountCircleIcon style={{color:'grey'}} /> <Typography> My Profile </Typography> 
          </Grid>
          <Grid onClick={() => handleNavigation('/MyOrders')}  color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',borderBottom:'1px solid #DADFDE'}}>
          <LocalMallIcon style={{color:'grey'}} /> <Typography> My Orders</Typography> 
          </Grid>
          <Grid onClick={() => handleNavigation('/WishlistProduct')} color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',borderBottom:'1px solid #DADFDE'}}>
            <FavoriteBorderIcon style={{color:'red'}} /> <Typography> Whislist  ({navData?.wishlist?.length})</Typography> 
          </Grid>
          <Grid onClick={() => handleNavigation('/viewcart')}  color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',borderBottom:'1px solid #DADFDE'}}>
          <ShoppingCartIcon style={{color:'grey'}} /> <Typography> AddtoCart  ({navData?.wishlist?.length})</Typography> 
          </Grid>
         
          
          {navData?.isuser ? (
            <>
              <Grid onClick={handleMobileLogout}  color="success" sx={{display:'flex',padding:"10px 10px",gap:'10px',marginTop:"530px",justifyContent:'center',alignItems:'center',backgroundColor:'#32CD32'}}>
              <Button sx={{color:"white"}} > LOGOUT</Button><ExitToAppIcon style={{color:'white'}}/> 
              </Grid>
            </>
          ) : (
            <Grid  onClick={handleSmLogin} color="success" sx={{display:'flex',padding:"2px 0px",gap:'10px',justifyContent:'center',alignItems:'center',borderBottom:'1px solid #DADFDE'}}>
             <Grid sx={{padding:"5px",borderRadius:"3px"}}>
                      <a onClick={toggleDrawer('right', true)} style={{display:'flex',cursor:'pointer',justifyContent:'center',alignItems:'center'}}>
                      <Typography sx={{fontSize:'15px',fontWeight:'bold'}}>Login</Typography>
                      <LoginIcon style={{marginLeft:'5px'}}/>
                      </a>
             </Grid>
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
