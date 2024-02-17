import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage';
import VerifyDiv from './Authorization/Verifydiv';
import ProductsContainer from './ProductStore/ProductsContainer';
import ViewCart from './ProductStore/ViewCart';
import HandleAllProducts from './dev/allProducts';
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
import Alertpage from './reusableComponents/Alertpage';
import AdminDashBoard from './dev/AdminDashBoard';
import Knowmore from './navComponents/Knowmore';



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
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/verify" element={<VerifyDiv/>}/>
            <Route path="/ViewCart" element={user.id ?<ViewCart/> : <Navigate to="/" />} />
            <Route path="/Products" element={<ProductsContainer />} />
            <Route path='/ViewProduct/:id' element={<View />} />
            <Route path='/WishlistProduct' element={user.id ?<Wishlist/> : <Navigate to="/"/>} />
            <Route path='/empty' element={<EmptyData/>} />
            <Route path='/Knowmore' element={<Knowmore/>} />
            <Route path='/MyOrders' element={user.id ?<MyOrders/>: <Navigate to="/"/>} />
            <Route path='MyOrders/Orderdetails/:id' element={user.id ?<OrderStatus/>: <Navigate to="/"/>} />
            <Route path='/OrderConfirm' element={user.id ?<OrderConfirm/>: <Navigate to="/"/>} />
            <Route path='/Orderdetails/:id' element={user.id ?<OrderStatus/>: <Navigate to="/"/>} />         
            <Route path='/OrderStatus/:Id' element={user.id ?<OrderConfirm/>: <Navigate to="/"/>} />
            <Route path='/Confirm-order' element={user.id ?<PlaceOrder/>: <Navigate to="/"/>} />
            <Route path='/Alertpage' element={<Alertpage/>} />
            <Route path='/view-profile' element={user.id ?<EditProfile />:<Navigate to="/"/>} />
            {/* Admin Routes */} 
            {user.type === 'admin' ? ( 
              <Route
                path="/admin-menu/*"
                element={
                  <ProductLayout>
                    <Routes>
                      <Route path="/add-product" element={<HandleAllProducts />} />
                      <Route path="/products-menu" element={<ProductMenu />} />
                      <Route path="/TrenditemRemove" element={<Trendremove />} />
                      <Route path="/manage-products" element={<ManageProducts />} />
                      <Route path="/userdetails" element={<AlluserDetails />} />
                      <Route path="/vouchers" element={<Vouchers />} /> 
                      <Route path='/manage-orders' element={<ManageOrders />} />
                      <Route path='/dashboard' element={<AdminDashBoard/>}/>
                    </Routes>
                  </ProductLayout>
                }
              />
            ) : (
              // Render the Alertpage component for non-admin users accessing admin pages
              <Route path="/admin-menu/*" element={<Alertpage message="You are not authorized to access this page" 
              src="https://icon-library.com/images/not-found-icon/not-found-icon-6.jpg" navigation='/'
              />} />
            )}
          </Routes>
        ) : (
          <OfflineMessage />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
