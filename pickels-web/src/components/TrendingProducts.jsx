import '../styles/trendingProducts.css';
import CarouselSmall from '../reusableComponents/carouselS';
import ProductCard from '../reusableComponents/productCard';
import { addProduct } from '../store/trendingProductsSlicer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import {trending} from '../asserts/trending'

const TopProducts = () => {
  const dispatch = useDispatch();
  const trendingProducts = useSelector(state => state.trendingProducts);
  const [RenderProducts,setRenderProducts]=useState()

  const fetchTrendingProducts = async () => {
    try {
      const result = await api.get('user/trending-items/get');
      const newProducts = result?.originalProducts?.items || [];
      dispatch(addProduct(newProducts));
      setRenderProducts(newProducts)
    } catch (error) {
      console.error('Error fetching trending products:', error);
    }
  };

  useEffect(() => {
    fetchTrendingProducts();
   
  }, [dispatch]);

  return (
    <>
      {trendingProducts?.length>0?(<div className="top-products">
        <p className="lead">Top Trending Pickels For You ..!</p>
        <CarouselSmall data={RenderProducts} Component={ProductCard} />
      </div>):(<>sxsx</>)}
    </>
  );
};

export default TopProducts;
