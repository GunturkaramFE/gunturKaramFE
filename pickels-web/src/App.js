import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import OrderConfirm from './ProductStore/OrderConfirm';
import PlaceOrder from './Payments/PlaceOrder';
import OrderStatus from './ProductStore/OrderStatus';
import Vouchers from './dev/Vouchers';
import ManageOrders from './dev/manageOrders';
import MyOrders from './ProductStore/OrderShipping';
import AlluserDetails from './dev/AlluserDetails';
import { useSelector } from 'react-redux';


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
  const user = useSelector((state) => state.user);
  let restriceted=['/myorders','/Edit','/ViewCart','/verify']
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
            <Route path="/ViewCart" element={user.id ?<ViewCart /> : <Navigate to="/" />} />
            <Route path="/Products" element={<ProductsContainer />} />
            <Route path="/Edit" element={<EditAddress />} />
            <Route path="/Checkout" element={<CheckoutPage />} />
            <Route path='/ViewProduct/:id' element={<View />} />
            <Route path='/WishlistProduct' element={<Wishlist/>} />
            <Route path='/empty' element={<EmptyData/>} />
            <Route path='/MyOrders' element={<MyOrders/>} />
            <Route path='MyOrders/Orderdetails/:id' element={<OrderStatus/>} />
            <Route path='/OrderConfirm' element={<OrderConfirm/>} />
            <Route path='/Orderdetails/:id' element={<OrderStatus/>} />         
            <Route path='/OrderStatus/:Id' element={<OrderConfirm/>} />
            <Route path='/Confirm-order' element={<PlaceOrder/>} />
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
                    <Route path="/userdetails" element={<AlluserDetails/>} />
                    <Route path="/vouchers" element={<Vouchers/>} />        

                    <Route path='/manage-orders' element={<ManageOrders/>}/>

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
