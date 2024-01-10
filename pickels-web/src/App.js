import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing_page from './components/landingPage';
import Verifydiv from './Authorization/Verifydiv';
import ProductsContainer from './ProductStore/ProductsContainer';
import ViewCart from './ProductStore/ViewCart';
import EditAddress from './ProductStore/EditAddress';
import HandleAllProducts from './dev/allProducts'
import CheckoutPage from './ProductStore/CheckoutPage';
import MainMenu from './dev/main'
function App() {
 
return (
<>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing_page/>}/> 
        <Route path='/ViewCart' element={<ViewCart/>} /> 
        <Route path='/Products' element={<ProductsContainer/>} />
        <Route path='/verify' element={<Verifydiv/>} />
        <Route path='/Edit' element={<EditAddress/>}/>

        <Route path='/manage-products' element={<HandleAllProducts/>}/>

        <Route path='/Checkout' element={<CheckoutPage/>}/>
        {/* == Admin Routes */}
        <Route path='/admin-menu' element={<MainMenu/>}/>
       </Routes>

      </BrowserRouter>                 
</>
  );
}

export default App;
