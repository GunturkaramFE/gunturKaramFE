import Typography from '@mui/material/Typography';
import '../styles/navads.css'

const DisplayAdsOnNav=()=>{
    
    return(<div className="nav-ads">
    <Typography variant="button" display="block" gutterBottom style={{fontSize: "12px",color:"white",fontFamily: "cursive"}}>
    Elevate Your Meals with Our Pickles
      </Typography>
      <Typography variant="button" display="block" gutterBottom style={{fontSize: "12px",color:"white",fontFamily: "cursive"}}>
     Track Your Order
      </Typography>
      <Typography variant="button" display="block" gutterBottom style={{fontSize: "12px",color:"white",fontFamily: "cursive"}}>
      Now Shipping Across India
      </Typography>

        </div>)
}

export default DisplayAdsOnNav;