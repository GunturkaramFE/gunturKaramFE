import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import RedeemIcon from '@mui/icons-material/Redeem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../asserts/logo.png';

const MainMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    toggleDrawer();
  };

  const menuItems = [
    { icon: <DashboardIcon />, text: 'Dashboard', path: '/admin-menu' },
    { icon: <InventoryIcon />, text: 'Products', path: '../admin-menu/products-menu' },
    { icon: <PersonIcon />, text: 'Users', path: '/users' },
    { icon: <ShoppingCartIcon />, text: 'Orders', path: '/orders' },
    { icon: <RedeemIcon />, text: 'Vouchers', path: '../admin-menu/vouchers' },
  ];

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div style={{ padding: '16px', textAlign: 'center' }}>
        <div style={{ height: '10vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logo} alt="Logo" style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '50%' }} />
        </div>
      </div>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigateTo(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <div className={`d-flex justify-content-between w-100 h-10 bg-primary text-white ${isDrawerOpen ? 'shifted' : ''}`} style={{ width: '100%', position: 'fixed', top: 0, zIndex: 1000 }}>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </div>

      <div style={{ paddingTop: '10vh' }}>{/* Add your content here */}</div>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {list}
      </Drawer>
    </>
  );
};

export default MainMenu