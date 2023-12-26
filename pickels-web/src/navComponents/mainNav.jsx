import '../styles/nav.css'
import SearchFilter from '../reusableComponents/filter';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const NavBar = () => {
  return (
    <>
      <div className="nav" >
      <div className="image-container">
    <img src="https://orderpickles.in/wp-content/uploads/2021/10/Logo-11.png" alt=""style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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
  <Typography variant="overline" display="block" gutterBottom style={{ fontSize: "15px", display:"flex",flexDirection:"row", alignItems:"center" }}>
        <CurrencyRupeeIcon/>&nbsp;0.00
      </Typography>


 </div>

      </div>
    </>
  );
};

export default NavBar;
