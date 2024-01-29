import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage';
import VerifyDiv from './Authorization/Verifydiv';
import ProductsContainer from './ProductStore/ProductsContainer';
import ViewCart from './ProductStore/ViewCart';
import EditAddress from './ProductStore/EditAddress';
import HandleAllProducts from './dev/allProducts';
import CheckoutPage from './ProductStore/CheckoutPage';
import MainMenu from './dev/main';
import ProductMenu from './dev/productMenu';
import ManageProducts from './dev/manageProducts';
import EditProfile from './navComponents/EditProfile';
import Trendremove from './dev/Trendremove';
import View from './reusableComponents/View';
import OfflineMessage from './helpers/nointernet'; 
import Wishlist from './ProductStore/WishList';
import EmptyData from './reusableComponents/EmptyData';
import PlaceOrder from './Payments/PlaceOrder';
const ProductLayout = ({ children }) => {
  return (
    <>
      <MainMenu />
      {children}
    </>
  );
};

function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(window.navigator.onLine);
    };

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {isOnline ? (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/verify" element={<VerifyDiv />} />
            <Route path="/ViewCart" element={<ViewCart />} />
            <Route path="/Products" element={<ProductsContainer />} />
            <Route path="/Edit" element={<EditAddress />} />
            <Route path="/Checkout" element={<CheckoutPage />} />
            <Route path='/ViewProduct/:id' element={<View />} />
            <Route path='/WishlistProduct' element={<Wishlist/>} />
            <Route path='/empty' element={<EmptyData/>} />
            <Route path='/Confirm-order/' element={<PlaceOrder/>} />
            {/* Admin Routes */}
            <Route
              path="/admin-menu/*"
              element={
                <ProductLayout>
                  <Routes>
                    <Route path="/add-product" element={<HandleAllProducts />} />
                    <Route path="/products-menu" element={<ProductMenu />} />
                    <Route path="/TrenditemRemove" element={<Trendremove />} />
                    <Route path="/manage-products" element={<ManageProducts />} />
                  </Routes>
                </ProductLayout>
              }
            />
            <Route path='/view-profile' element={<EditProfile />} />
          </Routes>
        ) : (
          <OfflineMessage />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
