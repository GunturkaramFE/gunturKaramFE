import React from 'react';
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

const ProductLayout = ({ children }) => {
  return (
    <>
      <MainMenu />
      {children}
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify" element={<VerifyDiv />} />
          <Route path="/ViewCart" element={<ViewCart />} />
          <Route path="/Products" element={<ProductsContainer />} />
          <Route path="/Edit" element={<EditAddress />} />
          <Route path="/Checkout" element={<CheckoutPage />} />

          {/* Admin Routes */}
          <Route
            path="/admin-menu/*"
            element={
              <ProductLayout>
                <Routes>
                  <Route path="/add-product" element={<HandleAllProducts />} />
                  <Route path="/products-menu" element={<ProductMenu />} />
                  <Route path="/TrenditemRemove" element={<Trendremove/>} />
                  <Route path="/manage-products" element={<ManageProducts />} />
                </Routes>
              </ProductLayout>
            }
          />
          <Route path='/view-profile' element={<EditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
