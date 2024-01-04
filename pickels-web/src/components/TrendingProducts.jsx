import '../styles/trendingProducts.css';
import CarouselSmall from '../reusableComponents/carouselS';
import ProductCard from '../reusableComponents/productCard';
import { addProduct } from '../store/trendingProductsSlicer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import {trending} from '../asserts/trending'

const TopProducts = () => {
  const dispatch = useDispatch();
  const trendingProducts = useSelector(state => state.trendingProducts);

  const fetchTrendingProducts = async () => {
    try {
      const result = await api.get('user/trending-items/get/');
      const newProducts = result?.originalProducts?.items || [];
      // Dispatch the addProduct action to set the new array of products in the trendingProducts store
      dispatch(addProduct(newProducts));
    } catch (error) {
      console.error('Error fetching trending products:', error);
    }
  };

  useEffect(() => {
    fetchTrendingProducts();
    console.log(trendingProducts)
  }, [dispatch]);

 
  useEffect(() => {
    console.log(trendingProducts);
  }, [trendingProducts]);

  return (
    <>
      <div className="top-products">
        <p className="lead">Top Trending Pickels For You ..!</p>
        <CarouselSmall data={trending} Component={ProductCard} />
      </div>
    </>
  );
};

export default TopProducts;
