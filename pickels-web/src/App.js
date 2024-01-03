import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing_page from './components/landingPage';
import Verifydiv from './Authorization/Verifydiv';
import ProductsContainer from './ProductStore/ProductsContainer';
import ViewCart from './ProductStore/ViewCart';
function App() {
 
return (
<>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing_page/>}/> 
        <Route path='/ViewCart' element={<ViewCart/>} /> 
        <Route path='/Products' element={<ProductsContainer/>} />
        <Route path='/verify' element={<Verifydiv/>} />
      </Routes>
      </BrowserRouter>                 
</>
  );
}

export default App;
