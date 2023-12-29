import '../styles/nav.css'
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
import BasicTabs from './Tabs';
type Anchor = 'right';
const NavBar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

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
        <Badge badgeContent={4} color="success">
          <FavoriteBorderIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
          <NotificationsNoneIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
          <ShoppingCartIcon />
        </Badge>
      <div>
      {true ? <a onClick={toggleDrawer('right', true)}>Log/Signup</a> : (<PersonIcon/>)}
  <Drawer
    anchor="right"
    open={state.right}
    onClose={toggleDrawer('right', false)}
   >
    {list('right')}
    <div style={{width:'100%',height:"100%"}}>
      <div style={{width:"100%",height:'20%',display:'flex',justifyContent:'center'}}>
      <img src={logo} alt="" style={{ width: '200px', objectFit: 'contain' }} />
      </div>
      <div style={{width:'100%',height:"80%" ,display:'flex',justifyContent:'center'}} >
      <div style={{width:"80%",height:'100%'}}>
        <BasicTabs/>            
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
