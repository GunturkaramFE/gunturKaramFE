import '../styles/nav.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchFilter from '../reusableComponents/filter';
import logo from '../asserts/logo.png';
import Login from './Login';
import {useNavigate} from 'react-router-dom'
import { useState,useRef, useEffect } from 'react';
import BasicTabs from './Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { parseShoppingData } from '../helpers/parser';
import Logout from './Logout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
type Anchor = 'right';

const NavBar = () => {
  const [state, setState] = React.useState({right: false });
  const [navData, setNavData] = useState(false);
  const shoppingData = useSelector((state) => state.shopping);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const logoutRef = useRef(null)
  const navigate =useNavigate()
  const handleLogout = () => {
    setIsLogoutOpen(true);
  };
  const handleLogoutClose = () => {
    setIsLogoutOpen(false);
  };
  const HandleBack=()=>{
    toggleDrawer('right', false)();
  }
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
  return (
    <div className="nav">
      <div className="image-container">
        <img src={logo} alt="" style={{ width: '100%', objectFit: 'contain' }} />
      </div>
      <div className="filter-container">
        <SearchFilter />
      </div>
      <div className="carts">
        <Badge badgeContent={navData?.wishlist?.length} color="success">
          <FavoriteBorderIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
          <NotificationsNoneIcon/>
        </Badge>
        <Badge badgeContent={navData?.cart?.length} color="success">
          <ShoppingCartIcon  onClick={()=>{navigate('/viewcart')}}/>
        </Badge>
        <div>
          <div style={{ position: 'relative' }}>
            {navData?.id ? (
              <PersonIcon onClick={handleLogout} />
            ) : (
              <a onClick={toggleDrawer('right', true)}>Log/Signup</a>
            )}
            <div style={{ width: '100%', position: 'absolute', top: '150%', right: '550%' }}>
              {isLogoutOpen && (
                <div ref={logoutRef}>
                  <Logout onLogout={handleLogoutClose} />
                </div>
              )}
            </div>
          </div>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} style={{width:"100%",height:"auto"}}>
            {list('right')}
           
            <div style={{ width: '100%', height: '100%' }}>
            <div style={{width:'100%',paddingLeft:'20px',height:'6%',display:'flex',alignItems:'end'}}>
            <KeyboardBackspaceIcon onClick={HandleBack} style={{color:'#8B8589'}}/>
            </div>
              <div style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'center' }}>
                <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
              </div>
              <div style={{ width: '100%', height: '74%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '80%', height: '100%' }}>
                  <BasicTabs closeDrawer={HandleBack} />
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
