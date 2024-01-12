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
          {/* == Admin Routes */}
          <Route path='/admin-menu' element={<MainMenu />} />
          <Route path='/edit-profile' element={<EditProfile />} />
        </Routes>

        {/* Admin Routes */}
        <Route
          path="/admin-menu/*"
          element={
            <ProductLayout>
              <Routes>
                <Route path="/add-product" element={<HandleAllProducts />} />
                <Route path="/products-menu" element={<ProductMenu />} />
                <Route path="/manage-products" element={<ManageProducts />} />
              </Routes>
            </ProductLayout>
          }
        />
      </BrowserRouter>
    </>
  );
}

export default App;

