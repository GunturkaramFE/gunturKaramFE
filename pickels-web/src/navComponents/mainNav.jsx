import '../styles/nav.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchFilter from '../reusableComponents/filter';
import logo from '../asserts/logo.png';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import BasicTabs from './Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { parseShoppingData } from '../helpers/parser';
import Logout from './Logout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useMediaQuery } from '@mui/material';

type Anchor = 'right';

const NavBar = () => {
  const [state, setState] = React.useState({ right: false });
  const [navData, setNavData] = useState(false);
  const shoppingData = useSelector((state) => state.shopping);
  const user = useSelector((state) => state.user);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const logoutRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const handleDrawerToggle = (open) => () => {
    setIsDrawerOpen(open);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogoutOpen(true);
  };

  const handleLogoutClose = () => {
    setIsLogoutOpen(false);
  };

  const HandleBack = () => {
    toggleDrawer('right', false)();
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
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box className="nav" >
      <Grid container>
      <Grid item xs={2}  sm={3} sx={{ width: '100%',height: { xs: 'auto', sm: '17vh' },display: 'flex',alignItems:{sm:"start"}
  }}
>
  <img
    src={logo}
    alt=""
    style={{ width:{xs:"100%",sm:"70%"}, height: '100%', objectFit: 'contain' }}
  />
</Grid>


        <Grid item sm={6} xs={8} className="filter-container" sx={{display:'flex',alignItems:'center'}}>
          <SearchFilter />
        </Grid>
      {isMobile ? (
        <Grid xs={2}>
       <>
      <IconButton sx={{ marginLeft: '25px', marginTop: '4px' }} onClick={handleDrawerToggle(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right"    open={isDrawerOpen} onClose={handleDrawerToggle(false)}>
      <Grid item sx={{ display: 'flex',flexDirection:'column' }}>
        <Grid sx={{ display: 'flex', justifyContent: 'space-around', flexDirection:"column", width: '100%' }}>
          <Badge sx={{ width: 250 ,padding:'10px 0px'}} badgeContent={navData?.wishlist?.length} color="success" >
            <FavoriteBorderIcon sx={{margin:'0px 10px'}} color='grey' /> whislist(0)
          </Badge>
          <Badge  sx={{ width: 250 ,padding:'10px 0px'}} color="success">
            <NotificationsNoneIcon sx={{margin:'0px 10px'}} color='grey' /> Trending
          </Badge>
          <Badge sx={{ width: 250 ,padding:'10px 0px'}} onClick={() => navigate('/viewcart')} badgeContent={navData?.cart?.length} color="success">
            <ShoppingCartIcon sx={{margin:'0px 10px'}}  />AddToCart
          </Badge>
        </Grid>
        <Grid >
        <Box sx={{ width: 250 ,padding:'10px 0px'}}>
          <Box sx={{margin:'0px 10px',color:"red"}} >
            {navData?.isuser ? (
              <PersonIcon onClick={handleLogout} />
            ) : (
            
              !isMobile && <a onClick={toggleDrawer('right', true)} style={{color:"red"}}>Log/Signup</a>
            )}
            <Box style={{ width: '100%', position: 'absolute', top: '150%', right: '550%' }}>
              {isLogoutOpen && (
                <Box ref={logoutRef}>
                  <Logout onLogout={handleLogoutClose} />
                </Box>
              )}
            </Box>
          </Box>
          <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer('right', false)}
            style={{ width: '100%', height: 'auto' }}
          >
            {list('right')}

            <Box style={{ width: '100%', height: '100%' }}>
              <Box style={{ width: '100%', paddingLeft: '20px', height: '6%', display: 'flex', alignItems: 'end' }}>
                <KeyboardBackspaceIcon onClick={HandleBack} style={{ color: '#8B8589' }} />
              </Box>
              <Box style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center' }}>
                <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
              </Box>
              <Box style={{ width: '100%', height: '74%', display: 'flex', justifyContent: 'center' }}>
                <Box style={{ width: '80%', height: '100%' }}>
                  <BasicTabs closeDrawer={HandleBack} />
                </Box>
              </Box>
             </Box>
           </Drawer>
          </Box>
        </Grid>
      </Grid>
      </Drawer>
      </>
        </Grid>
      ) : (
       <Grid item sm={3}  className="carts" sx={{ display: 'flex', alignItems: 'center', justifyContent: "end", height: { xs: '6vh', sm: '17vh' } }}>
        <Grid sx={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>

          <Badge badgeContent={navData?.wishlist?.length} onClick={()=>navigate('/WishlistProduct')} color="success">
            <FavoriteBorderIcon color='grey' />
          </Badge>
             <Badge badgeContent={navData?.cart?.length} color="success">
            <ShoppingCartIcon onClick={() => navigate('/viewcart')} />

          </Badge>
        </Grid>
        <Grid >
        <Box>
          <Box style={{ position: 'relative' }}>
            {navData?.isuser ? (<>Hello {user.name}
              <PersonIcon onClick={handleLogout} /></>
            ) : (
              // Render nothing here for mobile, as MenuIcon is already shown
              !isMobile && <a onClick={toggleDrawer('right', true)}>Log/Signup</a>
            )}
            <Box style={{ width: '100%', position: 'absolute', top: '150%', right: '550%' }}>
              {isLogoutOpen && (
                <Box ref={logoutRef}>
                  <Logout onLogout={handleLogoutClose} />
                </Box>
              )}
            </Box>
          </Box>
          <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer('right', false)}
            style={{ width: '100%', height: 'auto' }}
          >
            {list('right')}

            <Box style={{ width: '100%', height: '100%' }}>
              <Box style={{ width: '100%', paddingLeft: '20px', height: '6%', display: 'flex', alignItems: 'end' }}>
                <KeyboardBackspaceIcon onClick={HandleBack} style={{ color: '#8B8589' }} />
              </Box>
              <Box style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center' }}>
                <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
              </Box>
              <Box style={{ width: '100%', height: '74%', display: 'flex', justifyContent: 'center' }}>
                <Box style={{ width: '80%', height: '100%' }}>
                  <BasicTabs closeDrawer={HandleBack} />
                </Box>
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Grid>
    </Grid>
      )}
     
      </Grid>
    </Box>
  );
};

export default NavBar;
