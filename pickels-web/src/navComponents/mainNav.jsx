import '../styles/nav.css'
import SearchFilter from '../reusableComponents/filter';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import logo from '../asserts/logo.png'
const NavBar = () => {
  return (
    <>
      <div className="nav" >
      <div className="image-container">
    <img src={logo} alt=""style={{ width: '100%', height: '100%', objectFit: 'contain' }}
 />
  </div>
   <div className='filter-container'>
  <SearchFilter/>
 </div>
 <div className='carts'>
 <Typography variant="button" display="block" gutterBottom>
        LOGIN / Register
  </Typography>
  <FavoriteBorderIcon/>
  <NotificationsNoneIcon/>
  <ShoppingCartIcon/>
 


 </div>

      </div>
    </>
  );
};

export default NavBar;
