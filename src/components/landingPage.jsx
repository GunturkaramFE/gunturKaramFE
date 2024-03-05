import BannerWrapper from "../banners/bannerWrapper"
import NavBar from "../navComponents/mainNav"
import DisplayAdsOnNav from "../navComponents/navads"
import Carousel from "../reusableComponents/carousel"
import AboutContainer from "./AboutContainer"
import ScrollingContent from "./Benifits"
import PaperCard from "./DeliveryData"
import PickleComponent from "./PickleComponent"
import Bestseller from "./Topproducts"
import TopProducts from "./TrendingProducts"
import Advertisement from "./Advertisement"
import Footer from "./footer";
const Landing_page=()=>{
    return(
    <div style={{ width: "100%", height: "auto", backgroundColor: "#eeeee4" }}>
    {/* <DisplayAdsOnNav/> */}
    <NavBar  /> 
    <div style={{width:'100%',position:'relative'}}>
    <div className="carousel-container" style={{width:"100%",height:"auto"}}>
    <Carousel/>
    </div >
    <PaperCard/>
    </div>    
    <div style={{width:"100%",height:"55vh",marginTop:"90px" }}><TopProducts/></div>
    <div style={{width:"100%",height:"auto" ,backgroundColor:'white' }}><AboutContainer/></div>
    <div style={{width:"100%",height:"auto"}}><PickleComponent/></div>  
    <div style={{width:"100%",height:"auto",marginTop:"5px"}}><Bestseller/></div>
    <div style={{width:"100%",height:"20vh"}}><ScrollingContent/></div>   
    <div style={{width:"100%",height:"auto"}}><Advertisement/></div>  
    <div style={{width:"100%",height:'auto'}}>{/* <BannerWrapper /> */}  
   <Footer/> 
    </div>       
    </div>
    )
}
export default Landing_page