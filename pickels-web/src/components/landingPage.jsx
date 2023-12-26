import BannerWrapper from "../banners/bannerWrapper"
import NavBar from "../navComponents/mainNav"
import DisplayAdsOnNav from "../navComponents/navads"
import Carousel from "../reusableComponents/carousel"
import ScrollingContent from "./Benifits"
import Bestseller from "./Topproducts"
import TopProducts from "./TrendingProducts"
import Footer from "./footer"
const Landing_page=()=>{
    return(<div style={{ width: "100%", height: "auto", backgroundColor: "#eeeee4" }}>
    <DisplayAdsOnNav/>
    <NavBar/> 
    <div className="carousel-container" style={{width:"100%",height:"auto"}}>
    <Carousel/>
    </div >
    <div style={{width:"100%",height:"55vh",marginTop:"5px"}}><TopProducts/></div>
    <div style={{width:"100%",height:"auto",marginTop:"5px"}}><Bestseller/></div>
    <div style={{width:"100%",height:"20vh",marginTop:"5px"}}><ScrollingContent/></div>    
    <div style={{width:"100%",height:'auto'}}>
   <BannerWrapper />
   <Footer/> 
    </div>       
    </div>)
}
export default Landing_page