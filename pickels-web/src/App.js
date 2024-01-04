import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing_page from './components/landingPage';
import Verifydiv from './Authorization/Verifydiv';
import ProductsContainer from './ProductStore/ProductsContainer';
import ViewCart from './ProductStore/ViewCart';
import EditAddress from './ProductStore/EditAddress';
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
      </Routes>
      </BrowserRouter>                 
</>
  );
}

export default App;
