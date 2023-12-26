import '../styles/trendingProducts.css'
import CarouselSmall from "../reusableComponents/carouselS";
import { trending } from '../asserts/trending';
import ProductCard from '../reusableComponents/productCard';
const TopProducts=()=>{

    return(<>
    <div className="top-products">
    <p class="lead">
    Top Trending Pickels For You ..!
  </p>
  {<CarouselSmall data={trending} Component={ProductCard}/>}
  
    </div>
    </>)
}
export default TopProducts;